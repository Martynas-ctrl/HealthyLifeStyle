import { gql } from '@apollo/client';

const FRIDAYADDWORKOUT_QUERY = gql`
  mutation AddFridayWorkout($exercise: String, $reps: Int, $sets: Int, $weight: Int){
    __typename
    createFridayWorkout(data: {
      exercise: $exercise,
      reps: $reps,
      sets: $sets,
      weight: $weight,
      }) {
        id
      }
  }
`;

export default FRIDAYADDWORKOUT_QUERY;