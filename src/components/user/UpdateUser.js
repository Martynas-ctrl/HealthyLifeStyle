import { React, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Modal, Form, Button } from 'react-bootstrap';
import UPDATE_USER from '../queries/UpdateUserQuery';
import Select from 'react-select'
import '../css/modal.css'

function UpdateUser(props) { 
  let fullName, gender, age, height, weight, total;
  let id = props.id;
  console.log(id);
  const [updateUserInfo] = useMutation(UPDATE_USER);
  const [showModal, setShow] = useState(false);
  const [type, setType] = useState('Male');
  const [goal, setGoal] = useState(['Maintain', 'Gain', 'Lose']);
  const formShow = () => setShow(true);
  const formClose = () => setShow(false);

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
//skapa en goal string i graphcms och posta den till sever och rendera den i user
  const update = (e) => {
    e.preventDefault();
    updateUserInfo({
      variables: {
        id: id, 
        fullName: fullName.value, 
        gender: type, 
        age: parseInt(age.value), 
        height: parseInt(height.value), 
        weight: parseInt(weight.value), 
        total: parseInt(weight.value * 10) + parseInt(height.value * 6.25) - parseInt(age.value * 5) + (type === "Male" ? 5 : -161)}
      });
    window.location.reload();
  }

  return (
      <div key={id}>
        <Button className="btn_edit" onClick={formShow}><i class="fas fa-user-edit"></i> Edit</Button>
        <Modal show={showModal} backdrop="static" keyboard={false} onHide={formClose}>
          <Modal.Header closeButton>
            <Modal.Title className='modalTitle'>UPDATE USER INFORMATION</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
            <Form onSubmit={update}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" ref={ value => fullName = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update username</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Age" ref={ value => age = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update user age</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Weight" ref={ value => weight = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update user weight</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Height" ref={ value => height = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update user height</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update user gender/goal</p>
                </Form.Text>
                  <div style={{display: 'flex'}}>
                    <Select id="sections"
                      value={activeOption}
                      defaultValue={options[0]}
                      onChange={e => setType(e.value)}
                      options={options}
                      />
                      <Select id="sections"
                      value={activeGoalOption}
                      defaultValue={goalOptions[0]}
                      onChange={e => setGoal(e.value)}
                      options={goalOptions}
                      />
                  </div>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={formClose}>Cancel</Button>
            <Button variant="primary" type="submit" onClick={update}>Update User</Button>
          </Modal.Footer>
        </Modal>
      </div>  
  )
}

export default UpdateUser;

    // /* <form onSubmit={update}>
    //           <div className="name_Container">
              
    //             <p>Update your name</p>
    //             <input type="text" placeholder="Tony Stark"  ref={ value => fullName = value} />
    //           </div>
    //           <div className="name_Container">
               
    //             <p>Update your age</p>                   
    //             <input type="text" value={age} aria-label="Username" placeholder="e.g. 19" ref={ value => age = value}/>
    //           </div>
    //           <div className="name_Container">
            
    //             <p>Update your weight</p>                   
    //             <input type="text"  aria-label="Username" placeholder="e.g. 90" ref={ value => weight = value}/>
    //           </div>
    //           <div className="name_Container">
            
    //             <p>Update your height</p>                   
    //             <input type="text"  aria-label="Username" placeholder="e.g. 190" ref={ value => height = value}/>
    //           </div> 
    //           <div className="name_Container">
              
    //             <p>Update your gender</p>
    //             <Select  
    //             value={activeOption}
    //             defaultValue={options[0]}
    //             onChange={e => setType(e.value)}
    //             options={options}
    //             />
    //             <Select  
    //             value={activeGoalOption}
    //             defaultValue={goalOptions[0]}
    //             onChange={e => setGoal(e.value)}
    //             options={goalOptions}
    //             /> 
    //           </div> 
    //         </form>