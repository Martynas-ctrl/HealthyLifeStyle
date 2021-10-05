import { React } from 'react';
import { useMutation } from '@apollo/client';
import FRIDAYWORKOUT_QUERY from './FridayWorkoutQuery';
import FRIDAYADDWORKOUT_QUERY from './FridayAddWorkoutQuery';
import '../CSS/week.css'

function FridayAddWorkout() {
  let exercise, sets, reps, weight, rest;
  const [createFridayWorkout] = useMutation(FRIDAYADDWORKOUT_QUERY, {
    update(cache, { data: { createFridayWorkout } }) {
      const data = cache.readQuery({ query: FRIDAYWORKOUT_QUERY });
      cache.writeQuery({
        query: FRIDAYWORKOUT_QUERY,
        data: { fridayWorkouts: [createFridayWorkout, ...data.fridayWorkouts] },
      });
    }, 
  });

  const addWorkout = (e) => {
    e.preventDefault();
    createFridayWorkout({
      variables: {
        exercise: exercise.value, 
        reps: parseInt(reps.value),
        sets: parseInt(sets.value),
        weight: parseInt(weight.value),
        rest: parseInt(rest.value),
      }});
  }

  return (
      <div>
        <form className="containerWorkout" >
          <div style={{width: "185px"}} class="form-group" id="container">
            <label id="label">Exercise Name</label>
            <input class="form-control" type="text" placeholder="e.g. Bench Press" ref={ value => exercise = value} />
          </div>
          <div style={{width: "95px"}} class="form-group" id="container">
            <label id="label">Exercise Sets</label>                     
            <input class="form-control" type="text"  placeholder="e.g. 4" ref={ value => sets = value}/>
          </div>
          <div style={{width: "85px"}} class="form-group" id="container">
            <label id="label">Exercise Reps</label>                  
            <input class="form-control" type="text" aria-label="Athletes's reps" placeholder="e.g 8" ref={ value => reps = value}/>
          </div>
          <div style={{width: "90px"}} class="form-group" id="container">
            <label id="label">Weight</label>                  
            <input class="form-control" type="text" aria-label="Athletes's weight" placeholder="e.g. 90" ref={ value => weight = value}/>
          </div>
          <div style={{width: "90px"}} class="form-group" id="container">
            <label id="label">Rest</label>                  
            <input class="form-control" type="text" aria-label="Athletes's rest" placeholder="e.g. 3" ref={ value => rest = value}/>
          </div>
          <span class="form-group bmd-form-group">
            <button class="btn btn-primary" onClick={addWorkout}><i class="fas fa-plus-circle"></i> Add Exercise</button>
          </span>
        </form>
      </div>          
    );
};

export default FridayAddWorkout;