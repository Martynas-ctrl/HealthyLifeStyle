import { useQuery } from '@apollo/client';
import NUTRITION_QUERY from './BreakfastQueries/NutritionQuery';
// import NUTRITIONLUNCH_QUERY from './lunch/LunchQuery';
import ADDDAILYNUTRITION_QUERY from '../../queries/AddDailyConsumedNutritionQuery';
import Nutritioninfo from './NutritionInfo';
// import UserInfo from '../user/UserInfo';
// import { Modal, Button } from 'react-bootstrap';
import {React, useState, useEffect} from 'react'
// import DailyIntake from '../user/DailyIntak';
import AddNutrition from './AddNutrition';
import NutritionLunch from '../lunch/Lunch';
import { useMutation } from '@apollo/client';
// import Dinner from './dinner/Dinner';
// import Snacks from './snacks/Snacks';
// import AddNutritionLunch from './lunch/AddNutritionLunch';
// import ProgressBar from "@ramonak/react-progress-bar";
// import { Line, Circle } from 'rc-progress';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Progress } from 'antd';
// import AddUser from '../user/AddUser'
// import Training from '../Training/Training';
// const test = totalscores;

// import './CssBreakfast/custom.css';
import './CssBreakfast/table.css';
import './CssBreakfast/meals.css'
function Nutrition (props) {
 
  // console.log(props);
const [nutritions, setNutritions] = useState([]);
// const [dailyIntake, setTest] = useState([]);
const [totalData , setTotalData] = useState();
const [ps , setPs] = useState();
// const [showBreakfast, setShowBreakfast] = useState(false);
// const [showLunch, setShowLunch] = useState(false);
// const [dinner, setDinner] = useState(false);
// const [snacks, setSnacks] = useState(false);
// const [total, setTotal] = useState([]);
// const [proteinLunch, setProteinLunch] = useState();
const [dailyConsumedProtein, setDailyConsumedProtein] = useState();
const [dailyConsumedCarbs, setDailyConsumedCarbs] = useState();
const [dailyConsumedFat, setDailyConsumedFat] = useState();
// const [carbsLunch, setCarbsLunch] = useState();
// const [fatLunch, setFatLunch] = useState();
const { loading, error, data } = useQuery(NUTRITION_QUERY);

console.log(NUTRITION_QUERY);
console.log(data);
const getDatas = () => {
  if(loading) 
      return <p>Loading breakfast...</p>
  if(error)
      return <p>Error...</p>
  if(data) {
      setNutritions(data.nutritions);
      console.log(data);
  }
} 

const totalscores = nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 );
const dailyIntakeprops = props.nut;
const dailyIntakeForUser = dailyIntakeprops;

//Total nutrition per breakfast
const totalProteins = nutritions.reduce((a,v) =>  a = a + v.protein , 0 );
const totalCarbss = nutritions.reduce((a,v) =>  a = a + v.carbs , 0 );
const totalFats = nutritions.reduce((a,v) =>  a = a + v.fat , 0 );
console.log(totalProteins);
//Total nutrition per breakfast in percent
const ProteinDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 4);
const CarbsDailyNeed =  Math.round(dailyIntakeForUser  * 0.4 / 4);
const FatDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 9);
const consumedProteinBreakfast = Math.round(totalProteins / ProteinDailyNeed * 100);
const consumedCarbsBreakfast = Math.round(totalCarbss / CarbsDailyNeed * 100);
const consumedFatBreakfast = Math.round(totalFats / FatDailyNeed * 100);

const consumedBreakfastCalories = Math.round(totalscores / dailyIntakeprops * 100);

const [createDailyConsumedNutrition] = useMutation(ADDDAILYNUTRITION_QUERY);
  
const post = () => {
  createDailyConsumedNutrition({variables: {protein: nutritions.reduce((a,v) =>  a = a + v.protein , 0 ) , carbs: nutritions.reduce((a,v) =>  a = a + v.carbs , 0 ), fat: nutritions.reduce((a,v) =>  a = a + v.fat , 0 ) }} )
}

//för att data ska ändras i daily consumed nutrition schema så måste jag skapa en delete query som också tar bort data därifrån

// console.log(nutritions);
// const showBreak = () => {
//   setShowBreakfast(true);
//   if(showBreakfast === true) {
//     setShowBreakfast(false)
//   }
// }

// const showLun = () => {
//   setShowLunch(true);
// if(showLunch === true) {
//     setShowLunch(false)
//   }
// }

useEffect(() => {
  getDatas();
  // getTotal();
  // console.log((nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 )));
  // console.log((nutritions.reduce((a,v) =>  a = a + v.protein , 0 )));
  // post();
  setPs(totalProteins);
})

// console.log(nutritions)
// const percentage = Math.floor(totalscores * 100 / dailyIntakeForUser);
// const totalProteinInPercentage = Math.floor(totalProteins * 100 / dailyIntakeForUser);
// const consumedProteinLunch = proteinLunch;
// const consumedCarbsLunch = carbsLunch;
// const consumedFatLunch = fatLunch;

