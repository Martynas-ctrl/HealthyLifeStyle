import { gql } from '@apollo/client';

const UPDATE_SUNDAY = gql`
  mutation UpdateExercise($exercise: String, $reps: Int, $sets: Int, $weight: Int, $id: ID){
    __typename
    updateSundayWorkout(
      where: { id: $id }
      data: {
      exercise: $exercise,
      reps: $reps,
      sets: $sets,
      weight: $weight,
      }) {
        id
      }
}
`;

export default UPDATE_SUNDAY;