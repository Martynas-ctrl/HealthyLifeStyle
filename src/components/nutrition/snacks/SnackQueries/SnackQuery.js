import { gql } from '@apollo/client';

const NUTRITION_QUERY = gql`
  query {
    snacks{
      id
      foodName
      protein
      carbs
      fat
      totalCalories
    }
  }
`;

export default NUTRITION_QUERY;