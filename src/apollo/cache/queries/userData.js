import {gql} from '@apollo/client';

export const USER_DATA = gql`
  query UserDataQuery {
    userDataCache{
      name
      lastname
      email
      address
      favourite_toy
    }
  }
`;