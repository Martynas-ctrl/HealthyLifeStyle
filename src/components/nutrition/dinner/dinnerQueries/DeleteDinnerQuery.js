import { gql } from '@apollo/client';

const DELETE_DINNER = gql`
  mutation RemoveLunch($id: ID){
    __typename
    deleteDinner(
      where: { id: $id }
    ) {
      id
    }
}
`;

export default DELETE_DINNER;