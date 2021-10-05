import { React, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Modal, Form, Button } from 'react-bootstrap';
import ADD_DINNER from './dinnerQueries/DinnerAddQuery';
import NUTRITION_QUERY from '../dinner/dinnerQueries/DinnerQuery';

function DinnerAdd() {
  let foodName, protein, carbs, fat;
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const [createDinner, { data }] = useMutation(ADD_DINNER, {
    update(cache, { data: { createDinner } }) {
      const data = cache.readQuery({ query: NUTRITION_QUERY });
      cache.writeQuery({
        query: NUTRITION_QUERY,
        data: { dinners: [createDinner, ...data.dinners] },
      });
    },
  });

  const addDinner = (e) => {
    e.preventDefault();
    createDinner({
      variables: {
        foodName: foodName.value, 
        protein: parseInt(protein.value), 
        carbs: parseInt(carbs.value), 
        fat: parseInt(fat.value), 
        totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9)} },
        {data});   
    setShow(false);
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}><i class="fas fa-plus-circle"></i> New Nutriton</Button>
      <Modal show={showModal} backdrop="static" keyboard={false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color: "#009688"}}>ADD DINNER</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalContainer'>
          <Form onSubmit={addDinner}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Name" ref={ value => foodName = value} />
              <Form.Text className="text-muted">
                <p style={{color: '#009688', fontSize: '0.75rem'}}>Add food for dinner</p>
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Protein" ref={ value => protein = value} />
              <Form.Text className="text-muted">
                <p style={{color: '#009688', fontSize: '0.75rem'}}>Add protein for dinner</p>
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Carbs" ref={ value => carbs = value} />
              <Form.Text className="text-muted">
                <p style={{color: '#009688', fontSize: '0.75rem'}}>Add carbs for dinner</p>
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Fat" ref={ value => fat = value} />
              <Form.Text className="text-muted">
                <p style={{color: '#009688', fontSize: '0.75rem'}}>Add fat for dinner</p>
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" type="submit" onClick={addDinner}>Add Nutrition</Button>
        </Modal.Footer>
      </Modal>
    </div>          
  );
};

export default DinnerAdd;