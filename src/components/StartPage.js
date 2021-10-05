import { React, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import ADD_USER from './queries/AddUserQuery';
import WelcomeImg from './Images/startPageLogo.svg';
import 'antd/dist/antd.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '../components/css/total.css';

function StartPage () {
  let fullName, age, height, weight;
  let aim = 500;

  const [createUserInfo, { data }] = useMutation(ADD_USER);
  const [gender, setGender] = useState('Male');
  const [goal, setGoal] = useState(['Maintain', 'Gain', 'Lose']);
  const [home, setHome] = useState(false);

  const options = [
    {value: 'Male', label: 'Male'},
    {value: 'Female', label: 'Female'},
  ]

  const goalOptions = [
    {value: 'Maintain', label: 'Maintain'},
    {value: 'Gain', label: 'Gain'},
    {value: 'Lose', label: 'Lose'},
  ] 

  const activeOption = options.find(option => option.value === gender);
  const activeGoalOption = options.find(option => option.value === goal);

  if(goal === 'Gain') {
    aim =  500;
  }else if(goal === 'Lose') {
    aim = -500
  }else {
    aim = 0;
  }

  const createUser = (e) => {
    e.preventDefault();
    createUserInfo({
      variables: {
        fullName: fullName.value, 
        gender: gender, 
        age: parseInt(age.value), 
        height: parseInt(height.value), 
        weight: parseInt(weight.value), 
        total: parseInt(weight.value * 10) + parseInt(height.value * 6.25) - parseInt(age.value * 5) + (gender === "Male" ? 5 : -161) + aim} },
        {data})
    setHome(true);  
  }

  if(home) {
    return <Redirect to='/home'/>
  }

  return (
      <div className='containerMain'>
        <div className="containerImg">
          <img id="fitnessImg" src={WelcomeImg} />
          <form className='startPageForm' >
            <h2 id="title">USER CREATION</h2>
            <div style={{width: "300px"}}  class="form-group" id="container">
              <label id="label">Full Name</label>
              <input class="form-control" type="text" placeholder="e.g. Tony Stark" ref={ value => fullName = value} />
            </div>
            <div style={{width: "350px"}} class="form-group" id="container">
              <label id="label">Age</label>                     
              <input class="form-control" type="text"  placeholder="e.g. 20" ref={ value => age = value}/>
            </div>
            <div style={{width: "400px"}} class="form-group" id="container">
              <label id="label">Weight</label>                  
              <input class="form-control" type="text" aria-label="User's weight" placeholder="e.g 90" ref={ value => weight = value}/>
            </div>
            <div style={{width: "450px"}} class="form-group" id="container">
              <label id="label">Height</label>                  
              <input class="form-control" type="text" aria-label="User's height" placeholder="e.g 186" ref={ value => height = value}/>
            </div>
            <div style={{width: "500px"}} class="form-group" id="container">
              <label id="label">Gender & Goal</label><br/>   
              <div className="sectionContainer">  
                <Select id="section" 
                value={activeOption}
                defaultValue={options[0]}
                onChange={e => setGender(e.value)}
                options={options}
                />
                <Select id="section" 
                value={activeGoalOption}
                defaultValue={goalOptions[0]}
                onChange={e => setGoal(e.value)}
                options={goalOptions}
                />
              </div>  
              <Button style={{marginTop: "20px"}}onClick={createUser}><i class="fas fa-plus-circle"></i> Create User</Button>
            </div>
          </form>
        </div>
      </div>  
    ) 
}

export default StartPage;