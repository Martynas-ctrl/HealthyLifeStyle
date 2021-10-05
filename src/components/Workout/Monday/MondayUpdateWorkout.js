import { React, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Modal, Form, Button } from 'react-bootstrap';
import UPDATE_WORKOUT from '../Monday/MondayUpdateQuery';

function UpdateMondayWorkout(props) { 
  let exercise, sets, reps, weight, rest;
  let id = props.id;
  const [updateMondayWorkout] = useMutation(UPDATE_WORKOUT);

  const [showModal, setShow] = useState(false);
  const formShow = () => setShow(true);
  const formClose = () => setShow(false);

  const updateWorkout = (e) => {
    // e.preventDefault();
    updateMondayWorkout({ 
      variables: { 
        id: id, 
        exercise: exercise.value, 
        sets: parseInt(sets.value), 
        reps: parseInt(reps.value), 
        weight: parseInt(weight.value),
        rest: parseInt(rest.value),
    }});
    window.location.reload();
    // alert('working')
  }

  return (
      <div key={id}>
        <Button className="btn_edit" onClick={formShow}><i class='far fa-edit'></i>Edit</Button>
        <Modal show={showModal} backdrop="static" keyboard={false} onHide={formClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: '#009688'}}>UPDATE WORKOUT</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
            <Form onSubmit={updateWorkout}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" ref={ value => exercise = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>It will contain the name of the exercise</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Sets" ref={ value => sets = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>It will contain the sets of the exercise</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Reps" ref={ value => reps = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>It will contain the reps of the exercise</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Weight" ref={ value => weight = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>It will contain the weight of the exercise</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Rest" ref={ value => rest = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>It will contain the rest between sets</p>
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={formClose}>Cancel</Button>
            <Button variant="primary" type="submit" onClick={updateWorkout}>Update Exercise</Button>
          </Modal.Footer>
        </Modal>
      </div>  
  )
}

export default UpdateMondayWorkout;


      {/* <form onSubmit={updateWorkout}>
              <div className="name_Container">
                <label>Name</label>
                <p>It will contain the name of the exercise</p>
                <input type="text" placeholder="Name" ref={ value => exercise = value} />
              </div>
              <div className="name_Container">
                <label>Sets</label>  
                <p>It will contain the sets of the exercise</p>                   
                <input type="text"  aria-label="Breakfast's protein" placeholder="Protein" ref={ value => sets = value}/>
              </div>
              <div className="name_Container">
                <label>Reps</label>  
                <p>It will contain the reps of the exercise</p>                   
                <input type="text"  aria-label="Breakfast's carbs" placeholder="Carbs" ref={ value => reps = value}/>
              </div>
              <div className="name_Container">
                <label>Weight</label>  
                <p>It will contain the weight of the exercise</p>                   
                <input type="text"  aria-label="Breakfast's fat" placeholder="Fat" ref={ value => weight = value}/>
              </div>
            </form> */}