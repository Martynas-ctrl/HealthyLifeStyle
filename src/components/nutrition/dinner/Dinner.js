import { React, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Progress } from 'antd';
import DinnerInfo from './DinnerInfo';
import AddDinner from '../dinner/DinnerAdd';
import NUTRITION_QUERY from '../dinner/dinnerQueries/DinnerQuery';
import '../lunch/CssLunch.css/lunchButton.css';

function Dinner (props) {

    const [dinners, setDinners] = useState([]);
    const { loading, error, data } = useQuery(NUTRITION_QUERY);

    const getDatas = () => {
      if(loading) 
          return <p>Loading dinner...</p>
      if(error)
          return <p>Error...</p>
      if(data) {
          setDinners(data.dinners);
      }
    } 

    const dailyIntake = props.breakfastlunch;
    const totalscoresDinner = dinners.reduce((a,v) =>  a = a + v.totalCalories , 0 );
    const breakfastLunchDinner = dailyIntake + totalscoresDinner;
    const dailyIntakeForUser = props.dailyIntakeForUser;

    //Total nutrition per breakfast
    const totalProtein = dinners.reduce((a,v) =>  a = a + v.protein , 0 );
    const totalCarbs = dinners.reduce((a,v) =>  a = a + v.carbs , 0 );
    const totalFat = dinners.reduce((a,v) =>  a = a + v.fat , 0 );

    //Total nutrition per breakfast in percent
    const ProteinDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 4);
    const CarbsDailyNeed =  Math.round(dailyIntakeForUser  * 0.4 / 4);
    const FatDailyNeed =  Math.round(dailyIntakeForUser  * 0.3 / 9);
    const consumedProteinDinner = Math.round(totalProtein / ProteinDailyNeed * 100);
    const consumedCarbsDinner = Math.round(totalCarbs / CarbsDailyNeed * 100);
    const consumedFatDinner = Math.round(totalFat / FatDailyNeed * 100);

    const consumedDinnerCalories = Math.round(totalscoresDinner / dailyIntakeForUser * 100);

    {props.changeProteinDinner(totalProtein)}
    {props.changeCarbsDinner(totalCarbs)}
    {props.changeFatDinner(totalFat)} 
    {props.changeTotalDataz(breakfastLunchDinner)}

    useEffect(() => {
      getDatas();
    })

    return (
        <div className="container mt-4">   
          <div className="row">
            <div className="breakfast">
              <h3 className='title'>Dinner</h3>  
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Food</th>
                  <th scope="col">Protein</th>
                  <th scope="col">Carbs</th>
                  <th scope="col">Fat</th>
                  <th scope="col">Total Calorie Intake</th>
                  <th scope="col"><AddDinner/></th>
                </tr>
              </thead>
              <tbody>
                  {dinners.map(dinner => <DinnerInfo key={dinner.id} dinner={dinner} />)}   
              </tbody>
            </table>
          </div>
          <div style={{ width: 870 }}>
            <h6>Daily cosumed calories {totalscoresDinner} / {dailyIntakeForUser}</h6>
            <Progress percent={consumedDinnerCalories} size="small" status="active" strokeColor="#00BFA6" />
            <h6>Daily Protein Intake {totalProtein} / {ProteinDailyNeed}</h6>
            <Progress percent={consumedProteinDinner} size="small" status="active" strokeColor="#00BFA6" />
            <h6>Daily Carbs Intake {totalCarbs} / {CarbsDailyNeed}</h6>
            <Progress percent={consumedCarbsDinner} size="small" status="active" strokeColor="#00BFA6" />
            <h6>Daily Fat Intake {totalFat} / {FatDailyNeed}</h6>
            <Progress percent={consumedFatDinner} size="small" status="active" strokeColor="#00BFA6" />
          </div>
        </div> 
      )
  }
    
export default Dinner;