import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Button } from 'react-bootstrap';
// import DELETE_MONDAY from '../Monday/MondayDeleteQuery';
import MONDAYWORKOUT_QUERY from '../Monday/MondayWorkoutQuery';
import UpdateWorkout from '../Monday/MondayUpdateWorkout';


const DELETE_MONDAY = gql`
  mutation RemoveExercise($id: ID){
    __typename
    deleteMondayWorkout(
      where: { id: $id }
    ) {
      id
    }
}
`;

function MondayWorkoutInfo(props) {
  const OneRM = props.workoutInfo.weight + (props.workoutInfo.weight * props.workoutInfo.reps * 0.033);

  const [deleteMondayWorkout] = useMutation(DELETE_MONDAY);

  console.log(props, 'deletes');

  const removeProduct = () => {
    const updateCache = (client) => {
      const data = client.readQuery({
        query: MONDAYWORKOUT_QUERY,
      });
      const newData = {
        mondayWorkouts: data.mondayWorkouts.filter((mondayWorkout) => mondayWorkout.id !== props.workoutInfo.id)
      }
      client.writeQuery({
        query: MONDAYWORKOUT_QUERY,
        data: newData
      });
    }

    deleteMondayWorkout({
      variables: {id: props.workoutInfo.id},
      update: updateCache
      });
      // window.location.reload();
      console.log(props.workoutInfo.id);
    }

  return (
      <table class="table">
        <tbody>
          <tr>
            <td id="td" style={{width: "200px"}}><p>{props.workoutInfo.exercise}</p></td>
            <td id="td" style={{width: "100px"}}><p>{props.workoutInfo.sets} sets</p></td>
            <td id="td" style={{width: "100px"}}><p>{props.workoutInfo.reps} reps</p></td>
            <td id="td" style={{width: "100px"}}><p>{props.workoutInfo.weight}kg</p></td>
            <td id="td" style={{width: "100px"}}><p>{props.workoutInfo.rest}min</p></td>
            <td id="td" style={{width: "100px"}}><p>{Math.round(OneRM)}kg(1RM)</p></td>
            <td id="td" style={{width: "100px"}}><UpdateWorkout id={props.workoutInfo.id} /></td>
            <td id="td" style={{width: "100px"}}><Button onClick={() => removeProduct(props.workoutInfo.id)}><i className="fa fa-trash"></i>Delete</Button></td>
          </tr>
        </tbody>
      </table>
    );
}

export default MondayWorkoutInfo;