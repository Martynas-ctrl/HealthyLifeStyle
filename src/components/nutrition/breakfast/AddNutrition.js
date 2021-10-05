import { React, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Modal, Form, Button } from 'react-bootstrap';
import NUTRITION_QUERY from './BreakfastQueries/NutritionQuery';
import ADD_NUTRITION from './BreakfastQueries/AddNutritionQuery';

function AddNutrition(props) {
  let foodName, protein, carbs, fat;
  let proteinIntake = props.totalp;
  
  const [showModal, setShow] = useState(false);
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false);
  const [createNutrition, { data }] = useMutation(ADD_NUTRITION, {
    update(cache, { data: { createNutrition } }) {
      const data = cache.readQuery({ query: NUTRITION_QUERY });
      cache.writeQuery({
        query: NUTRITION_QUERY,
        data: { nutritions: [createNutrition, ...data.nutritions] },
      });
    },
  });

  const addBreakfast = (e) => {
    e.preventDefault();
    createNutrition({
      variables: {
        foodName: foodName.value, 
        protein: parseInt(protein.value), 
        carbs: parseInt(carbs.value), 
        fat: parseInt(fat.value), 
        totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9), totalProtein: proteinIntake} },
        {data});
    setShow(false);
  }

  return (
      <div>
        <Button variant="primary" onClick={handleShow}><i class="fas fa-plus-circle"></i> New Nutriton</Button>
        <Modal show={showModal} backdrop="static" keyboard={false} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: "#009688"}}>ADD BREAKFAST</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
            <Form onSubmit={addBreakfast}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" ref={ value => foodName = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Add food for breakfast</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Protein" ref={ value => protein = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Add protein for breakfast</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Carbs" ref={ value => carbs = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Add carbs for breakfast</p>
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Fat" ref={ value => fat = value} />
                <Form.Text className="text-muted">
                  <p style={{color: '#009688', fontSize: '0.75rem'}}>Add fat for breakfast</p>
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" type="submit" onClick={addBreakfast}>Add Nutrition</Button>
          </Modal.Footer>
        </Modal>
      </div>          
    );
};

export default AddNutrition;



// import { React, useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Modal, Form, Button } from 'react-bootstrap';
// import NUTRITION_QUERY from './BreakfastQueries/NutritionQuery';
// import ADD_NUTRITION from './BreakfastQueries/AddNutritionQuery';

// function AddNutrition(props) {
//   let foodName, protein, carbs, fat;
//   let proteinIntake = props.totalp;
  
//   const [showModal, setShow] = useState(false);
//   const handleShow = () => setShow(true)
//   const handleClose = () => setShow(false);
//   const [createNutrition, { data }] = useMutation(ADD_NUTRITION, {
//     update(cache, { data: { createNutrition } }) {
//       const data = cache.readQuery({ query: NUTRITION_QUERY });
//       cache.writeQuery({
//         query: NUTRITION_QUERY,
//         data: { nutritions: [createNutrition, ...data.nutritions] },
//       });
//     },
//   });

//   const addBreakfast = (e) => {
//     e.preventDefault();
//     createNutrition({
//       variables: {
//         foodName: foodName.value, 
//         protein: parseInt(protein.value), 
//         carbs: parseInt(carbs.value), 
//         fat: parseInt(fat.value), 
//         totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9), totalProtein: proteinIntake} },
//         {data});
//     setShow(false);
//   }

