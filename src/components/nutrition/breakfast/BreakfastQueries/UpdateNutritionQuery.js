import { gql } from '@apollo/client';

const UPDATE_NUTRITION = gql`
  mutation UpdateNutrition($foodName: String, $protein: Float!, $carbs: Float!, $fat: Float!, $totalCalories: Int, $id: ID){
    __typename
    updateNutrition(
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


// import { gql } from '@apollo/client';

// const UPDATE_NUTRITION = gql`
//   mutation UpdateBreakfast($foodName: String, $protein: Float!, $carbs: Float!, $fat: Float!, $totalCalories: Int, $id: ID){
//     __typename
//     updateNutrition(
//       where: { id: $id }
//       data: {
//       foodName: $foodName, 
//       protein: $protein,
//       carbs: $carbs,
//       fat: $fat,
//       totalCalories: $totalCalories,
//       }) {
//         id
//       }
// }
// `;

// export default UPDATE_NUTRITION;