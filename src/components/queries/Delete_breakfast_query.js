import { gql } from '@apollo/client';

const DELETE_BREAKFAST = gql`
  mutation RemoveNutrition($id: ID){
    __typename
    deleteNutrition(
      where: { id: $id }
    ) {
      id
    }
}
`;

export default DELETE_BREAKFAST;