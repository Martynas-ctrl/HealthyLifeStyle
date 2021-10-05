import { gql } from '@apollo/client';

const SATURDAYADDWORKOUT_QUERY = gql`
  mutation AddSaturdayWorkout($exercise: String, $reps: Int, $sets: Int, $weight: Int){
    __typename
    createSaturdayWorkout(data: {
      exercise: $exercise,
      reps: $reps,
      sets: $sets,
      weight: $weight,
      }) {
        id
      }
  }
`;

export default SATURDAYADDWORKOUT_QUERY;