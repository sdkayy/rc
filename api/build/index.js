"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _graphqlServerExpress = require("graphql-server-express");

var _graphqlTools = require("graphql-tools");

var _cors = _interopRequireDefault(require("cors"));

var _schema = _interopRequireDefault(require("./schema"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
var schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _schema.default,
  resolvers: _resolvers.default
});
var app = (0, _express.default)();
app.use((0, _cors.default)());
app.options("*", (0, _cors.default)());
app.get("/graphiql", (0, _graphqlServerExpress.graphiqlExpress)({
  endpointURL: "/api"
}));
app.post("/api", _bodyParser.default.json(), (0, _graphqlServerExpress.graphqlExpress)(function (req) {
  return {
    schema: schema,
    context: {
      user: req.user,
      req: req
    }
  };
}));
app.listen(PORT);