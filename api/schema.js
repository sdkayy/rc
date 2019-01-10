export default `
  type Tournament {
    id: String
    name: String
    date: String
    matches: [Match]
    teams: [Team]
  }

  type Match {
    id: String
    team_one: String
    team_one_score: Int
    team_two: String
    team_two_score: Int
    beginAt: String
  }

  type Team {
    id: String
    name: String
  }

  input TournamentSearchInput {
    tournyId: String
  }

  type Query {
    getTournament(input: TournamentSearchInput): Tournament
  }

  type Mutation {
    default: String
  }
`;
