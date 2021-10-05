import { gql } from '@apollo/client';

const WEDNESDAYWORKOUT_QUERY = gql`
  query {
    wednesdayWorkouts{
      id
      exercise
      reps
      sets
      weight
      rest
    }
  }
`;

export default WEDNESDAYWORKOUT_QUERY;