import {gql} from '@apollo/client';

export const USER_DATA = gql`
  query TodoList($id: ID!) {
    userData(id: $id) {
      name
      lastname
      email
      address
    }
  }
`;