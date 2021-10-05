import { gql } from '@apollo/client';

const ADD_USER = gql`
  mutation UpdateUser($fullName: String!, $gender: String!, $age: Int!, $height: Int!, $weight: Int!, $total: Int!, $protein: Int, $carbs: Int, $fat: Int, $goal: String){
    __typename
    createUserInfo(data: {
      fullName: $fullName, 
      gender: $gender,
      age: $age,
      height: $height,
      weight: $weight,
      total: $total,
      protein: $protein,
      carbs: $carbs,
      fat: $fat,
      goal: $goal,
      }) {
        id
      }
}
`;

export default ADD_USER;