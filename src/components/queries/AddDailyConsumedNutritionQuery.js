import { gql } from '@apollo/client';

const ADDDAILYCONSUMEDNUTRITION_USER = gql`
  mutation AddDailyConsumedNutrition($protein: Int!, $carbs: Int!, $fat: Int!){
    __typename
    createDailyConsumedNutrition(data: {
      protein: $protein,
      carbs: $carbs,
      fat: $fat,
      }) {
        id
      }
}
`;

export default ADDDAILYCONSUMEDNUTRITION_USER;