import { gql } from '@apollo/client';

const DELETE_WEDNESDAY = gql`
  mutation RemoveExercise($id: ID){
    __typename
    deleteWednesdayWorkout(
      where: { id: $id }
    ) {
      id
    }
}
`;

export default DELETE_WEDNESDAY;