const consumedTotalDailyProtein = dailyConsumedProtein + totalProteins;
const consumedTotalDailyCarbs = dailyConsumedCarbs + totalCarbss;
const consumedTotalDailyFat = dailyConsumedFat + totalFats;

// const totalConsumedNutritionLunch = consumedProteinBreakfast + consumedCarbsBreakfast + consumedFatBreakfast;
{props.changeTotalData(totalData)}
{props.changeDailyNutritionProtein(consumedTotalDailyProtein)}
{props.changeDailyNutritionCarbs(consumedTotalDailyCarbs)}
{props.changeDailyNutritionFat(consumedTotalDailyFat)}


  return (
    <div>
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="breakfast">
                <h3 className='title'>Breakfast</h3>
            </div>
              <table class="table">
            <thead>
              <tr>
                <th scope="col">Food</th>
                <th scope="col">Protein</th>
                <th scope="col">Carbs</th>
                <th scope="col">Fat</th>
                <th scope="col">Total Calorie Intake</th>
                <th scope="col"><AddNutrition totalp={ps}/></th>
              </tr>
            </thead>
            <tbody>
                {nutritions.map(nutrition => <Nutritioninfo key={nutrition.id} nutrition={nutrition} />)}
            </tbody>
            </table>
            <div style={{ width: 870 }}>
              <h6>Daily Cosumed Calories {totalscores} / {dailyIntakeprops}</h6>
              <Progress percent={consumedBreakfastCalories} size="small" status="active" strokeColor="#00BFA6" />
              <h6>Daily Protein Intake {Math.round(totalProteins)} / {ProteinDailyNeed}</h6>
              <Progress percent={consumedProteinBreakfast} size="small" status="active" strokeColor="#00BFA6" />
              <h6>Daily Carbs Intake {Math.round(totalCarbss)} / {CarbsDailyNeed}</h6>
              <Progress percent={consumedCarbsBreakfast} size="small" status="active" strokeColor="#00BFA6" />
              <h6>Daily Fat Intake {Math.round(totalFats)} / {FatDailyNeed}</h6>
              <Progress percent={consumedFatBreakfast} size="small" status="active" strokeColor="#00BFA6" />
            </div>
              <NutritionLunch 
              post={post} dailyIntakeForUser={dailyIntakeForUser} 
              breakfastIntake={totalscores} 
              ProteinDailyNeed={ProteinDailyNeed} 
              CarbsDailyNeed={CarbsDailyNeed} 
              FatDailyNeed={FatDailyNeed} 
              changeTotalData={totalData => setTotalData(totalData)}
              changeProteinLunch={proteinLunch => setDailyConsumedProtein(proteinLunch)}
              changeCarbsLunch={carbsLunch => setDailyConsumedCarbs(carbsLunch)}
              changeFatLunch={fatLunch => setDailyConsumedFat(fatLunch)} />
            </div>
          </div>
        </div> 
    </div>
  )
}

// }


//ta kalorier som man fått i sig under alla måltider och skicka dem till ny schema och senare därifrån hämta den på en ny komponent och rendera den därifrån
export default Nutrition;


// import { useQuery } from '@apollo/client';
// import NUTRITION_QUERY from './BreakfastQueries/NutritionQuery';
// // import NUTRITIONLUNCH_QUERY from './lunch/LunchQuery';
// import ADDDAILYNUTRITION_QUERY from '../../queries/AddDailyConsumedNutritionQuery';
// import Nutritioninfo from './NutritionInfo';
// // import UserInfo from '../user/UserInfo';
// // import { Modal, Button } from 'react-bootstrap';
// import {React, useState, useEffect} from 'react'
// // import DailyIntake from '../user/DailyIntak';
// import AddNutrition from './AddNutrition';
// import NutritionLunch from '../lunch/Lunch';
// import { useMutation } from '@apollo/client';
// // import Dinner from './dinner/Dinner';
// // import Snacks from './snacks/Snacks';
// // import AddNutritionLunch from './lunch/AddNutritionLunch';
// // import ProgressBar from "@ramonak/react-progress-bar";
// // import { Line, Circle } from 'rc-progress';
// // import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// import { Progress } from 'antd';
// // import AddUser from '../user/AddUser'
// // import Training from '../Training/Training';
// // const test = totalscores;

// // import './CssBreakfast/custom.css';
// import './CssBreakfast/table.css';
// import './CssBreakfast/meals.css'
// function Nutrition (props) {
 
//   // console.log(props);
// const [nutritions, setNutritions] = useState([]);
// // const [dailyIntake, setTest] = useState([]);
// const [totalData , setTotalData] = useState();
// const [ps , setPs] = useState();
// // const [showBreakfast, setShowBreakfast] = useState(false);
// // const [showLunch, setShowLunch] = useState(false);
// // const [dinner, setDinner] = useState(false);
// // const [snacks, setSnacks] = useState(false);
// // const [total, setTotal] = useState([]);
// // const [proteinLunch, setProteinLunch] = useState();
// const [dailyConsumedProtein, setDailyConsumedProtein] = useState();
// const [dailyConsumedCarbs, setDailyConsumedCarbs] = useState();
// const [dailyConsumedFat, setDailyConsumedFat] = useState();
// // const [carbsLunch, setCarbsLunch] = useState();
// // const [fatLunch, setFatLunch] = useState();
// const { loading, error, data } = useQuery(NUTRITION_QUERY);

