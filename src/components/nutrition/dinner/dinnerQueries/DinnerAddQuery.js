import { gql } from '@apollo/client';

const ADD_DINNER = gql`
  mutation AddDinner($foodName: String!, $protein: Int!, 
  $carbs: Int!, $fat: Int!, $totalCalories: Int){
    __typename
    createDinner(data: {
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

export default ADD_DINNER;


