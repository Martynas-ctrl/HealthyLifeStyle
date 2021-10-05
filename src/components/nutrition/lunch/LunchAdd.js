import { React, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import ADD_NUTRITION from './LunchQueries/AddLunchQuery';
import NUTRITION_QUERY from './LunchQueries/LunchQuery';

function AddNutritionLunch(props) {
  let foodName, protein, carbs, fat;
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const [createNutritionLunch, { data }] = useMutation(ADD_NUTRITION, {
    update(cache, { data: { createNutritionLunch } }) {
      const data = cache.readQuery({ query: NUTRITION_QUERY });
      cache.writeQuery({
        query: NUTRITION_QUERY,
        data: { nutritionLunches: [createNutritionLunch, ...data.nutritionLunches] },
      });
    },
  });
 
  const addLunch = (e) => {
    e.preventDefault();
    createNutritionLunch({
      variables: {
        foodName: foodName.value, 
        protein: parseInt(protein.value), 
        carbs: parseInt(carbs.value), 
        fat: parseInt(fat.value), 
        totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9)} },
        {data})
    // props.hehe();
    setShow(false);
  }

  return (
      <div>
        <Button variant="primary" onClick={handleShow}><i class="fas fa-plus-circle"></i> New Nutriton</Button>
        <Modal show={showModal} backdrop="static" keyboard={false} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: "#009688"}}>ADD LUNCH</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
            <Form onSubmit={addLunch}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" ref={ value => foodName = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Add food for lunch</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Protein" ref={ value => protein = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Add protein for lunch</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Carbs" ref={ value => carbs = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Add carbs for lunch</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Fat" ref={ value => fat = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Add fat for lunch</p>
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" type="submit" onClick={addLunch}>Add Nutrition</Button>
          </Modal.Footer>
        </Modal>
      </div>          
    );
};

export default AddNutritionLunch;