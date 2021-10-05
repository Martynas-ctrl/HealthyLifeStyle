import { gql } from '@apollo/client';

const WEDNESDAYADDWORKOUT_QUERY = gql`
  mutation AddWednesdayWorkout($exercise: String, $reps: Int, $sets: Int, $weight: Int){
    __typename
    createWednesdayWorkout(data: {
      exercise: $exercise,
      reps: $reps,
      sets: $sets,
      weight: $weight,
      }) {
        id
      }
  }
`;

export default WEDNESDAYADDWORKOUT_QUERY;