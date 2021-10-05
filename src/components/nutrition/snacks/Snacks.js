import { useQuery } from '@apollo/client';
import NUTRITION_QUERY from '../snacks/SnackQueries/SnackQuery';
import AddSnack from './SnacksAdd';
import SnacksInfo from './SnacksInfo';
import {React, useState, useEffect} from 'react'
import { gql, useMutation } from '@apollo/client';
// import TOTALCONSUMEDKCALS_QUERY from '../snacks/TotalConsumedKcalQuery';
import { Progress } from 'antd';

const ADD_TOTALCONSUMEDKCALS = gql`
mutation Addtotalconsumedkcals($totalKcal: Int){
  __typename
  createTotalConsumedKcal(data: {
    totalKcal: $totalKcal, 
    }) {
      id
    }
}
`;

function Snacks (props) {
    console.log(props);
    const [snacks, setSnacks] = useState([]);
    const [createTotalConsumedKcal] = useMutation(ADD_TOTALCONSUMEDKCALS);
    const { loading, error, data } = useQuery(NUTRITION_QUERY);
  
    const getDatas = () => {
      if(loading) 
          return <p>Loading snacks...</p>
      if(error)
          return <p>Error...</p>
      if(data) {
          setSnacks(data.snacks);
          console.log(data);
      }
    } 
    
  const propsfromnutrition = props.dailyIntake;
  const totalscoresSnacks = snacks.reduce((a,v) =>  a = a + v.totalCalories , 0 );
  const breakfastLunchDinnerSnacks = propsfromnutrition + totalscoresSnacks;
  const dailyIntakeForUser = props.dailyIntakeForUser;
  let totalKcals = breakfastLunchDinnerSnacks;
   
  let addTotalConsumedKcals = () => {
    createTotalConsumedKcal({variables: {totalKcal: totalKcals}})
  }

  useEffect(() => {
    getDatas();
  })
    
const datafromallmeals = props.snackprops;
const allmeals = datafromallmeals + totalscoresSnacks;

//Total nutrition per snacks
const totalProtein = snacks.reduce((a,v) =>  a = a + v.protein , 0 );
const totalCarbs = snacks.reduce((a,v) =>  a = a + v.carbs , 0 );
const totalFat = snacks.reduce((a,v) =>  a = a + v.fat , 0 );

//Total nutrition per snacks in percent
const ProteinDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 4);
const CarbsDailyNeed =  Math.round(dailyIntakeForUser  * 0.4 / 4);
const FatDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 9);
const consumedProteinSnack = Math.round(totalProtein / ProteinDailyNeed * 100);
const consumedCarbsSnack = Math.round(totalCarbs / CarbsDailyNeed * 100);
const consumedFatSnack = Math.round(totalFat / FatDailyNeed * 100);

const consumedSnackCalories = Math.round(totalscoresSnacks / dailyIntakeForUser * 100);

{props.changesWord(allmeals)}
{props.changeProteinSnack(totalProtein)}
{props.changeCarbsSnack(totalCarbs)}
{props.changeFatSnack(totalFat)}

  return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="breakfast">
              <h3 className='title'>Snacks</h3>  
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Food</th>
                  <th scope="col">Protein</th>
                  <th scope="col">Carbs</th>
                  <th scope="col">Fat</th>
                  <th scope="col">Total Calorie Intake</th>
                  <th scope="col"><AddSnack/></th>
                </tr>
              </thead>
              <tbody>
                  {snacks.map(snack => <SnacksInfo key={snack.id} snack={snack} />)}   
              </tbody>
            </table>
            <div style={{ width: 870 }}>
              <h6>Daily cosumed calories {totalscoresSnacks} / {dailyIntakeForUser}</h6>
              <Progress percent={consumedSnackCalories} size="small"  strokeColor="#00BFA6" />
              <h6>Daily Protein Intake {totalProtein} / {ProteinDailyNeed}</h6>
              <Progress percent={consumedProteinSnack} size="small"  strokeColor="#00BFA6" />
              <h6>Daily Carbs Intake {totalCarbs} / {CarbsDailyNeed}</h6>
              <Progress percent={consumedCarbsSnack} size="small"  strokeColor="#00BFA6" />
              <h6>Daily Fat Intake {totalFat} / {FatDailyNeed}</h6>
              <Progress percent={consumedFatSnack} size="small"  strokeColor="#00BFA6" />
            </div> 
          </div>
        </div>
      </div>
    )
}
    
export default Snacks;