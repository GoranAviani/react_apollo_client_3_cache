import {gql} from '@apollo/client';

export const TODO_LIST = gql`
  query TodoList($id: ID!) {
    data(id: $id) {
      id
      text
      completed
    }
  }
`;