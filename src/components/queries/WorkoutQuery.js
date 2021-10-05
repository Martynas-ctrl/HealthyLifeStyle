import { gql } from '@apollo/client';

const ADD_WORKOUT = gql`
  mutation AddWorkout($exerciseName: String!, $set: Int!, $rep: Int!){
    __typename
    createWorkout(data: {
      exerciseName: $fexerciseName, 
      set: $set,
      rep: $rep,
      }) {
        id
      }
}
`;

export default ADD_WORKOUT;