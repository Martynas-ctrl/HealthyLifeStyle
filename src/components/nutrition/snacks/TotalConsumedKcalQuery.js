import { gql } from '@apollo/client';

const TOTALCONSUMEDKCALS_QUERY = gql`
  query {
    totalConsumedKcals{
    totalKcal
    }
  }
`;

export default TOTALCONSUMEDKCALS_QUERY;