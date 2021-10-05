import { gql } from '@apollo/client';

const SUNDAYADDWORKOUT_QUERY = gql`
  mutation AddSundayWorkout($exercise: String, $reps: Int, $sets: Int, $weight: Int){
    __typename
    createSundayWorkout(data: {
      exercise: $exercise,
      reps: $reps,
      sets: $sets,
      weight: $weight,
      }) {
        id
      }
  }
`;

export default SUNDAYADDWORKOUT_QUERY;