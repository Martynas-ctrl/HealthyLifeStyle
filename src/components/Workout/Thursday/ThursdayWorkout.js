import { React, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import THURSDAYWORKOUT_QUERY from './ThursdayWorkoutQuery';
import ThursdayWorkoutInfo from './ThursdayWorkoutInfo';
import ThursdayAddWorkout from './/ThursdayAddWorkout';

function ThursdayWorkout () {
const [workout, setWorkout] = useState([]);
const { loading, error, data } = useQuery(THURSDAYWORKOUT_QUERY);

const getData = () => {
  if(loading) 
    return <p>Loading thursday's workout...</p>
  if(error)
    return <p>Error...</p>
  if(data) {
    setWorkout(data.thursdayWorkouts);
  }
} 
 
useEffect(() => {
  getData();
})

  return (
    <div className="container mt-4">   
      <div className="row">
        <div className="breakfast">
          <h3 className='title'>Thursday</h3>  
        </div>
        <div>
          <h6><ThursdayAddWorkout /></h6>
          {workout.map(workoutInfo => <ThursdayWorkoutInfo key={workoutInfo.id} workoutInfo={workoutInfo} />)} 
        </div>
      </div>
    </div> 
  )
}

export default ThursdayWorkout;