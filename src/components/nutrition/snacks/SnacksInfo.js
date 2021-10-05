import React from 'react';
import { useMutation } from '@apollo/client';
import { Button } from 'react-bootstrap';
import UpdateSnacks from './SnacksUpdate';
import DELETE_LUNCH from './SnackQueries/DeleteSnackQuery';
import NUTRITION_QUERY from './SnackQueries/SnackQuery';

function SnacksInfo(props) {

  const [deleteSnack] = useMutation(DELETE_LUNCH); 

  const removeSnack = (id) => {

    const updateCache = (client) => {
      const data = client.readQuery({
        query: NUTRITION_QUERY,
      });
      const newData = {
        snacks: data.snacks.filter((product) => product.id !== props.snack.id)
      }
      client.writeQuery({
        query: NUTRITION_QUERY,
        data: newData
      });
    }

    deleteSnack({variables: {id: id},
    update: updateCache
    });
    // window.location.reload();
  }

  return (
        <tr>
          <td>{props.snack.foodName}</td>
          <td>{props.snack.protein}</td>
          <td>{props.snack.carbs}</td>
          <td>{props.snack.fat}</td>
          <td>{props.snack.totalCalories}</td>
          <td>
            <div id="button_nutrition" class="btn-group">
              <button id="button_nutrition" class="btn bmd-btn-fab bmd-btn-fab-sm dropdown-toggle" type="button" id="ex3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i id="i_Nutrition" class="material-icons">more_vert</i>
              </button>
              <div class="dropdown-menu  dropdown-menu-bottom" aria-labelledby="ex3">
                <UpdateSnacks id={props.snack.id} />
                <Button className="btn" onClick={() => removeSnack(props.snack.id)}><i className="fa fa-trash"></i>Delete</Button>
              </div>
            </div>
          </td>
        </tr>
  );
}

export default SnacksInfo;