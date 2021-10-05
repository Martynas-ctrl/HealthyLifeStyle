import { React, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Modal, Form, Button } from 'react-bootstrap';
import UPDATE_NUTRITION from '../breakfast/BreakfastQueries/UpdateNutritionQuery';

function UpdateNutrition(props) { 

  let foodName, protein, carbs, fat;
  let id = props.id;
  
  const [updateNutrition] = useMutation(UPDATE_NUTRITION);
  const [showModal, setShow] = useState(false);
  const formShow = () => setShow(true);
  const formClose = () => setShow(false);

  const updateBreakfast = (e) => {
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
            <Modal.Title style={{color: "#009688"}}>UPDATE BREAKFAST</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
            <Form onSubmit={updateBreakfast}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" ref={ value => foodName = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update food for breakfast</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Protein" ref={ value => protein = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update protein for breakfast</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Carbs" ref={ value => carbs = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update carbs for breakfast</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Fat" ref={ value => fat = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Update fat for breakfast</p>
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={formClose}>Cancel</Button>
            <Button variant="primary" type="submit" onClick={updateBreakfast}>Update Nutrition</Button>
          </Modal.Footer>
        </Modal>
      </div>  
  )
}

export default UpdateNutrition;


// import { React, useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Modal, Form, Button } from 'react-bootstrap';
// import UPDATE_NUTRITION from '../breakfast/BreakfastQueries/UpdateNutritionQuery';

// function UpdateNutrition(props) { 

//   let foodName, protein, carbs, fat;
//   let id = props.id;
  
//   const [updateNutrition] = useMutation(UPDATE_NUTRITION);
//   const [showModal, setShow] = useState(false);
//   const formShow = () => setShow(true);
//   const formClose = () => setShow(false);

//   const updateBreakfast = (e) => {
//     e.preventDefault();
//     updateNutrition({ 
//       variables: { 
//         id: id, 
//         foodName: foodName.value, 
//         protein: parseInt(protein.value), 
//         carbs: parseInt(carbs.value), 
//         fat: parseInt(fat.value), 
//         totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9),
//        }});
//     window.location.reload();
//   }

//   return (
//       <div key={id}>
//         <Button className="btn_edit" onClick={formShow}><i class='far fa-edit'></i>Edit</Button>
//         <Modal show={showModal} backdrop="static" keyboard={false} onHide={formClose}>
//           <Modal.Header closeButton>
//             <Modal.Title style={{color: "#009688"}}>UPDATE BREAKFAST</Modal.Title>
//           </Modal.Header>
//           <Modal.Body className='modalContainer'>
//             <Form onSubmit={updateBreakfast}>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="text" placeholder="Name" ref={ value => foodName = value} />
//                 <Form.Text className="text-muted">
//                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Update food for breakfast</p>
//                 </Form.Text>
//               </Form.Group>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="text" placeholder="Protein" ref={ value => protein = value} />
//                 <Form.Text className="text-muted">
//                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Update protein for breakfast</p>
//                 </Form.Text>
//               </Form.Group>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="text" placeholder="Carbs" ref={ value => carbs = value} />
//                 <Form.Text className="text-muted">
//                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Update carbs for breakfast</p>
//                 </Form.Text>
//               </Form.Group>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="text" placeholder="Fat" ref={ value => fat = value} />
//                 <Form.Text className="text-muted">
//                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Update fat for breakfast</p>
//                 </Form.Text>
//               </Form.Group>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="primary" type="submit" onClick={formClose}>Cancel</Button>
//             <Button variant="primary" type="submit" onClick={updateBreakfast}>Update Nutrition</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>  
//   )
// }

// export default UpdateNutrition;


// // import { React, useState } from 'react';
// // import { useMutation } from '@apollo/client';
// // import { Modal, Form, Button } from 'react-bootstrap';
// // import UPDATE_NUTRITION from '../breakfast/BreakfastQueries/UpdateNutritionQuery';

// // function UpdateNutrition(props) { 

// //   let foodName, protein, carbs, fat;
// //   let id = props.id;
  
// //   const [updateBreakfast] = useMutation(UPDATE_NUTRITION);
// //   const [showModal, setShow] = useState(false);
// //   const formShow = () => setShow(true);
// //   const formClose = () => setShow(false);

// //   // const [updateBreakfast] = useMutation(UPDATE_NUTRITION);

// //   const editBreakfast = (e) => {
// //     e.preventDefault();
// //     updateBreakfast({ 
// //       variables: { 
// //         id: id, foodName: foodName.value, protein: parseInt(protein.value), carbs: parseInt(carbs.value), 
// //         fat: parseInt(fat.value)}});
// //     setShow(false);
// //   }

// //   return (
// //       <div key={id}>
// //         <Button className="btn_edit" onClick={formShow}><i class='far fa-edit'></i>Edit</Button>
// //         <Modal show={showModal} backdrop="static" keyboard={false} onHide={formClose}>
// //           <Modal.Header closeButton>
// //             <Modal.Title style={{color: "#009688"}}>UPDATE BREAKFAST</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body className='modalContainer'>
// //             <Form onSubmit={updateBreakfast}>
// //               <Form.Group controlId="formBasicEmail">
// //                 <Form.Control type="text" placeholder="Name" ref={ value => foodName = value} />
// //                 <Form.Text className="text-muted">
// //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Update food for breakfast</p>
// //                 </Form.Text>
// //               </Form.Group>
// //               <Form.Group controlId="formBasicEmail">
// //                 <Form.Control type="text" placeholder="Protein" ref={ value => protein = value} />
// //                 <Form.Text className="text-muted">
// //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Update protein for breakfast</p>
// //                 </Form.Text>
// //               </Form.Group>
// //               <Form.Group controlId="formBasicEmail">
// //                 <Form.Control type="text" placeholder="Carbs" ref={ value => carbs = value} />
// //                 <Form.Text className="text-muted">
// //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Update carbs for breakfast</p>
// //                 </Form.Text>
// //               </Form.Group>
// //               <Form.Group controlId="formBasicEmail">
// //                 <Form.Control type="text" placeholder="Fat" ref={ value => fat = value} />
// //                 <Form.Text className="text-muted">
// //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Update fat for breakfast</p>
// //                 </Form.Text>
// //               </Form.Group>
// //             </Form>
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button variant="primary" type="submit" onClick={formClose}>Cancel</Button>
// //             <Button variant="primary" type="submit" onClick={editBreakfast}>Update Nutrition</Button>
// //           </Modal.Footer>
// //         </Modal>
// //       </div>  
// //   )
// // }

// // export default UpdateNutrition;