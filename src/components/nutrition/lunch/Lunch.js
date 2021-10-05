// import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import Snacks from '../snacks/Snacks';

import { useQuery } from '@apollo/client';
import NUTRITION_QUERY from './LunchQueries/LunchQuery';
// import Nutritionlunchinfo from './LunchInfo';
import Lunchinfo from './LunchInfo';
import AddLunch from './LunchAdd';
import Dinner from '../dinner/Dinner';
// import { Modal, Button } from 'react-bootstrap';
// import '../lunch/lunchButton.css'
// import UserInfo from '../user/UserInfo';
// import Accordion from 'react-bootstrap/Accordion'
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import {React, useState, useEffect} from 'react'
// import DailyIntake from '../user/DailyIntak';
// import AddNutritionLunch from './LunchAdd';
// import Nutrition from '../Nutrition';
import { Progress } from 'antd';
// import '.../css/meals.css'

// const test = totalscores;
function NutritionLunch (props) {
 const hehe = props.post;
  console.log(props);
const [nutritionLunches, setNutritionLunches] = useState([]);
const [dataz, setDataz] = useState()
const { loading, error, data } = useQuery(NUTRITION_QUERY);
const [dinner, setDinner] = useState(false);
const [proteinSnack, setProteinSnack] = useState();
const [carbsSnack, setCarbsSnack] = useState();
const [fatSnack, setFatSnack] = useState();
const [proteinDinner, setProteinDinner] = useState();
const [carbsDinner, setCarbsDinner] = useState();
const [fatDinner, setFatDinner] = useState();
console.log(NUTRITION_QUERY);
console.log(data);
const getDatas = () => {
  if(loading) 
      return <p>Loading lunch...</p>
  if(error)
      return <p>Error...</p>
  if(data) {
      setNutritionLunches(data.nutritionLunches);
      console.log(data);
  }
} 


const dailyIntakeForUser = props.dailyIntakeForUser;
const breakfastIntake = props.breakfastIntake;
// console.log(propsfromnutrition);
const totalscoresLunch = nutritionLunches.reduce((a,v) =>  a = a + v.totalCalories , 0 );

// const breakfastlunch = propsfromnutrition - totalscoresLunch;

const breakfastlunch = breakfastIntake + totalscoresLunch;
const consumedLunchCalories = Math.round(totalscoresLunch / dailyIntakeForUser * 100);

//Total nutrition per breakfast
const totalProtein = nutritionLunches.reduce((a,v) =>  a = a + v.protein , 0 );
const totalCarbs = nutritionLunches.reduce((a,v) =>  a = a + v.carbs , 0 );
const totalFat = nutritionLunches.reduce((a,v) =>  a = a + v.fat , 0 );

//Total nutrition per breakfast in percent
const ProteinDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 4);
const CarbsDailyNeed =  Math.round(dailyIntakeForUser  * 0.4 / 4);
const FatDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 9);
const consumedProteinLunchInPercent = Math.round(totalProtein / ProteinDailyNeed * 100);
const consumedCarbsLunchInPercent = Math.round(totalCarbs / CarbsDailyNeed * 100);
const consumedFatLunchInPercent = Math.round(totalFat / FatDailyNeed * 100);

// const test = props.map(prop => <p>{prop.age}</p>);
// const dailyIntake = props.nut;

// const totalfinaly = dailyIntake - totalscores;
// console.log(totalfinaly);

useEffect(() => {
  getDatas();
  console.log(nutritionLunches);

})

// Snack daily consumed calories
const consumedProteinSnack = proteinSnack;
const consumedCarbsSnack = carbsSnack;
const consumedFatSnack = fatSnack;

// Dinner daily consumed calories
const consumedProteinDinner = proteinDinner;
const consumedCarbsDinner = carbsDinner;
const consumedFatDinner = fatDinner;

// Lunch daily consumed calories
const consumedProteinLunch = totalProtein;
const consumedCarbsLunch = totalCarbs;
const consumedFatLunch = totalFat;

