/* @flow */
import { graphql } from "react-apollo";
import gql from "graphql-tag";

export const getTournamentQuery = gql`
  query getTournament($input: TournamentSearchInput) {
    getTournament(input: $input) {
      id
      name
      date
      matches {
        id
        team_one
        team_one_score
        team_two
        team_two_score
        beginAt
      }
      teams {
        id
        name
      }
    }
  }
`;

const getTournamentOptions = {
  options: ({
    match: {
      params: { id }
    }
  }) => ({
    variables: {
      input: {
        tournyId: id
      }
    }
  })
};

export const getTournament = graphql(getTournamentQuery, getTournamentOptions);
