import { gql } from '@apollo/client';

const DELETE_THURSDAY = gql`
  mutation RemoveExercise($id: ID){
    __typename
    deleteThursdayWorkout(
      where: { id: $id }
    ) {
      id
    }
}
`;

export default DELETE_THURSDAY;