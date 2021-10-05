import { gql } from '@apollo/client';

const SUNDAYWORKOUT_QUERY = gql`
  query {
    sundayWorkouts{
      id
      exercise
      reps
      sets
      weight
      rest
    }
  }
`;

export default SUNDAYWORKOUT_QUERY;