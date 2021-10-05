import { gql } from '@apollo/client';

const MONDAYADDWORKOUT_QUERY = gql`
  mutation AddMondayWorkout($exercise: String!, $reps: Int!, $sets: Int!, $weight: Float!, $rest: Float!){
    __typename
    createMondayWorkout(data: {
      exercise: $exercise,
      reps: $reps,
      sets: $sets,
      weight: $weight,
      rest: $rest,
      }) {
        id
      }
  }
`;

export default MONDAYADDWORKOUT_QUERY;