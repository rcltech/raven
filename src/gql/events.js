import { gql } from 'apollo-boost';

export const GET_ALL_EVENTS = gql`
  query events {
    events {
      id
      organiser {
        id
        username
        email
      }
      title
      start
      end
      venue
      image_url
      description
    }
  }
`;
