import {gql} from '@apollo/client';

export const TODO_LIST = gql`
  query TodoList($id: ID!) {
    userData(id: $id) {
      name
      lastname
      email
      address
    }
  }
`;