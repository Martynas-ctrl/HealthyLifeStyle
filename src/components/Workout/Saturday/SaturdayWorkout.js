import { React, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import SATURDAYWORKOUT_QUERY from './SaturdayWorkoutQuery';
import SaturdayWorkoutInfo from './SaturdayWorkoutInfo';
import SaturdayAddWorkout from './SaturdayAddWorkout';

function SaturdayWorkout () {
const [workout, setWorkout] = useState([]);
const { loading, error, data } = useQuery(SATURDAYWORKOUT_QUERY);

const getData = () => {
  if(loading) 
    return <p>Loading saturday's workout...</p>
  if(error)
    return <p>Error...</p>
  if(data) {
    setWorkout(data.saturdayWorkouts);
  }
} 
 
useEffect(() => {
  getData();
})

  return (
    <div className="container mt-4">   
      <div className="row">
        <div className="breakfast">
          <h3 className='title'>Saturday</h3>  
        </div>
        <div>
          <h6><SaturdayAddWorkout /></h6>
          {workout.map(workoutInfo => <SaturdayWorkoutInfo key={workoutInfo.id} workoutInfo={workoutInfo} />)} 
        </div>
      </div>
    </div> 
  )
}

export default SaturdayWorkout;