const dailyConsumedProtein = consumedProteinLunch + consumedProteinDinner + consumedProteinSnack;
const dailyConsumedCarbs = consumedCarbsLunch + consumedCarbsDinner + consumedCarbsSnack;
const dailyConsumedFat = consumedFatLunch + consumedFatDinner + consumedFatSnack;

  const [word, setWord] = useState()
     return (
          <div className="toggle">
           <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
          <Typography id='hover'>Lunch
            
                  {/* <h6>Daily Consumed Nutrition from Snack protein: {consumedProteinSnack}</h6>
                  <h6>Daily Consumed Nutrition from Snack carbs: {consumedCarbsSnack}</h6>
                  <h6>Daily Consumed Nutrition from Snack fat: {consumedFatSnack} </h6>
                 
                  <h6>Daily Consumed Nutrition from Dinner protein: {consumedProteinDinner}</h6>
                  <h6>Daily Consumed Nutrition from Dinner carbs: {consumedCarbsDinner}</h6>
                  <h6>Daily Consumed Nutrition from Dinner fat: {consumedFatDinner} </h6>
                  <h6>Daily Consumed Nutrition from Lunch protein: {consumedProteinLunch}</h6>
                  <h6>Daily Consumed Nutrition from Lunch carbs: {consumedCarbsLunch}</h6>
                  <h6>Daily Consumed Nutrition from Lunch fat: {consumedFatLunch} </h6> */}
                  
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="container mt-4">
                <div className="row">
                {/* <h2>{breakfastlunch} total kcals left after breakfast and lunch</h2>  */}
                  <div className="breakfast">
                    <h3 className='title'>Lunch</h3>
                    {/* <h2>Total: {totalscoresLunch}</h2> */}
                    {/* <h2>Parent: {dataz}</h2>
                    <h2>Child: {totalscoresLunch}</h2> */}
                    {props.changeTotalData(word)}
                    {props.changeProteinLunch(dailyConsumedProtein)}
                    {props.changeCarbsLunch(dailyConsumedCarbs)}
                    {props.changeFatLunch(dailyConsumedFat)}
                </div>
                 <table class="table">
                 <thead>
                  <tr>
                    <th scope="col">Food</th>
                    <th scope="col">Protein</th>
                    <th scope="col">Carbs</th>
                    <th scope="col">Fat</th>
                    <th scope="col">Total Calorie Intake</th>
                    <th scope="col"><AddLunch hehe={hehe}/></th>
                  </tr>
                </thead>
                <tbody>
                    {nutritionLunches.map(nutrition => <Lunchinfo key={nutrition.id} nutrition={nutrition} tot={totalscoresLunch} />)}   
                </tbody>
                </table>
                {/* <h2>Calories Left: {breakfastlunch}</h2> */}
                <div style={{ width: 870 }}>
                  <h6>Daily Cosumed Calories {totalscoresLunch} / {dailyIntakeForUser}</h6>
                  <Progress percent={consumedLunchCalories} size="small" status="active" strokeColor="#00BFA6" />
                  <h6>Daily Protein Intake {totalProtein} / {ProteinDailyNeed}</h6>
                  <Progress percent={consumedProteinLunchInPercent} size="small" status="active" strokeColor="#00BFA6" />
                  <h6>Daily Carbs Intake {totalCarbs} / {CarbsDailyNeed}</h6>
                  <Progress percent={consumedCarbsLunchInPercent} size="small" status="active" strokeColor="#00BFA6" />
                  <h6>Daily Fat Intake {totalFat} / {FatDailyNeed}</h6>
                  <Progress percent={consumedFatLunchInPercent} size="small" status="active" strokeColor="#00BFA6" />
                  {/* <Progress percent={100} size="small" /> */}
                </div>
                </div>
              </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
          <Typography id='hover'>Dinner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Dinner 
          breakfastlunch={breakfastlunch} dailyIntakeForUser={dailyIntakeForUser} 
          changeTotalDataz={dataz => setDataz(dataz)} 
          changeProteinDinner={proteinDinner => setProteinDinner(proteinDinner)}
          changeCarbsDinner={carbsDinner => setCarbsDinner(carbsDinner)}
          changeFatDinner={fatDinner => setFatDinner(fatDinner)}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
          <Typography id='hover'>Snack</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Snacks 
          snackprops={dataz} 
          dailyIntakeForUser={dailyIntakeForUser} changesWord={word => setWord(word)}
          changeProteinSnack={proteinSnack => setProteinSnack(proteinSnack)}
          changeCarbsSnack={carbsSnack => setCarbsSnack(carbsSnack)}
          changeFatSnack={fatSnack => setFatSnack(fatSnack)}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
            </div>
          )
     }
// }

export default NutritionLunch;

{/* <h2>{breakfastlunch}</h2>
                  <h2><Dinner breakfastlunch={breakfastlunch} /></h2> */}
{/* <h2>{breakfastlunch}</h2> <-- total cals for breakfast and lunch minus daglig kalorie intag */}



// if(dinner === true) {
//   return (<div>
    
//     <Button className="lunchButton" onClick={showDinner}>Lunch</Button>
//     <Dinner breakfastlunch={breakfastlunch} dailyIntakeForUser={dailyIntakeForUser} changeTotalDataz={dataz => setDataz(dataz)} />
//     </div>)

// }else {

//   console.log(nutritions);
//   console.log((nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 )));
//   console.log(totalscores)

{/*AccordionDetails className="acco" */}



// // import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';

// import Snacks from '../snacks/Snacks';

