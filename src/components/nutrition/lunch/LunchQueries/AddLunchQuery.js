import { gql } from '@apollo/client';

const ADD_LUNCH = gql`
  mutation AddLunch($foodName: String!, $protein: Int!, $carbs: Int!, $fat: Int!, $totalCalories: Int){
    __typename
    createNutritionLunch(data: {
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

export default ADD_LUNCH;