// console.log(NUTRITION_QUERY);
// console.log(data);
// const getDatas = () => {
//   if(loading) 
//       return <p>Loading breakfast...</p>
//   if(error)
//       return <p>Error...</p>
//   if(data) {
//       setNutritions(data.nutritions);
//       console.log(data);
//   }
// } 

// const totalscores = nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 );
// const dailyIntakeprops = props.nut;
// const dailyIntakeForUser = dailyIntakeprops;

// //Total nutrition per breakfast
// const totalProteins = nutritions.reduce((a,v) =>  a = a + v.protein , 0 );
// const totalCarbss = nutritions.reduce((a,v) =>  a = a + v.carbs , 0 );
// const totalFats = nutritions.reduce((a,v) =>  a = a + v.fat , 0 );
// console.log(totalProteins);
// //Total nutrition per breakfast in percent
// const ProteinDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 4);
// const CarbsDailyNeed =  Math.round(dailyIntakeForUser  * 0.4 / 4);
// const FatDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 9);
// const consumedProteinBreakfast = Math.round(totalProteins / ProteinDailyNeed * 100);
// const consumedCarbsBreakfast = Math.round(totalCarbss / CarbsDailyNeed * 100);
// const consumedFatBreakfast = Math.round(totalFats / FatDailyNeed * 100);

// const consumedBreakfastCalories = Math.round(totalscores / dailyIntakeprops * 100);

// const [createDailyConsumedNutrition] = useMutation(ADDDAILYNUTRITION_QUERY);
  
// const post = () => {
//   createDailyConsumedNutrition({variables: {protein: nutritions.reduce((a,v) =>  a = a + v.protein , 0 ) , carbs: nutritions.reduce((a,v) =>  a = a + v.carbs , 0 ), fat: nutritions.reduce((a,v) =>  a = a + v.fat , 0 ) }} )
// }

// //för att data ska ändras i daily consumed nutrition schema så måste jag skapa en delete query som också tar bort data därifrån

// // console.log(nutritions);
// // const showBreak = () => {
// //   setShowBreakfast(true);
// //   if(showBreakfast === true) {
// //     setShowBreakfast(false)
// //   }
// // }

// // const showLun = () => {
// //   setShowLunch(true);
// // if(showLunch === true) {
// //     setShowLunch(false)
// //   }
// // }

// useEffect(() => {
//   getDatas();
//   // getTotal();
//   // console.log((nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 )));
//   // console.log((nutritions.reduce((a,v) =>  a = a + v.protein , 0 )));
//   // post();
//   setPs(totalProteins);
// })

// // console.log(nutritions)
// // const percentage = Math.floor(totalscores * 100 / dailyIntakeForUser);
// // const totalProteinInPercentage = Math.floor(totalProteins * 100 / dailyIntakeForUser);
// // const consumedProteinLunch = proteinLunch;
// // const consumedCarbsLunch = carbsLunch;
// // const consumedFatLunch = fatLunch;

// const consumedTotalDailyProtein = dailyConsumedProtein + totalProteins;
// const consumedTotalDailyCarbs = dailyConsumedCarbs + totalCarbss;
// const consumedTotalDailyFat = dailyConsumedFat + totalFats;

// // const totalConsumedNutritionLunch = consumedProteinBreakfast + consumedCarbsBreakfast + consumedFatBreakfast;
// {props.changeTotalData(totalData)}
// {props.changeDailyNutritionProtein(consumedTotalDailyProtein)}
// {props.changeDailyNutritionCarbs(consumedTotalDailyCarbs)}
// {props.changeDailyNutritionFat(consumedTotalDailyFat)}


//   return (
//     <div>
//       <div>
//         <div className="container mt-4">
//           <div className="row">
//             <div className="breakfast">
//                 <h3 className='title'>Breakfast</h3>
//             </div>
//               <table class="table">
//             <thead>
//               <tr>
//                 <th scope="col">Food</th>
//                 <th scope="col">Protein</th>
//                 <th scope="col">Carbs</th>
//                 <th scope="col">Fat</th>
//                 <th scope="col">Total Calorie Intake</th>
//                 <th scope="col"><AddNutrition totalp={ps}/></th>
//               </tr>
//             </thead>
//             <tbody>
//                 {nutritions.map(nutrition => <Nutritioninfo key={nutrition.id} nutrition={nutrition} />)}
//             </tbody>
//             </table>
//             <div style={{ width: 870 }}>
//               <h6>Daily Cosumed Calories {totalscores} / {dailyIntakeprops}</h6>
//               <Progress percent={consumedBreakfastCalories} size="small" status="active" strokeColor="#00BFA6" />
//               <h6>Daily Protein Intake {totalProteins} / {ProteinDailyNeed}</h6>
//               <Progress percent={consumedProteinBreakfast} size="small" status="active" strokeColor="#00BFA6" />
//               <h6>Daily Carbs Intake {totalCarbss} / {CarbsDailyNeed}</h6>
//               <Progress percent={consumedCarbsBreakfast} size="small" status="active" strokeColor="#00BFA6" />
//               <h6>Daily Fat Intake {totalFats} / {FatDailyNeed}</h6>
//               <Progress percent={consumedFatBreakfast} size="small" status="active" strokeColor="#00BFA6" />
//             </div>
//               <NutritionLunch 
//               post={post} dailyIntakeForUser={dailyIntakeForUser} 
//               breakfastIntake={totalscores} 
//               ProteinDailyNeed={ProteinDailyNeed} 
//               CarbsDailyNeed={CarbsDailyNeed} 
//               FatDailyNeed={FatDailyNeed} 
//               changeTotalData={totalData => setTotalData(totalData)}
//               changeProteinLunch={proteinLunch => setDailyConsumedProtein(proteinLunch)}
//               changeCarbsLunch={carbsLunch => setDailyConsumedCarbs(carbsLunch)}
//               changeFatLunch={fatLunch => setDailyConsumedFat(fatLunch)} />
//             </div>
//           </div>
//         </div> 
//     </div>
//   )
// }

