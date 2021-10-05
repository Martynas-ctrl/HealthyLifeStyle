import { React, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import WEDNESDAYWORKOUT_QUERY from './WednesdayWorkoutQuery';
import WednesdayWorkoutInfo from './/WednesdayWorkoutInfo';
import WednesdayAddWorkout from './WednesdayAddWorkout';

function WednesdayWorkout () {
const [workout, setWorkout] = useState([]);
const { loading, error, data } = useQuery(WEDNESDAYWORKOUT_QUERY);

const getData = () => {
  if(loading) 
    return <p>Loading wednesday's workout...</p>
  if(error)
    return <p>Error...</p>
  if(data) {
    setWorkout(data.wednesdayWorkouts);
  }
} 
 
useEffect(() => {
  getData();
})

  return (
    <div className="container mt-4">   
      <div className="row">
        <div className="breakfast">
          <h3 className='title'>Wednesday</h3>  
        </div>
        <div>
          <h6><WednesdayAddWorkout /></h6>
          {workout.map(workoutInfo => <WednesdayWorkoutInfo key={workoutInfo.id} workoutInfo={workoutInfo} />)} 
        </div>
      </div>
    </div> 
  )
}

export default WednesdayWorkout;