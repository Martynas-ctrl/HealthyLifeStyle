import { gql } from '@apollo/client';

const THURSDAYADDWORKOUT_QUERY = gql`
  mutation AddThursdayWorkout($exercise: String, $reps: Int, $sets: Int, $weight: Int){
    __typename
    createThursdayWorkout(data: {
      exercise: $exercise,
      reps: $reps,
      sets: $sets,
      weight: $weight,
      }) {
        id
      }
  }
`;

export default THURSDAYADDWORKOUT_QUERY;