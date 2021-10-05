import { gql } from '@apollo/client';

const THURSDAYWORKOUT_QUERY = gql`
  query {
    thursdayWorkouts{
      id
      exercise
      reps
      sets
      weight
      rest
    }
  }
`;

export default THURSDAYWORKOUT_QUERY;