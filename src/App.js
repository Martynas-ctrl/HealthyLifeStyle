import { React, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import User from './components/user/User';
import InfoPage from './components/nutrition/InfoPage';
import WorkoutPage from './components/Workout/Workouts';
import './App.css';

function App() {
const [word , setWord] = useState();  

  return (
    <Router>
      <div>
        <Route path='/' exact render={ () => <StartPage word={word} /> } />
        <Route path='/home' render={ () => <User changeWord={word => setWord(word)}/> } /> 
        <Route path='/information' render={ () => <InfoPage /> } />
        <Route path='/workout' render={ () => <WorkoutPage /> } /> 
      </div>  
    </Router>
  );
}

export default App;