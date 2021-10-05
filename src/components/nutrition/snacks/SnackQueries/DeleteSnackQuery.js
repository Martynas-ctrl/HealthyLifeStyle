import { gql } from '@apollo/client';

const DELETE_SNACK = gql`
  mutation RemoveLunch($id: ID){
    __typename
    deleteSnack(
      where: { id: $id }
    ) {
      id
    }
}
`;

export default DELETE_SNACK;