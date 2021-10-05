import { React, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import MONDAYWORKOUT_QUERY from './MondayWorkoutQuery';
import MondayWorkoutInfo from './MondayWorkoutInfo';
import MondayAddWorkout from './MondayAddWorkout';

function MondayWorkout () {
const [workout, setWorkout] = useState([]);
const { loading, error, data } = useQuery(MONDAYWORKOUT_QUERY);

const getData = () => {
  if(loading) 
    return <p>Loading monday's workout...</p>
  if(error)
    return <p>Error...</p>
  if(data) {
    setWorkout(data.mondayWorkouts);
  }
} 
 
useEffect(() => {
  getData();
})

  return (
    <div className="container mt-4">   
      <div className="row">
        <div className="breakfast">
          <h3 className='title'>Monday</h3>  
        </div>
        <div>
          <h6><MondayAddWorkout /></h6>
          {workout.map(workoutInfo => <MondayWorkoutInfo key={workoutInfo.id} workoutInfo={workoutInfo} />)} 
        </div>
      </div>
    </div> 
  )
}

export default MondayWorkout;