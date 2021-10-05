import { React, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import SUNDAYWORKOUT_QUERY from './SundayWorkoutQuery';
import SundayWorkoutInfo from './SundayWorkoutInfo';
import SundayAddWorkout from './SundayAddWorkout';

function SundayWorkout () {
const [workout, setWorkout] = useState([]);
const { loading, error, data } = useQuery(SUNDAYWORKOUT_QUERY);

const getData = () => {
  if(loading) 
    return <p>Loading sunday's workout...</p>
  if(error)
    return <p>Error...</p>
  if(data) {
    setWorkout(data.sundayWorkouts);
  }
} 
 
useEffect(() => {
  getData();
})

  return (
    <div className="container mt-4">   
      <div className="row">
        <div className="breakfast">
          <h3 className='title'>Sunday</h3>  
        </div>
        <div>
          <h6><SundayAddWorkout /></h6>
          {workout.map(workoutInfo => <SundayWorkoutInfo key={workoutInfo.id} workoutInfo={workoutInfo} />)} 
        </div>
      </div>
    </div> 
  )
}

export default SundayWorkout;