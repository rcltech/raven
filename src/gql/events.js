import { gql } from 'apollo-boost';

const GET_ALL_EVENTS = gql`
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
      subscribers {
        username
        first_name
        last_name
        image_url
      }
    }
  }
`;

const CREATE_EVENT = gql`
  mutation event(
    $title: String!
    $start: String!
    $end: String!
    $venue: String!
    $image_base64: String!
    $description: String
  ) {
    createEvent(
      title: $title
      start: $start
      end: $end
      venue: $venue
      image_base64: $image_base64
      description: $description
    ) {
      id
    }
  }
`;

const DELETE_EVENT = gql`
  mutation deleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

export { GET_ALL_EVENTS, CREATE_EVENT, DELETE_EVENT };
