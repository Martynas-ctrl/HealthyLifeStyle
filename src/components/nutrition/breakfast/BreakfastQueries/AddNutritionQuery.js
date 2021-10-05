import { gql } from '@apollo/client';

const ADD_NUTRITION = gql`
  mutation AddNutrition($foodName: String!,$protein: Float!, $carbs: Float!, $fat: Float!, $totalCalories: Int){
    __typename
    createNutrition(data: {
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

export default ADD_NUTRITION;


// import { gql } from '@apollo/client';

// const ADD_NUTRITION = gql`
//   mutation AddNutrition($foodName: String!,$protein: Float!, $carbs: Float!, $fat: Float!, $totalCalories: Int, $totalProtein: Int){
//     __typename
//     createNutrition(data: {
//       foodName: $foodName, 
//       protein: $protein,
//       carbs: $carbs,
//       fat: $fat,
//       totalCalories: $totalCalories,
//       totalProtein: $totalProtein,
//       }) {
//         id
//       }
// }
// `;

// export default ADD_NUTRITION;


// const ADD_NUTRITION = gql`
//   mutation AddNutrition($foodName: String!,$protein: Int!, $carbs: Int!, $fat: Int!, $totalCalories: Int, $totalProtein: Int){
//     __typename
//     createNutrition(data: {
//       foodName: $foodName, 
//       protein: $protein,
//       carbs: $carbs,
//       fat: $fat,
//       totalCalories: $totalCalories,
//       totalProtein: $totalProtein,
//       }) {
//         id
//       }
// }
// `;

// import { gql } from '@apollo/client';

// const ADD_NUTRITION = gql`
//   mutation AddBreakfast($foodName: String!,$protein: Float!, $carbs: Float!, $fat: Float!){
//     __typename
//     createBreakfast(data: {
//       foodName: $foodName, 
//       protein: $protein,
//       carbs: $carbs,
//       fat: $fat,
//       }) {
//         id
//       }
// }
// `;

// export default ADD_NUTRITION;



