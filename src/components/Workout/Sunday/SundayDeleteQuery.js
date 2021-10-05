import { gql } from '@apollo/client';

const DELETE_SUNDAY = gql`
  mutation RemoveExercise($id: ID){
    __typename
    deleteSundayWorkout(
      where: { id: $id }
    ) {
      id
    }
}
`;

export default DELETE_SUNDAY;