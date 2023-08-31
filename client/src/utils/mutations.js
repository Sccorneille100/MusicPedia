import { gql } from '@apollo/client';

export const CREATE_ARTIST = gql`
  mutation createMatchup($song1: String!, $song2: String!) {
    createArtist(song1: $song1, song2: $song2) {
      _id
      song1
      song2
    }
  }
`;

export const CREATE_SONG = gql`
  mutation createSONG($_id: String!, $songNum: Int!) {
    createVote(_id: $_id, songNum: $songNum) {
      _id
      song1
      song2
      song1_votes
      song2_votes
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
  }
`;
