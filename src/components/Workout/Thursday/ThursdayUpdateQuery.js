import { gql } from '@apollo/client';

const UPDATE_THURSDAY = gql`
  mutation UpdateExercise($exercise: String, $reps: Int, $sets: Int, $weight: Float!, $rest: Float!, $id: ID){
    __typename
    updateThursdayWorkout(
      where: { id: $id }
      data: {
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

export default UPDATE_THURSDAY;