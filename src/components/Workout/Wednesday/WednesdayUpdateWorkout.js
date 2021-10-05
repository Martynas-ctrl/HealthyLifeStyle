import { React, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Modal, Form, Button } from 'react-bootstrap';
import UPDATE_WORKOUT from '../Wednesday/WednesdayUpdateQuery';

function UpdateWednesdayWorkout(props) { 
  let exercise, sets, reps, weight;
  let id = props.id;
  const [updateWednesdayWorkout] = useMutation(UPDATE_WORKOUT);
  const [showModal, setShow] = useState(false);
  const formShow = () => setShow(true);
  const formClose = () => setShow(false);

  const updateWorkout = (e) => {
    e.preventDefault();
    updateWednesdayWorkout({ 
      variables: { 
        id: id, 
        exercise: exercise.value, 
        sets: parseInt(sets.value), 
        reps: parseInt(reps.value), 
        weight: parseInt(weight.value), 
    }});
    window.location.reload();
  }

  return (
      <div key={id}>
        <Button className="btn_edit" onClick={formShow}><i class='far fa-edit'></i>Edit</Button>
        <Modal show={showModal} backdrop="static" keyboard={false} onHide={formClose}>
          <Modal.Header closeButton>
            <Modal.Title>UPDATE WORKOUT</Modal.Title>
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
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button id="cancel_button" className="btn btn-primary" onClick={formClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" onClick={updateWorkout}>Update Exercise</button>
          </Modal.Footer>
        </Modal>
      </div>  
  )
}

export default UpdateWednesdayWorkout;