// // }





// // import { useQuery } from '@apollo/client';
// // import NUTRITION_QUERY from './BreakfastQueries/NutritionQuery';
// // // import NUTRITIONLUNCH_QUERY from './lunch/LunchQuery';
// // import ADDDAILYNUTRITION_QUERY from '../../queries/AddDailyConsumedNutritionQuery';
// // import Nutritioninfo from './NutritionInfo';
// // // import UserInfo from '../user/UserInfo';
// // // import { Modal, Button } from 'react-bootstrap';
// // import {React, useState, useEffect} from 'react'
// // // import DailyIntake from '../user/DailyIntak';
// // import AddNutrition from './AddNutrition';
// // import NutritionLunch from '../lunch/Lunch';
// // import { useMutation } from '@apollo/client';
// // // import Dinner from './dinner/Dinner';
// // // import Snacks from './snacks/Snacks';
// // // import AddNutritionLunch from './lunch/AddNutritionLunch';
// // // import ProgressBar from "@ramonak/react-progress-bar";
// // // import { Line, Circle } from 'rc-progress';
// // // import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// // import 'react-circular-progressbar/dist/styles.css';

// // import { Progress } from 'antd';
// // // import AddUser from '../user/AddUser'
// // // import Training from '../Training/Training';
// // // const test = totalscores;

// // // import './CssBreakfast/custom.css';
// // import './CssBreakfast/table.css';
// // import './CssBreakfast/meals.css'
// // function Nutrition (props) {
 
// //   // console.log(props);
// // const [nutritions, setNutritions] = useState([]);
// // // const [dailyIntake, setTest] = useState([]);
// // const [totalData , setTotalData] = useState();
// // const [ps , setPs] = useState();
// // // const [showBreakfast, setShowBreakfast] = useState(false);
// // // const [showLunch, setShowLunch] = useState(false);
// // // const [dinner, setDinner] = useState(false);
// // // const [snacks, setSnacks] = useState(false);
// // // const [total, setTotal] = useState([]);
// // // const [proteinLunch, setProteinLunch] = useState();
// // const [dailyConsumedProtein, setDailyConsumedProtein] = useState();
// // const [dailyConsumedCarbs, setDailyConsumedCarbs] = useState();
// // const [dailyConsumedFat, setDailyConsumedFat] = useState();
// // // const [carbsLunch, setCarbsLunch] = useState();
// // // const [fatLunch, setFatLunch] = useState();
// // const { loading, error, data } = useQuery(NUTRITION_QUERY);

// // console.log(NUTRITION_QUERY);
// // console.log(data);
// // const getDatas = () => {
// //   if(loading) 
// //       return <p>Loading breakfast...</p>
// //   if(error)
// //       return <p>Error...</p>
// //   if(data) {
// //       setNutritions(data.nutritions);
// //       console.log(data);
// //   }
// // } 

// // const totalscores = nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 );
// // const dailyIntakeprops = props.nut;
// // const dailyIntakeForUser = dailyIntakeprops;

// // //Total nutrition per breakfast
// // const totalProteins = nutritions.reduce((a,v) =>  a = a + v.protein , 0 );
// // const totalCarbss = nutritions.reduce((a,v) =>  a = a + v.carbs , 0 );
// // const totalFats = nutritions.reduce((a,v) =>  a = a + v.fat , 0 );
// // console.log(totalProteins);
// // //Total nutrition per breakfast in percent
// // const ProteinDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 4);
// // const CarbsDailyNeed =  Math.round(dailyIntakeForUser  * 0.4 / 4);
// // const FatDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 9);
// // const consumedProteinBreakfast = Math.round(totalProteins / ProteinDailyNeed * 100);
// // const consumedCarbsBreakfast = Math.round(totalCarbss / CarbsDailyNeed * 100);
// // const consumedFatBreakfast = Math.round(totalFats / FatDailyNeed * 100);

// // const consumedBreakfastCalories = Math.round(totalscores / dailyIntakeprops * 100);

// // const [createDailyConsumedNutrition] = useMutation(ADDDAILYNUTRITION_QUERY);
  
