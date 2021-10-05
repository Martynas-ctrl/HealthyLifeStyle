import { gql } from '@apollo/client';

const UPDATE_SATURDAY = gql`
  mutation UpdateExercise($exercise: String, $reps: Int, $sets: Int, $weight: Int, $id: ID){
    __typename
    updateSaturdayWorkout(
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

export default UPDATE_SATURDAY;