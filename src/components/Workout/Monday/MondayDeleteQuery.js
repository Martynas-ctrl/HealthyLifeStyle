import { gql } from '@apollo/client';

const DELETE_MONDAY = gql`
  mutation RemoveExercise($id: ID){
    __typename
    deleteMondayWorkout(
      where: { id: $id }
    ) {
      id
    }
}
`;

export default DELETE_MONDAY;