// // const post = () => {
// //   createDailyConsumedNutrition({variables: {protein: nutritions.reduce((a,v) =>  a = a + v.protein , 0 ) , carbs: nutritions.reduce((a,v) =>  a = a + v.carbs , 0 ), fat: nutritions.reduce((a,v) =>  a = a + v.fat , 0 ) }} )
// // }

// // //för att data ska ändras i daily consumed nutrition schema så måste jag skapa en delete query som också tar bort data därifrån

// // // console.log(nutritions);
// // // const showBreak = () => {
// // //   setShowBreakfast(true);
// // //   if(showBreakfast === true) {
// // //     setShowBreakfast(false)
// // //   }
// // // }

// // // const showLun = () => {
// // //   setShowLunch(true);
// // // if(showLunch === true) {
// // //     setShowLunch(false)
// // //   }
// // // }

// // useEffect(() => {
// //   getDatas();
// //   // getTotal();
// //   // console.log((nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 )));
// //   // console.log((nutritions.reduce((a,v) =>  a = a + v.protein , 0 )));
// //   // post();
// //   setPs(totalProteins);
// // })

// // // console.log(nutritions)
// // // const percentage = Math.floor(totalscores * 100 / dailyIntakeForUser);
// // // const totalProteinInPercentage = Math.floor(totalProteins * 100 / dailyIntakeForUser);
// // // const consumedProteinLunch = proteinLunch;
// // // const consumedCarbsLunch = carbsLunch;
// // // const consumedFatLunch = fatLunch;

// // const consumedTotalDailyProtein = dailyConsumedProtein + totalProteins;
// // const consumedTotalDailyCarbs = dailyConsumedCarbs + totalCarbss;
// // const consumedTotalDailyFat = dailyConsumedFat + totalFats;

// // // const totalConsumedNutritionLunch = consumedProteinBreakfast + consumedCarbsBreakfast + consumedFatBreakfast;
// // {props.changeTotalData(totalData)}
// // {props.changeDailyNutritionProtein(consumedTotalDailyProtein)}
// // {props.changeDailyNutritionCarbs(consumedTotalDailyCarbs)}
// // {props.changeDailyNutritionFat(consumedTotalDailyFat)}


// //   return (
// //     <div>
// //       <div>
// //         <div className="container mt-4">
// //           <div className="row">
// //             <div className="breakfast">
// //                 <h3 className='title'>Breakfast</h3>
// //             </div>
// //               <table class="table">
// //             <thead>
// //               <tr>
// //                 <th scope="col">Food</th>
// //                 <th scope="col">Protein</th>
// //                 <th scope="col">Carbs</th>
// //                 <th scope="col">Fat</th>
// //                 <th scope="col">Total Calorie Intake</th>
// //                 <th scope="col"><AddNutrition totalp={ps}/></th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //                 {nutritions.map(nutrition => <Nutritioninfo key={nutrition.id} nutrition={nutrition} />)}
// //             </tbody>
// //             </table>
// //             <div style={{ width: 870 }}>
// //               <h6>Daily Cosumed Calories {totalscores} / {dailyIntakeprops}</h6>
// //               <Progress percent={consumedBreakfastCalories} size="small" status="active" strokeColor="#00BFA6" />
// //               <h6>Daily Protein Intake {totalProteins} / {ProteinDailyNeed}</h6>
// //               <Progress percent={consumedProteinBreakfast} size="small" status="active" strokeColor="#00BFA6" />
// //               <h6>Daily Carbs Intake {totalCarbss} / {CarbsDailyNeed}</h6>
// //               <Progress percent={consumedCarbsBreakfast} size="small" status="active" strokeColor="#00BFA6" />
// //               <h6>Daily Fat Intake {totalFats} / {FatDailyNeed}</h6>
// //               <Progress percent={consumedFatBreakfast} size="small" status="active" strokeColor="#00BFA6" />
// //             </div>
// //               <NutritionLunch 
// //               post={post} dailyIntakeForUser={dailyIntakeForUser} 
// //               breakfastIntake={totalscores} 
// //               ProteinDailyNeed={ProteinDailyNeed} 
// //               CarbsDailyNeed={CarbsDailyNeed} 
// //               FatDailyNeed={FatDailyNeed} 
// //               changeTotalData={totalData => setTotalData(totalData)}
// //               changeProteinLunch={proteinLunch => setDailyConsumedProtein(proteinLunch)}
// //               changeCarbsLunch={carbsLunch => setDailyConsumedCarbs(carbsLunch)}
// //               changeFatLunch={fatLunch => setDailyConsumedFat(fatLunch)} />
// //             </div>
// //           </div>
// //         </div> 
// //     </div>
// //   )
// // }

// // // }


// // //ta kalorier som man fått i sig under alla måltider och skicka dem till ny schema och senare därifrån hämta den på en ny komponent och rendera den därifrån
// // export default Nutrition;

// // // if(showLunch === true) {
// // //   return (<div>
    
// // //     <Button onClick={showLun}>Breakfast</Button>
// // //     <NutritionLunch dailyIntakeForUser={dailyIntakeForUser} breakfastIntake={totalscores} />
// // //     </div>)

