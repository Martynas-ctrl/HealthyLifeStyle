import { gql } from '@apollo/client';

const FRIDAYWORKOUT_QUERY = gql`
  query {
    fridayWorkouts{
      id
      exercise
      reps
      sets
      weight
      rest
    }
  }
`;

export default FRIDAYWORKOUT_QUERY;