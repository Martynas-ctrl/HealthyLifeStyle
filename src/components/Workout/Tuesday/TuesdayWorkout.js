import { React, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import TUESDAYWORKOUT_QUERY from './TuesdayWorkoutQuery';
import TuesdayWorkoutInfo from './TuesdayWorkoutInfo';
import TuesdayAddWorkout from './TuesdayAddWorkout';

function TuesdayWorkout () {
const [workout, setWorkout] = useState([]);
const { loading, error, data } = useQuery(TUESDAYWORKOUT_QUERY);

const getData = () => {
  if(loading) 
    return <p>Loading tuesday's workout...</p>
  if(error)
    return <p>Error...</p>
  if(data) {
    setWorkout(data.tuesdayWorkouts);
  }
} 
 
useEffect(() => {
  getData();
})

  return (
    <div className="container mt-4">   
      <div className="row">
        <div className="breakfast">
          <h3 className='title'>Tuesday</h3>  
        </div>
        <div>
          <h6><TuesdayAddWorkout /></h6>
          {workout.map(workoutInfo => <TuesdayWorkoutInfo key={workoutInfo.id} workoutInfo={workoutInfo} />)} 
        </div>
      </div>
    </div> 
  )
}

export default TuesdayWorkout; 