// // // }else {


// // {/* <div class="progress" style={{ height:'10px'}}>
// //   <div class="progress-bar" role="progressbar" style={{ width:'1000px'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{100}%</div>
// // </div> */}
// // {/* <Button onClick={showLun}>Lunch</Button> */}
// // {/* <Line percent={percentage} strokeWidth="1"  trailWidth="2" strokeColor="rgb(1, 160, 158)" strokeLinecap='round' gapDegree='150' gapPosition='value: top' /> */}
// // {/* <Circle percent="50" strokeWidth="1" strokeColor="#D3D3D3" /> */}
// // {/* <button onClick={fetchMore}>Next</button> */}

// // {/* <h2>from lunch: {totalData}</h2> */}

// //                 {/* <ProgressBar completed={percentage} width='1000px' height="20px" borderRadius='1px' labelSize="10px"bgcolor='rgb(1, 160, 158)'/>  */}
// //   {/* {props.changeTotalData(totalData)}
// //                       {props.changeDailyNutritionProtein(consumedTotalDailyProtein)}
// //                       {props.changeDailyNutritionCarbs(consumedTotalDailyCarbs)}
// //                       {props.changeDailyNutritionFat(consumedTotalDailyFat)} */}

// // {/* <h2>Calories Left: {totalfinaly}</h2> */}
// // {/* <h6>total protein: {ps}</h6> */}
// // {/* {props.changeTword(consumedProteinLunch + totalProteins)}
// // {props.changeCarbsBreakfast(consumedCarbsLunch + totalCarbss)}
// // {props.changeFatBreakfast(consumedFatLunch + totalFats)} */}

// //  {/* <Progress percent={100} size="small" /> */}
// //                   {/* <h6>Daily Consumed Nutrition from breakfast + lunch + dinner + snack protein: {consumedTotalDailyProtein}  </h6>
// //                   <h6>Daily Consumed Nutrition from breakfast + lunch + dinner + snack carbs: {consumedTotalDailyCarbs} </h6>
// //                   <h6>Daily Consumed Nutrition from breakfast + lunch + dinner + snack fat: {consumedTotalDailyFat} </h6> */}
// //                   {/* <h6>Daily Consumed Nutrition from Lunch all + breakfast all: {totalConsumedNutritionLunch} </h6> */}


// //                   // const lunchScore = props.totalscoresLunch;
// // // const getTotal = () => {
// // //   setTest(totalfinaly);
// // // } 
// // // const dailyIntakeForUser = dailyIntakeprops - totalscores;



// // // import { useQuery } from '@apollo/client';
// // // import NUTRITION_QUERY from './BreakfastQueries/NutritionQuery';
// // // // import NUTRITIONLUNCH_QUERY from './lunch/LunchQuery';
// // // import ADDDAILYNUTRITION_QUERY from '../../queries/AddDailyConsumedNutritionQuery';
// // // import Nutritioninfo from './NutritionInfo';
// // // // import UserInfo from '../user/UserInfo';
// // // // import { Modal, Button } from 'react-bootstrap';
// // // import {React, useState, useEffect} from 'react'
// // // // import DailyIntake from '../user/DailyIntak';
// // // import AddNutrition from './AddNutrition';
// // // import NutritionLunch from '../lunch/Lunch';
// // // import { useMutation } from '@apollo/client';
// // // // import Dinner from './dinner/Dinner';
// // // // import Snacks from './snacks/Snacks';
// // // // import AddNutritionLunch from './lunch/AddNutritionLunch';
// // // // import ProgressBar from "@ramonak/react-progress-bar";
// // // // import { Line, Circle } from 'rc-progress';
// // // // import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// // // import 'react-circular-progressbar/dist/styles.css';

// // // import { Progress } from 'antd';
// // // // import AddUser from '../user/AddUser'
// // // // import Training from '../Training/Training';
// // // // const test = totalscores;

// // // // import './CssBreakfast/custom.css';
// // // import './CssBreakfast/table.css';
// // // import './CssBreakfast/meals.css'
// // // function Nutrition (props) {
 
// // //   // console.log(props);
// // // const [nutritions, setNutritions] = useState([]);
// // // // const [dailyIntake, setTest] = useState([]);
// // // const [totalData , setTotalData] = useState();
// // // const [ps , setPs] = useState();
// // // // const [showBreakfast, setShowBreakfast] = useState(false);
// // // // const [showLunch, setShowLunch] = useState(false);
// // // // const [dinner, setDinner] = useState(false);
// // // // const [snacks, setSnacks] = useState(false);
// // // // const [total, setTotal] = useState([]);
// // // // const [proteinLunch, setProteinLunch] = useState();
// // // const [dailyConsumedProtein, setDailyConsumedProtein] = useState();
// // // const [dailyConsumedCarbs, setDailyConsumedCarbs] = useState();
// // // const [dailyConsumedFat, setDailyConsumedFat] = useState();
// // // // const [carbsLunch, setCarbsLunch] = useState();
// // // // const [fatLunch, setFatLunch] = useState();
// // // const { loading, error, data } = useQuery(NUTRITION_QUERY);

