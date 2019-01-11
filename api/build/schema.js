"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = "\n  type Tournament {\n    id: String\n    name: String\n    date: String\n    matches: [Match]\n    teams: [Team]\n  }\n\n  type Match {\n    id: String\n    team_one: String\n    team_one_score: Int\n    team_two: String\n    team_two_score: Int\n    beginAt: String\n  }\n\n  type Team {\n    id: String\n    name: String\n  }\n\n  input TournamentSearchInput {\n    tournyId: String\n  }\n\n  type Query {\n    getTournament(input: TournamentSearchInput): Tournament\n  }\n\n  type Mutation {\n    default: String\n  }\n";
exports.default = _default;