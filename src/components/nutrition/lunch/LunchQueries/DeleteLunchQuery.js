import { gql } from '@apollo/client';

const DELETE_LUNCH = gql`
  mutation RemoveLunch($id: ID){
    __typename
    deleteNutritionLunch(
      where: { id: $id }
    ) {
      id
    }
}
`;

export default DELETE_LUNCH;