// import { useQuery } from '@apollo/client';
// import NUTRITION_QUERY from './LunchQueries/LunchQuery';
// // import Nutritionlunchinfo from './LunchInfo';
// import Lunchinfo from './LunchInfo';
// import AddLunch from './LunchAdd';
// import Dinner from '../dinner/Dinner';
// // import { Modal, Button } from 'react-bootstrap';
// // import '../lunch/lunchButton.css'
// // import UserInfo from '../user/UserInfo';
// // import Accordion from 'react-bootstrap/Accordion'
// // import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
// import {React, useState, useEffect} from 'react'
// // import DailyIntake from '../user/DailyIntak';
// // import AddNutritionLunch from './LunchAdd';
// // import Nutrition from '../Nutrition';
// import { Progress } from 'antd';
// // import '.../css/meals.css'

// // const test = totalscores;
// function NutritionLunch (props) {
//  const hehe = props.post;
//   console.log(props);
// const [nutritionLunches, setNutritionLunches] = useState([]);
// const [dataz, setDataz] = useState()
// const { loading, error, data } = useQuery(NUTRITION_QUERY);
// const [dinner, setDinner] = useState(false);
// const [proteinSnack, setProteinSnack] = useState();
// const [carbsSnack, setCarbsSnack] = useState();
// const [fatSnack, setFatSnack] = useState();
// const [proteinDinner, setProteinDinner] = useState();
// const [carbsDinner, setCarbsDinner] = useState();
// const [fatDinner, setFatDinner] = useState();
// console.log(NUTRITION_QUERY);
// console.log(data);
// const getDatas = () => {
//   if(loading) 
//       return <p>Loading lunch...</p>
//   if(error)
//       return <p>Error...</p>
//   if(data) {
//       setNutritionLunches(data.nutritionLunches);
//       console.log(data);
//   }
// } 


// const dailyIntakeForUser = props.dailyIntakeForUser;
// const breakfastIntake = props.breakfastIntake;
// // console.log(propsfromnutrition);
// const totalscoresLunch = nutritionLunches.reduce((a,v) =>  a = a + v.totalCalories , 0 );
// console.log(totalscoresLunch)
// // const breakfastlunch = propsfromnutrition - totalscoresLunch;

// const breakfastlunch = breakfastIntake + totalscoresLunch;
// const consumedLunchCalories = Math.round(totalscoresLunch / dailyIntakeForUser * 100);

// //Total nutrition per breakfast
// const totalProtein = nutritionLunches.reduce((a,v) =>  a = a + v.protein , 0 );
// const totalCarbs = nutritionLunches.reduce((a,v) =>  a = a + v.carbs , 0 );
// const totalFat = nutritionLunches.reduce((a,v) =>  a = a + v.fat , 0 );

// //Total nutrition per breakfast in percent
// const ProteinDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 4);
// const CarbsDailyNeed =  Math.round(dailyIntakeForUser  * 0.4 / 4);
// const FatDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 9);
// const consumedProteinLunchInPercent = Math.round(totalProtein / ProteinDailyNeed * 100);
// const consumedCarbsLunchInPercent = Math.round(totalCarbs / CarbsDailyNeed * 100);
// const consumedFatLunchInPercent = Math.round(totalFat / FatDailyNeed * 100);

// // const test = props.map(prop => <p>{prop.age}</p>);
// // const dailyIntake = props.nut;

// // const totalfinaly = dailyIntake - totalscores;
// // console.log(totalfinaly);

// useEffect(() => {
//   getDatas();
//   console.log(nutritionLunches);

// })

// // Snack daily consumed calories
// const consumedProteinSnack = proteinSnack;
// const consumedCarbsSnack = carbsSnack;
// const consumedFatSnack = fatSnack;

// // Dinner daily consumed calories
// const consumedProteinDinner = proteinDinner;
// const consumedCarbsDinner = carbsDinner;
// const consumedFatDinner = fatDinner;

// // Lunch daily consumed calories
// const consumedProteinLunch = totalProtein;
// const consumedCarbsLunch = totalCarbs;
// const consumedFatLunch = totalFat;

// const dailyConsumedProtein = consumedProteinLunch + consumedProteinDinner + consumedProteinSnack;
// const dailyConsumedCarbs = consumedCarbsLunch + consumedCarbsDinner + consumedCarbsSnack;
// const dailyConsumedFat = consumedFatLunch + consumedFatDinner + consumedFatSnack;

//   const [word, setWord] = useState()
//      return (
//           <div className="toggle">
//            <Accordion>
//         <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
//           <Typography id='hover'>Lunch
            
//                   {/* <h6>Daily Consumed Nutrition from Snack protein: {consumedProteinSnack}</h6>
//                   <h6>Daily Consumed Nutrition from Snack carbs: {consumedCarbsSnack}</h6>
//                   <h6>Daily Consumed Nutrition from Snack fat: {consumedFatSnack} </h6>
                 
