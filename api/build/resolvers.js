"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_PRE_LEAGUES = "https://api.eslgaming.com/play/v1/leagues";
var _default2 = {
  Query: {
    getTournament: function getTournament(parent, _ref) {
      var input = _ref.input;
      return new Promise(function (resolve, reject) {
        (0, _request.default)("".concat(API_PRE_LEAGUES, "/").concat(input.tournyId), function (error, response, body) {
          var data = JSON.parse(body);
          resolve((0, _lodash.merge)({}, {
            id: data.id,
            name: data.name.short,
            date: data.timeline.inProgress.begin
          }));
        });
      }).then(function (obj) {
        return new Promise(function (resolve2, reject) {
          (0, _request.default)("".concat(API_PRE_LEAGUES, "/").concat(input.tournyId, "/contestants"), function (error, response, body) {
            var data = JSON.parse(body);
            resolve2((0, _lodash.merge)(obj, {
              teams: data.map(function (team) {
                return {
                  id: team.id,
                  name: team.name
                };
              })
            }));
          });
        }).then(function (obj2) {
          return new Promise(function (resolve3, reject) {
            (0, _request.default)("".concat(API_PRE_LEAGUES, "/").concat(input.tournyId, "/matches"), function (error, response, body) {
              var data = JSON.parse(body);
              resolve3((0, _lodash.merge)(obj2, {
                matches: data.map(function (mtch) {
                  return {
                    id: mtch.id,
                    team_one: mtch.contestants[0].team.name,
                    team_one_score: mtch.result.score[mtch.contestants[0].team.id],
                    team_two: mtch.contestants[1].team.name,
                    team_two_score: mtch.result.score[mtch.contestants[1].team.id],
                    beginAt: mtch.beginAt
                  };
                })
              }));
            });
          }).then(function (masterObj) {
            return masterObj;
          });
        });
      }); // https://api.eslgaming.com/play/v1/leagues/177161 - Name Date
      // https://api.eslgaming.com/play/v1/leagues/177161/contestants - Team names / ids.
      // https://api.eslgaming.com/play/v1/leagues/177161/results - Team ids / scores
    }
  },
  Mutation: {
    default: function _default() {
      return null;
    }
  }
};
exports.default = _default2;