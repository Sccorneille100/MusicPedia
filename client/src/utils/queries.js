import { gql } from '@apollo/client';

export const QUERY_SONGS = gql`
  query songs {
    songs {
      _id
      name
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      song1
      song2
      song1_votes
      song2_votes
    }
  }
`;
