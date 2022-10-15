export const TODO_LIST = gql`
  query TodoList($id: ID!) {
    todo(id: $id) {
      id
      text
      completed
    }
  }
`;