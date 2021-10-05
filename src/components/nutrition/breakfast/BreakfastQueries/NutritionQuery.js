import { gql } from '@apollo/client';

const NUTRITION_QUERY = gql`
  query {
    nutritions{
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

// import { gql } from '@apollo/client';

// const NUTRITION_QUERY = gql`
//   query {
//     nutritions{
//       id
//       foodName
//       protein
//       carbs
//       fat
//       totalCalories
//       totalProtein
//     }
//   }
// `;

// export default NUTRITION_QUERY;



// import { gql } from '@apollo/client';

// const NUTRITION_QUERY = gql`
//   query {
//     breakfasts{
//       id
//       foodName
//       protein
//       carbs
//       fat
//     }
//   }
// `;

// export default NUTRITION_QUERY;






