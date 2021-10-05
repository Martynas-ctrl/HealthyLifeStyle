import { gql } from '@apollo/client';

const UPDATE_WEDNESNDAY = gql`
  mutation UpdateExercise($exercise: String, $reps: Int, $sets: Int, $weight: Int, $id: ID){
    __typename
    updateWednesdayWorkout(
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

export default UPDATE_WEDNESNDAY;