//   return (
//       <div>
//         <Button variant="primary" onClick={handleShow}><i class="fas fa-plus-circle"></i> New Nutriton</Button>
//         <Modal show={showModal} backdrop="static" keyboard={false} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title style={{color: "#009688"}}>ADD BREAKFAST</Modal.Title>
//           </Modal.Header>
//           <Modal.Body className='modalContainer'>
//             <Form onSubmit={addBreakfast}>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="text" placeholder="Name" ref={ value => foodName = value} />
//                 <Form.Text className="text-muted">
//                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add food for breakfast</p>
//                 </Form.Text>
//               </Form.Group>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="text" placeholder="Protein" ref={ value => protein = value} />
//                 <Form.Text className="text-muted">
//                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add protein for breakfast</p>
//                 </Form.Text>
//               </Form.Group>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="text" placeholder="Carbs" ref={ value => carbs = value} />
//                 <Form.Text className="text-muted">
//                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add carbs for breakfast</p>
//                 </Form.Text>
//               </Form.Group>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="text" placeholder="Fat" ref={ value => fat = value} />
//                 <Form.Text className="text-muted">
//                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add fat for breakfast</p>
//                 </Form.Text>
//               </Form.Group>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="primary" type="submit" onClick={handleClose}>Cancel</Button>
//             <Button variant="primary" type="submit" onClick={addBreakfast}>Add Nutrition</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>          
//     );
// };

// export default AddNutrition;

// // import { React, useState } from 'react';
// // import { useMutation } from '@apollo/client';
// // import { Modal, Form, Button } from 'react-bootstrap';
// // import NUTRITION_QUERY from './BreakfastQueries/NutritionQuery';
// // import ADD_NUTRITION from './BreakfastQueries/AddNutritionQuery';

// // function AddNutrition(props) {
// //   let foodName, protein, carbs, fat;
// //   let proteinIntake = props.totalp;
  
// //   const [showModal, setShow] = useState(false);
// //   const handleShow = () => setShow(true)
// //   const handleClose = () => setShow(false);
// //   const [createNutrition, { data }] = useMutation(ADD_NUTRITION, {
// //     update(cache, { data: { createNutrition } }) {
// //       const data = cache.readQuery({ query: NUTRITION_QUERY });
// //       cache.writeQuery({
// //         query: NUTRITION_QUERY,
// //         data: { nutritions: [createNutrition, ...data.nutritions] },
// //       });
// //     },
// //   });

// //   const addBreakfast = (e) => {
// //     e.preventDefault();
// //     createNutrition({
// //       variables: {
// //         foodName: foodName.value, 
// //         protein: parseInt(protein.value), 
// //         carbs: parseInt(carbs.value), 
// //         fat: parseInt(fat.value), 
// //         totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9), totalProtein: proteinIntake} },
// //         {data});
// //     setShow(false);
// //   }

// //   return (
// //       <div>
// //         <Button variant="primary" onClick={handleShow}><i class="fas fa-plus-circle"></i> New Nutriton</Button>
// //         <Modal show={showModal} backdrop="static" keyboard={false} onHide={handleClose}>
// //           <Modal.Header closeButton>
// //             <Modal.Title style={{color: "#009688"}}>ADD BREAKFAST</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body className='modalContainer'>
// //             <Form onSubmit={addBreakfast}>
// //               <Form.Group controlId="formBasicEmail">
// //                 <Form.Control type="text" placeholder="Name" ref={ value => foodName = value} />
// //                 <Form.Text className="text-muted">
// //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add food for breakfast</p>
// //                 </Form.Text>
// //               </Form.Group>
// //               <Form.Group controlId="formBasicEmail">
// //                 <Form.Control type="text" placeholder="Protein" ref={ value => protein = value} />
// //                 <Form.Text className="text-muted">
// //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add protein for breakfast</p>
// //                 </Form.Text>
// //               </Form.Group>
// //               <Form.Group controlId="formBasicEmail">
// //                 <Form.Control type="text" placeholder="Carbs" ref={ value => carbs = value} />
// //                 <Form.Text className="text-muted">
// //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add carbs for breakfast</p>
// //                 </Form.Text>
// //               </Form.Group>
// //               <Form.Group controlId="formBasicEmail">
// //                 <Form.Control type="text" placeholder="Fat" ref={ value => fat = value} />
// //                 <Form.Text className="text-muted">
// //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add fat for breakfast</p>
// //                 </Form.Text>
// //               </Form.Group>
// //             </Form>
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button variant="primary" type="submit" onClick={handleClose}>Cancel</Button>
// //             <Button variant="primary" type="submit" onClick={addBreakfast}>Add Nutrition</Button>
// //           </Modal.Footer>
// //         </Modal>
// //       </div>          
// //     );
// // };

