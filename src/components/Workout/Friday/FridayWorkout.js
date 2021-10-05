import { React, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import FRIDAYWORKOUT_QUERY from './FridayWorkoutQuery';
import FridayWorkoutInfo from './FridayWorkoutInfo';
import FridayAddWorkout from './FridayAddWorkout';

function FridayWorkout () {
const [workout, setWorkout] = useState([]);
const { loading, error, data } = useQuery(FRIDAYWORKOUT_QUERY);

const getData = () => {
  if(loading) 
    return <p>Loading friday's workout...</p>
  if(error)
    return <p>Error...</p>
  if(data) {
    setWorkout(data.fridayWorkouts);
  }
} 
 
useEffect(() => {
  getData();
})

  return (
    <div className="container mt-4">   
      <div className="row">
        <div className="breakfast">
          <h3 className='title'>Friday</h3>  
        </div>
        <div>
          <h6><FridayAddWorkout /></h6>
          {workout.map(workoutInfo => <FridayWorkoutInfo key={workoutInfo.id} workoutInfo={workoutInfo} />)} 
        </div>
      </div>
    </div> 
  )
}

export default FridayWorkout;