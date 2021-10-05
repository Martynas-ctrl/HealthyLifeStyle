import { gql } from '@apollo/client';

const DELETE_FRIDAY = gql`
  mutation RemoveExercise($id: ID){
    __typename
    deleteFridayWorkout(
      where: { id: $id }
    ) {
      id
    }
}
`;

export default DELETE_FRIDAY;