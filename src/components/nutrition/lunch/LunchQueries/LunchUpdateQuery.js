import { gql } from '@apollo/client';

const UPDATE_NUTRITION = gql`
  mutation UpdateLunch($foodName: String, $protein: Int, $carbs: Int, $fat: Int, $totalCalories: Int, $id: ID){
    __typename
    updateNutritionLunch(
      where: { id: $id }
      data: {
      foodName: $foodName, 
      protein: $protein,
      carbs: $carbs,
      fat: $fat,
      totalCalories: $totalCalories,
      }) {
        id
      }
}
`;

export default UPDATE_NUTRITION;