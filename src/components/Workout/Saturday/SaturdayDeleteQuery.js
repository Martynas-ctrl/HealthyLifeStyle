import { gql } from '@apollo/client';

const DELETE_SATURDAY = gql`
  mutation RemoveExercise($id: ID){
    __typename
    deleteSaturdayWorkout(
      where: { id: $id }
    ) {
      id
    }
}
`;

export default DELETE_SATURDAY;