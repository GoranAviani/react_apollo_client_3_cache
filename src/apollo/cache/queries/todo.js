import {gql} from '@apollo/client';

export const TODO_LIST = gql`
    query ReadTodo($id: ID!) {
      todo(id: $id) {
        id
        text
        completed
      }
    }
  `;