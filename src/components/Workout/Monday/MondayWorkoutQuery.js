import { gql } from '@apollo/client';

const MONDAYWORKOUT_QUERY = gql`
  query {
    mondayWorkouts{
      id
      exercise
      reps
      sets
      weight
      rest
    }
  }
`;

export default MONDAYWORKOUT_QUERY;