//                   <h6>Daily Consumed Nutrition from Dinner protein: {consumedProteinDinner}</h6>
//                   <h6>Daily Consumed Nutrition from Dinner carbs: {consumedCarbsDinner}</h6>
//                   <h6>Daily Consumed Nutrition from Dinner fat: {consumedFatDinner} </h6>

//                   <h6>Daily Consumed Nutrition from Lunch protein: {consumedProteinLunch}</h6>
//                   <h6>Daily Consumed Nutrition from Lunch carbs: {consumedCarbsLunch}</h6>
//                   <h6>Daily Consumed Nutrition from Lunch fat: {consumedFatLunch} </h6> */}
                  
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           <div className="container mt-4">
//                 <div className="row">
//                 {/* <h2>{breakfastlunch} total kcals left after breakfast and lunch</h2>  */}
//                   <div className="breakfast">
//                     <h3 className='title'>Lunch</h3>
//                     {/* <h2>Total: {totalscoresLunch}</h2> */}
//                     {/* <h2>Parent: {dataz}</h2>
//                     <h2>Child: {totalscoresLunch}</h2> */}
//                     {props.changeTotalData(word)}
//                     {props.changeProteinLunch(dailyConsumedProtein)}
//                     {props.changeCarbsLunch(dailyConsumedCarbs)}
//                     {props.changeFatLunch(dailyConsumedFat)}
//                 </div>
//                  <table class="table">
//                  <thead>
//                   <tr>
//                     <th scope="col">Food</th>
//                     <th scope="col">Protein</th>
//                     <th scope="col">Carbs</th>
//                     <th scope="col">Fat</th>
//                     <th scope="col">Total Calorie Intake</th>
//                     <th scope="col"><AddLunch hehe={hehe}/></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                     {nutritionLunches.map(nutrition => <Lunchinfo key={nutrition.id} nutrition={nutrition} tot={totalscoresLunch} />)}   
//                 </tbody>
//                 </table>
//                 {/* <h2>Calories Left: {breakfastlunch}</h2> */}
//                 <div style={{ width: 870 }}>
//                   <h6>Daily Cosumed Calories {totalscoresLunch} / {dailyIntakeForUser}</h6>
//                   <Progress percent={consumedLunchCalories} size="small" status="active" strokeColor="#00BFA6" />
//                   <h6>Daily Protein Intake {totalProtein} / {ProteinDailyNeed}</h6>
//                   <Progress percent={consumedProteinLunchInPercent} size="small" status="active" strokeColor="#00BFA6" />
//                   <h6>Daily Carbs Intake {totalCarbs} / {CarbsDailyNeed}</h6>
//                   <Progress percent={consumedCarbsLunchInPercent} size="small" status="active" strokeColor="#00BFA6" />
//                   <h6>Daily Fat Intake {totalFat} / {FatDailyNeed}</h6>
//                   <Progress percent={consumedFatLunchInPercent} size="small" status="active" strokeColor="#00BFA6" />
//                   {/* <Progress percent={100} size="small" /> */}
//                 </div>
//                 </div>
//               </div>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
//           <Typography id='hover'>Dinner</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           <Dinner 
//           breakfastlunch={breakfastlunch} dailyIntakeForUser={dailyIntakeForUser} 
//           changeTotalDataz={dataz => setDataz(dataz)} 
//           changeProteinDinner={proteinDinner => setProteinDinner(proteinDinner)}
//           changeCarbsDinner={carbsDinner => setCarbsDinner(carbsDinner)}
//           changeFatDinner={fatDinner => setFatDinner(fatDinner)}/>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
//           <Typography id='hover'>Snack</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           <Snacks 
//           snackprops={dataz} 
//           dailyIntakeForUser={dailyIntakeForUser} changesWord={word => setWord(word)}
//           changeProteinSnack={proteinSnack => setProteinSnack(proteinSnack)}
//           changeCarbsSnack={carbsSnack => setCarbsSnack(carbsSnack)}
//           changeFatSnack={fatSnack => setFatSnack(fatSnack)}/>
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//             </div>
//           )
//      }
// // }

// export default NutritionLunch;

// {/* <h2>{breakfastlunch}</h2>
//                   <h2><Dinner breakfastlunch={breakfastlunch} /></h2> */}
// {/* <h2>{breakfastlunch}</h2> <-- total cals for breakfast and lunch minus daglig kalorie intag */}



// // if(dinner === true) {
// //   return (<div>
    
// //     <Button className="lunchButton" onClick={showDinner}>Lunch</Button>
// //     <Dinner breakfastlunch={breakfastlunch} dailyIntakeForUser={dailyIntakeForUser} changeTotalDataz={dataz => setDataz(dataz)} />
// //     </div>)

// // }else {

// //   console.log(nutritions);
// //   console.log((nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 )));
// //   console.log(totalscores)

// {/*AccordionDetails className="acco" */}