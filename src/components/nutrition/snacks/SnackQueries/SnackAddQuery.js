import { gql } from '@apollo/client';

const ADD_SNACKS = gql`
  mutation AddSnacks($foodName: String!, $protein: Int!, $carbs: Int!, $fat: Int!, $totalCalories: Int){
    __typename
    createSnack(data: {
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

export default ADD_SNACKS;