import {gql} from '@apollo/client';

export const TODO_LIST = gql`
    query ReadTodo($id: Int!) {
      todo(id: $id) {
        id
        text
        completed
        added_extra_field
      }
    }
  `;