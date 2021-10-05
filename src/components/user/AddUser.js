import { React, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap'
import USER_QUERY from '../queries/UserQuery';
import ADD_USER from '../queries/AddUserQuery';
import Select from 'react-select';
import '../user/UpdateUser';

function AddUser() {
  let fullName, age, height, weight, gender;
  let aim = 500;
  const [showModal, setShow] = useState(false);
  const [type, setType] = useState('Male');
  const [goal, setGoal] = useState(['Maintain', 'Gain', 'Lose']);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  const [createUserInfo, { data }] = useMutation(ADD_USER,{
    update(cache, { data: { createUserInfo } }) {
      const data = cache.readQuery({ query: USER_QUERY });
      cache.writeQuery({
        query: USER_QUERY,
        data: { userInfos: [createUserInfo, ...data.userInfos] },
      });
    }, 
  });

  const options = [
    {value: 'Male', label: 'Male'},
    {value: 'Female', label: 'Female'}
  ]

  const goalOptions = [
    {value: 'Maintain', label: 'Maintain'},
    {value: 'Gain', label: 'Gain'},
    {value: 'Lose', label: 'Lose'}
  ] 

  const activeOption = options.find(option => option.value === type);
  const activeGoalOption = options.find(option => option.value === goal);

  if(goal === 'Gain') {
    aim =  500;
  }else if(goal === 'Lose') {
    aim = -500
  }else {
    aim = 0;
  }

const addUser = (e) => {
  e.preventDefault();
  createUserInfo({
    variables: {
      fullName: fullName.value, 
      gender: type, 
      age: parseInt(age.value), 
      height: parseInt(height.value), 
      weight: parseInt(weight.value), 
      total: parseInt(weight.value * 10) + parseInt(height.value * 6.25) - parseInt(age.value * 5) + (type === "Male" ? 5 : -161) + aim} },{data})
}

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>+ New User</Button>
      <Modal show={showModal} backdrop="static" keyboard={false} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modal_title">NEW USER FORM</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalContainer'>
        <form>
          <div className="name_Container">
              <label>Full Name</label>
              <p>It’s the name of the product</p>
              <input type="text" placeholder="Name" ref={ value => fullName = value} />
          </div>
          <div className="name_Container">
              <label>Age</label>  
              <p>It will contain the price of our product</p>                   
              <input type="text" aria-label="Recipient's username" placeholder="Age" ref={ value => age = value}/>
          </div>
          <div className="name_Container">
              <label>Weight</label>  
              <p>It will contain the price of our product</p>                   
              <input type="text"  aria-label="Recipient's username" placeholder="Weight" ref={ value => weight = value}/>
          </div>
          <div className="name_Container">
              <label>Height</label>  
              <p>It will contain the price of our product</p>                   
              <input type="text"  aria-label="Recipient's username" placeholder="Height" ref={ value => height = value}/>
          </div>
          <div className="name_Container">
              <label>Gender</label>
              <Select  
              value={activeOption}
              defaultValue={options[0]}
              onChange={e => setType(e.value)}
              options={options}
              />
              <Select  
              value={activeGoalOption}
              defaultValue={goalOptions[0]}
              onChange={e => setGoal(e.value)}
              options={goalOptions}
              />
          </div> 
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button id="cancel_button" className="btn btn-primary" onClick={handleClose}>Cancel</button>
        <button type="submit" className="btn btn-primary" onClick={addUser}>Add User</button>
      </Modal.Footer>
      </Modal>
    </div>          
  );
};
export default AddUser;




















  {/* <label for="male">Male</label>
                      <input type="radio" id="male" name="gender" value="male" ref={ value => gender = value}/>
                      <label for="female">Female</label>
                      <input type="radio" id="female" name="gender" value="female" ref={ value => gender = value}/> */}
                      
                      {/* <select id="gender" ref={ value => gender = value}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select> */}