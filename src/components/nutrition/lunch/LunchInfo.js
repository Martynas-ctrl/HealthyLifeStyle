import React from 'react';
import { useMutation } from '@apollo/client';
import { Button } from 'react-bootstrap';
import UpdateLunch from './LunchUpdate';
import DELETE_LUNCH from './LunchQueries/DeleteLunchQuery';
import NUTRITION_QUERY from './LunchQueries/LunchQuery';

function Nutritionlunchinfo(props) {

  const [deleteNutrition] = useMutation(DELETE_LUNCH); 

  const removeLunch = (id) => {

    const updateCache = (client) => {
      const data = client.readQuery({
        query: NUTRITION_QUERY,
      });
      const newData = {
        nutritionLunches: data.nutritionLunches.filter((product) => product.id !== props.nutrition.id)
      }
      client.writeQuery({
        query: NUTRITION_QUERY,
        data: newData
      });
    }
    deleteNutrition({variables: {id: id},
    update: updateCache
    });
    // window.location.reload();
  }

  return (
      <tr>
        <td>{props.nutrition.foodName}</td>
        <td>{props.nutrition.protein}</td>
        <td>{props.nutrition.carbs}</td>
        <td>{props.nutrition.fat}</td>
        <td>{props.nutrition.totalCalories}</td>
        <td>
          <div id="button_nutrition" class="btn-group">
            <button id="button_nutrition" class="btn bmd-btn-fab bmd-btn-fab-sm dropdown-toggle" type="button" id="ex3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i id="i_Nutrition" class="material-icons">more_vert</i>
            </button>
            <div class="dropdown-menu  dropdown-menu-bottom" aria-labelledby="ex3">
              <UpdateLunch id={props.nutrition.id} />
              <Button className="btn" onClick={() => removeLunch(props.nutrition.id)}><i className="fa fa-trash"></i>Delete</Button>
            </div>
          </div>
        </td>
      </tr>
    );
}

export default Nutritionlunchinfo;