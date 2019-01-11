import express from "express";
import bodyParser from "body-parser";
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import { makeExecutableSchema } from "graphql-tools";
import cors from "cors";

import typeDefs from "./schema";
import resolvers from "./resolvers";
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use(cors());
app.options("*", cors());
app.get(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/api"
  })
);

app.post(
  "/api",
  bodyParser.json(),
  graphqlExpress(req => ({
    schema,
    context: {
      user: req.user,
      req
    }
  }))
);

app.listen(PORT);
