import { gql } from '@apollo/client';

const USERS_QUERY = gql`
  query {
    userInfos {
      id
      fullName
      gender
      age
      height
      weight
      total
      goal
      createdAt
    }
  }
`;

export default USERS_QUERY;


