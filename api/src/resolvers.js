import { merge } from "lodash";
import request from "request";
const API_PRE_LEAGUES = "https://api.eslgaming.com/play/v1/leagues";

export default {
  Query: {
    getTournament: (parent, { input }) => {
      return new Promise((resolve, reject) => {
        request(
          `${API_PRE_LEAGUES}/${input.tournyId}`,
          (error, response, body) => {
            console.log(error, response, body);
            const data = JSON.parse(body);
            resolve(
              merge(
                {},
                {
                  id: data.id,
                  name: data.name.short,
                  date: data.timeline.inProgress.begin
                }
              )
            );
          }
        );
      }).then(obj => {
        return new Promise((resolve2, reject) => {
          request(
            `${API_PRE_LEAGUES}/${input.tournyId}/contestants`,
            (error, response, body) => {
              const data = JSON.parse(body);
              resolve2(
                merge(obj, {
                  teams: data.map(team => ({ id: team.id, name: team.name }))
                })
              );
            }
          );
        }).then(obj2 => {
          return new Promise((resolve3, reject) => {
            request(
              `${API_PRE_LEAGUES}/${input.tournyId}/matches`,
              (error, response, body) => {
                const data = JSON.parse(body);
                resolve3(
                  merge(obj2, {
                    matches: data.map(mtch => ({
                      id: mtch.id,
                      team_one: mtch.contestants[0].team.name,
                      team_one_score:
                        mtch.result.score[mtch.contestants[0].team.id],
                      team_two: mtch.contestants[1].team.name,
                      team_two_score:
                        mtch.result.score[mtch.contestants[1].team.id],
                      beginAt: mtch.beginAt
                    }))
                  })
                );
              }
            );
          }).then(masterObj => {
            return masterObj;
          });
        });
      });

      // https://api.eslgaming.com/play/v1/leagues/177161 - Name Date
      // https://api.eslgaming.com/play/v1/leagues/177161/contestants - Team names / ids.
      // https://api.eslgaming.com/play/v1/leagues/177161/results - Team ids / scores
    }
  },
  Mutation: {
    default: () => {
      return null;
    }
  }
};