// // export default AddNutrition;





// // // import { React, useState } from 'react';
// // // import { useMutation } from '@apollo/client';
// // // import { Modal, Form, Button } from 'react-bootstrap';
// // // import NUTRITION_QUERY from './BreakfastQueries/NutritionQuery';
// // // import ADD_NUTRITION from './BreakfastQueries/AddNutritionQuery';

// // // function AddNutrition(props) {
// // //   let foodName, protein, carbs, fat;
// // //   let proteinIntake = props.totalp;
  
// // //   const [showModal, setShow] = useState(false);
// // //   const handleShow = () => setShow(true)
// // //   const handleClose = () => setShow(false);
// // //   const [createNutrition, { data }] = useMutation(ADD_NUTRITION, {
// // //     update(cache, { data: { createNutrition } }) {
// // //       const data = cache.readQuery({ query: NUTRITION_QUERY });
// // //       cache.writeQuery({
// // //         query: NUTRITION_QUERY,
// // //         data: { nutritions: [createNutrition, ...data.nutritions] },
// // //       });
// // //     },
// // //   });

// // //   const addBreakfast = (e) => {
// // //     e.preventDefault();
// // //     createNutrition({
// // //       variables: {
// // //         foodName: foodName.value,protein: parseInt(protein.value), carbs: parseInt(carbs.value), fat: parseInt(fat.value)}});
// // //     setShow(false);
// // //   }

// // //   return (
// // //       <div>
// // //         <Button variant="primary" onClick={handleShow}><i class="fas fa-plus-circle"></i> New Nutriton</Button>
// // //         <Modal show={showModal} backdrop="static" keyboard={false} onHide={handleClose}>
// // //           <Modal.Header closeButton>
// // //             <Modal.Title style={{color: "#009688"}}>ADD BREAKFAST</Modal.Title>
// // //           </Modal.Header>
// // //           <Modal.Body className='modalContainer'>
// // //             <Form onSubmit={addBreakfast}>
// // //               <Form.Group controlId="formBasicEmail">
// // //                 <Form.Control type="text" placeholder="Name" ref={ value => foodName = value} />
// // //                 <Form.Text className="text-muted">
// // //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add food for breakfast</p>
// // //                 </Form.Text>
// // //               </Form.Group>
// // //               <Form.Group controlId="formBasicEmail">
// // //                 <Form.Control type="text" placeholder="Protein" ref={ value => protein = value} />
// // //                 <Form.Text className="text-muted">
// // //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add protein for breakfast</p>
// // //                 </Form.Text>
// // //               </Form.Group>
// // //               <Form.Group controlId="formBasicEmail">
// // //                 <Form.Control type="text" placeholder="Carbs" ref={ value => carbs = value} />
// // //                 <Form.Text className="text-muted">
// // //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add carbs for breakfast</p>
// // //                 </Form.Text>
// // //               </Form.Group>
// // //               <Form.Group controlId="formBasicEmail">
// // //                 <Form.Control type="text" placeholder="Fat" ref={ value => fat = value} />
// // //                 <Form.Text className="text-muted">
// // //                   <p style={{color: '#009688', fontSize: '0.75rem'}}>Add fat for breakfast</p>
// // //                 </Form.Text>
// // //               </Form.Group>
// // //             </Form>
// // //           </Modal.Body>
// // //           <Modal.Footer>
// // //             <Button variant="primary" type="submit" onClick={handleClose}>Cancel</Button>
// // //             <Button variant="primary" type="submit" onClick={addBreakfast}>Add Nutrition</Button>
// // //           </Modal.Footer>
// // //         </Modal>
// // //       </div>          
// // //     );
// // // };

// // // export default AddNutrition;