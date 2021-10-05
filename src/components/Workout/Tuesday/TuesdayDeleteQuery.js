import { gql } from '@apollo/client';

const DELETE_TUESDAY = gql`
  mutation RemoveExercise($id: ID){
    __typename
    deleteTuesdayWorkout(
      where: { id: $id }
    ) {
      id
    }
}
`;

export default DELETE_TUESDAY;