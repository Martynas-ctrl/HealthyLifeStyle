import { React, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import UPDATE_NUTRITION from '../dinner/dinnerQueries/DinnerUpdateQuery';

function DinnerUpdate(props) { 
  let foodName, protein, carbs, fat;
  let id = props.id;
  
  const [updateNutrition] = useMutation(UPDATE_NUTRITION);
  const [showModal, setShow] = useState(false);
  const formShow = () => setShow(true);
  const formClose = () => setShow(false);

  const updateDinner = (e) => {
    // e.preventDefault();
    updateNutrition({
      variables: { 
        id: id, 
        foodName: foodName.value, 
        protein: parseInt(protein.value), 
        carbs: parseInt(carbs.value), 
        fat: parseInt(fat.value), 
        totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9), 
      }});
    window.location.reload();
  }

  return (
      <div key={id}>
        <Button className="btn_edit" onClick={formShow}><i class='far fa-edit'></i>Edit</Button>
        <Modal show={showModal} backdrop="static" keyboard={false} onHide={formClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: "#009688"}}>UPDATE DINNER</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
            <Form onSubmit={updateDinner}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" ref={ value => foodName = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update food for dinner</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Protein" ref={ value => protein = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update protein for dinner</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Carbs" ref={ value => carbs = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update carbs for dinner</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Fat" ref={ value => fat = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update fat for dinner</p>
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={formClose}>Cancel</Button>
            <Button variant="primary" type="submit" onClick={updateDinner}>Update Nutrition</Button>
          </Modal.Footer>
        </Modal>
      </div>  
  )
}

export default DinnerUpdate;