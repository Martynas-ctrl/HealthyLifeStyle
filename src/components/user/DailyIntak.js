// import { React, useState, useEffect } from 'react'
// import ADD_USER from '../queries/AddUserQuery';
// import { gql, useMutation } from '@apollo/client';
// import { Modal, Button } from 'react-bootstrap'
// import '../user/UpdateUser';
// import Select from 'react-select'

// function DailyIntake () {
//   let fullName, gender, age, height, weight, total;
//   let aim = 500;
//   const [createUserInfo, { data }] = useMutation(ADD_USER);
//   const [showModal, setShow] = useState(false);
//   const [type, setType] = useState('Male');
//   const [goal, setGoal] = useState(['Maintain', 'Gain', 'Lose']);
//   const [t, setT] = useState();
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true)

//   const options = [
//     {value: 'Male', label: 'Male'},
//     {value: 'Female', label: 'Female'}
//   ]

//   const goalOptions = [
//     {value: 'Maintain', label: 'Maintain'},
//     {value: 'Gain', label: 'Gain'},
//     {value: 'Lose', label: 'Lose'}
//   ] 

//   const activeOption = options.find(o => o.value === type)
//   const activeGoalOption = options.find(o => o.value === goal)

// if(goal === 'Gain') {
//   aim =  500;
// }else if(goal === 'Lose') {
//   aim = -500
// }else {
//   aim = 0;
// }

//   return (
//     <div>
     
//               <form  value="Submit" onSubmit={e =>{
//                   e.preventDefault();
//                   createUserInfo({variables: {fullName: fullName.value, gender: type, age: parseInt(age.value), height: parseInt(height.value), weight: parseInt(weight.value), total: parseInt(weight.value * 10) + parseInt(height.value * 6.25) - parseInt(age.value * 5) + (type === "Male" ? 5 : -161) + aim} },{data})
//                   // console.log(data)
//               }}>
//                   <div className="name_Container">
//                       <label>Name</label>
//                       <p>It’s the name of the product</p>
//                       <input type="text" id="newProjectTitle" placeholder="Name" ref={ value => fullName = value} />
//                   </div>
//                   <div className="name_Container">
//                       <label>Age</label>  
//                       <p>It will contain the price of our product</p>                   
//                       <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => age = value}/>
//                   </div>
//                   <div className="name_Container">
//                       <label>Weight</label>  
//                       <p>It will contain the price of our product</p>                   
//                       <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => weight = value}/>
//                   </div>
//                   <div className="name_Container">
//                       <label>Height</label>  
//                       <p>It will contain the price of our product</p>                   
//                       <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => height = value}/>
//                   </div>
//                   <div className="name_Container">
//                       <label>Gender</label>
//                       <p>This field will contain the description of our product</p>
//                       <input type="text" id="newProjectDescription" placeholder="Description" ref={ value => gender = value}/>
//                  </div>
//                  <div className="name_Container">
//                       <label>Test</label>
//                       <Select  
//                       value={activeOption}
//                       defaultValue={options[0]}
//                       onChange={e => setType(e.value)}
//                       options={options}
//                       />
//                       <Select  
//                       value={activeGoalOption}
//                       defaultValue={goalOptions[0]}
//                       onChange={e => setGoal(e.value)}
//                       options={goalOptions}
//                       />
//                  </div> 
//                   <div className="modal-footer">
//                     <button  id="cancel_button" className="btn btn-primary" onClick={handleClose}>Cancel</button>
//                     <button type="submit" className="btn btn-primary">Add Product</button>
//                   </div>
//               </form>
          
//           </div>          
//   );
// };






















      

// export default DailyIntake;