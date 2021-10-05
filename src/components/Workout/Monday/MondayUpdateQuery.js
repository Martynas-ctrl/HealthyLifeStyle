import { gql } from '@apollo/client';

const UPDATE_MONDAY = gql`
  mutation UpdateExercise($exercise: String!, $reps: Int!, $sets: Int!, $weight: Float!, $rest: Float!, $id: ID){
    __typename
    updateMondayWorkout(
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

export default UPDATE_MONDAY;