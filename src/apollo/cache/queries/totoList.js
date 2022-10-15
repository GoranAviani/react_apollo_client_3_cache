import {gql} from '@apollo/client';

export const USER_DATA = gql`
  query UserDataQuery($id: ID!) {
    userData(id: $id) {
      name
      lastname
      email
      address
    }
  }
`;