// // // console.log(NUTRITION_QUERY);
// // // console.log(data);
// // // const getDatas = () => {
// // //   if(loading) 
// // //       return <p>Loading breakfast...</p>
// // //   if(error)
// // //       return <p>Error...</p>
// // //   if(data) {
// // //       setNutritions(data.nutritions);
// // //       console.log(data);
// // //   }
// // // } 

// // // // const { loading, error, data } = useQuery(NUTRITION_QUERY);

// // // // console.log(NUTRITION_QUERY);

// // // // const getDatas = () => {
// // // //   if(loading) 
// // // //       return <p>Loading breakfast...</p>
// // // //   if(error)
// // // //       return <p>Error...</p>
// // // //   if(data) {
// // // //       setNutritions(data.nutritions);
// // // //   }
// // // // } 
// // // // const totalscores = nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 );
// // // // console.log(totalscores)
// // // const dailyIntakeprops = props.nut;
// // // const dailyIntakeForUser = dailyIntakeprops;

// // // //Total nutrition per breakfast
// // // const totalProteins = nutritions.reduce((a,v) =>  a = a + v.protein , 0 );
// // // const totalCarbss = nutritions.reduce((a,v) =>  a = a + v.carbs , 0 );
// // // const totalFats = nutritions.reduce((a,v) =>  a = a + v.fat , 0 );
// // // console.log(totalProteins);
// // // console.log(totalCarbss);
// // // console.log(totalFats);



// // // //Total nutrition per breakfast in percent
// // // const ProteinDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 4);
// // // const CarbsDailyNeed =  Math.round(dailyIntakeForUser  * 0.4 / 4);
// // // const FatDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 9);
// // // const consumedProteinBreakfast = Math.round(totalProteins / ProteinDailyNeed * 100);
// // // const consumedCarbsBreakfast = Math.round(totalCarbss / CarbsDailyNeed * 100);
// // // const consumedFatBreakfast = Math.round(totalFats / FatDailyNeed * 100);
// // // const totalscores = totalProteins * 4 + totalCarbss * 4 + totalFats * 9;
// // // console.log(totalscores)
// // // const consumedBreakfastCalories = Math.round(totalscores / dailyIntakeprops * 100);


// // // const [createDailyConsumedNutrition] = useMutation(ADDDAILYNUTRITION_QUERY);
  
// // // const post = () => {
// // //   createDailyConsumedNutrition({variables: {protein: nutritions.reduce((a,v) =>  a = a + v.protein , 0 ) , carbs: nutritions.reduce((a,v) =>  a = a + v.carbs , 0 ), fat: nutritions.reduce((a,v) =>  a = a + v.fat , 0 ) }} )
// // // }

// // // //för att data ska ändras i daily consumed nutrition schema så måste jag skapa en delete query som också tar bort data därifrån

// // // // console.log(nutritions);
// // // // const showBreak = () => {
// // // //   setShowBreakfast(true);
// // // //   if(showBreakfast === true) {
// // // //     setShowBreakfast(false)
// // // //   }
// // // // }

// // // // const showLun = () => {
// // // //   setShowLunch(true);
// // // // if(showLunch === true) {
// // // //     setShowLunch(false)
// // // //   }
// // // // }

// // // useEffect(() => {
// // //   getDatas();
// // //   // getTotal();
// // //   // console.log((nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 )));
// // //   // console.log((nutritions.reduce((a,v) =>  a = a + v.protein , 0 )));
// // //   // post();
// // //   setPs(totalProteins);
// // // })

// // // // console.log(nutritions)
// // // // const percentage = Math.floor(totalscores * 100 / dailyIntakeForUser);
// // // // const totalProteinInPercentage = Math.floor(totalProteins * 100 / dailyIntakeForUser);
// // // // const consumedProteinLunch = proteinLunch;
// // // // const consumedCarbsLunch = carbsLunch;
// // // // const consumedFatLunch = fatLunch;

// // // const consumedTotalDailyProtein = dailyConsumedProtein + totalProteins;
// // // const consumedTotalDailyCarbs = dailyConsumedCarbs + totalCarbss;
// // // const consumedTotalDailyFat = dailyConsumedFat + totalFats;

// // // // const totalConsumedNutritionLunch = consumedProteinBreakfast + consumedCarbsBreakfast + consumedFatBreakfast;
// // // {props.changeTotalData(totalData)}
// // // {props.changeDailyNutritionProtein(consumedTotalDailyProtein)}
// // // {props.changeDailyNutritionCarbs(consumedTotalDailyCarbs)}
// // // {props.changeDailyNutritionFat(consumedTotalDailyFat)}


