import { gql } from '@apollo/client';

const UPDATE_FRIDAY = gql`
  mutation UpdateExercise($exercise: String, $reps: Int, $sets: Int, $weight: Int, $id: ID){
    __typename
    updateFridayWorkout(
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

export default UPDATE_FRIDAY;