const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Artist {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    Artist: [Artist]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(song1: String!, song2: String!): Matchup
    createVote(_id: String!, songNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
