import { gql } from 'apollo-boost';

export const GET_ME = gql`
  query me {
    me {
      username
      first_name
      last_name
    }
  }
`;
