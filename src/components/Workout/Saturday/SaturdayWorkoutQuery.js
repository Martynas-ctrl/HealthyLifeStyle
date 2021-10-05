import { gql } from '@apollo/client';

const SATURDAYWORKOUT_QUERY = gql`
  query {
    saturdayWorkouts{
      id
      exercise
      reps
      sets
      weight
      rest
    }
  }
`;

export default SATURDAYWORKOUT_QUERY;