// // //   return (
// // //     <div>
// // //       <div>
// // //         <div className="container mt-4">
// // //           <div className="row">
// // //             <div className="breakfast">
// // //                 <h3 className='title'>Breakfast</h3>
// // //             </div>
// // //               <table class="table">
// // //             <thead>
// // //               <tr>
// // //                 <th scope="col">Food</th>
// // //                 <th scope="col">Protein</th>
// // //                 <th scope="col">Carbs</th>
// // //                 <th scope="col">Fat</th>
// // //                 <th scope="col">Total Calorie Intake</th>
// // //                 <th scope="col"><AddNutrition totalp={ps}/></th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //                 {nutritions.map(nutrition => <Nutritioninfo key={nutrition.id} nutrition={nutrition} />)}
// // //             </tbody>
// // //             </table>
// // //             <div style={{ width: 870 }}>
// // //               <h6>Daily Cosumed Calories {totalscores} / {dailyIntakeprops}</h6>
// // //               <Progress percent={consumedBreakfastCalories} size="small" status="active" strokeColor="#00BFA6" />
// // //               <h6>Daily Protein Intake {totalProteins} / {ProteinDailyNeed}</h6>
// // //               <Progress percent={consumedProteinBreakfast} size="small" status="active" strokeColor="#00BFA6" />
// // //               <h6>Daily Carbs Intake {totalCarbss} / {CarbsDailyNeed}</h6>
// // //               <Progress percent={consumedCarbsBreakfast} size="small" status="active" strokeColor="#00BFA6" />
// // //               <h6>Daily Fat Intake {totalFats} / {FatDailyNeed}</h6>
// // //               <Progress percent={consumedFatBreakfast} size="small" status="active" strokeColor="#00BFA6" />
// // //             </div>
// // //               <NutritionLunch 
// // //               post={post} dailyIntakeForUser={dailyIntakeForUser} 
// // //               breakfastIntake={totalscores} 
// // //               ProteinDailyNeed={ProteinDailyNeed} 
// // //               CarbsDailyNeed={CarbsDailyNeed} 
// // //               FatDailyNeed={FatDailyNeed} 
// // //               changeTotalData={totalData => setTotalData(totalData)}
// // //               changeProteinLunch={proteinLunch => setDailyConsumedProtein(proteinLunch)}
// // //               changeCarbsLunch={carbsLunch => setDailyConsumedCarbs(carbsLunch)}
// // //               changeFatLunch={fatLunch => setDailyConsumedFat(fatLunch)} />
// // //             </div>
// // //           </div>
// // //         </div> 
// // //     </div>
// // //   )
// // // }

// // // // }


// // // //ta kalorier som man fått i sig under alla måltider och skicka dem till ny schema och senare därifrån hämta den på en ny komponent och rendera den därifrån
// // // export default Nutrition;

// // // // if(showLunch === true) {
// // // //   return (<div>
    
// // // //     <Button onClick={showLun}>Breakfast</Button>
// // // //     <NutritionLunch dailyIntakeForUser={dailyIntakeForUser} breakfastIntake={totalscores} />
// // // //     </div>)

// // // // }else {


// // // {/* <div class="progress" style={{ height:'10px'}}>
// // //   <div class="progress-bar" role="progressbar" style={{ width:'1000px'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{100}%</div>
// // // </div> */}
// // // {/* <Button onClick={showLun}>Lunch</Button> */}
// // // {/* <Line percent={percentage} strokeWidth="1"  trailWidth="2" strokeColor="rgb(1, 160, 158)" strokeLinecap='round' gapDegree='150' gapPosition='value: top' /> */}
// // // {/* <Circle percent="50" strokeWidth="1" strokeColor="#D3D3D3" /> */}
// // // {/* <button onClick={fetchMore}>Next</button> */}

// // // {/* <h2>from lunch: {totalData}</h2> */}

// // //                 {/* <ProgressBar completed={percentage} width='1000px' height="20px" borderRadius='1px' labelSize="10px"bgcolor='rgb(1, 160, 158)'/>  */}
// // //   {/* {props.changeTotalData(totalData)}
// // //                       {props.changeDailyNutritionProtein(consumedTotalDailyProtein)}
// // //                       {props.changeDailyNutritionCarbs(consumedTotalDailyCarbs)}
// // //                       {props.changeDailyNutritionFat(consumedTotalDailyFat)} */}

// // // {/* <h2>Calories Left: {totalfinaly}</h2> */}
// // // {/* <h6>total protein: {ps}</h6> */}
// // // {/* {props.changeTword(consumedProteinLunch + totalProteins)}
// // // {props.changeCarbsBreakfast(consumedCarbsLunch + totalCarbss)}
// // // {props.changeFatBreakfast(consumedFatLunch + totalFats)} */}

// // //  {/* <Progress percent={100} size="small" /> */}
// // //                   {/* <h6>Daily Consumed Nutrition from breakfast + lunch + dinner + snack protein: {consumedTotalDailyProtein}  </h6>
// // //                   <h6>Daily Consumed Nutrition from breakfast + lunch + dinner + snack carbs: {consumedTotalDailyCarbs} </h6>
// // //                   <h6>Daily Consumed Nutrition from breakfast + lunch + dinner + snack fat: {consumedTotalDailyFat} </h6> */}
// // //                   {/* <h6>Daily Consumed Nutrition from Lunch all + breakfast all: {totalConsumedNutritionLunch} </h6> */}


// // //                   // const lunchScore = props.totalscoresLunch;
// // // // const getTotal = () => {
// // // //   setTest(totalfinaly);
// // // // } 
// // // // const dailyIntakeForUser = dailyIntakeprops - totalscores;