import { gql } from '@apollo/client';

const UPDATE_USER = gql`
  mutation UpdateUser($fullName: String, $gender: String, $age: Int, $height: Int, $weight: Int, $total: Int, $goal: String, $id: ID){
    __typename
    updateUserInfo(
      where: { id: $id }
      data: {
      fullName: $fullName, 
      gender: $gender,
      age: $age,
      height: $height,
      weight: $weight,
      total: $total,
      goal: $goal,
      }) {
        id
      }
}
`;

export default UPDATE_USER;