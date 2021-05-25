import React from 'react';
import { Recipe } from '../../../../../common';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import difficultyGrey from '../../../../../assets/difficulty-grey.png';
import difficultyPink from '../../../../../assets/difficulty-pink.png';
import { IconButton } from '@material-ui/core';

import classes from './RecipeMeta.module.css';
import { getFullTime } from '../../../utils/format';
import { enumsMap } from '../../../utils/constants';
import { IMAGE_SOURCE } from '../../../../../common/config';

interface Props {
  servings: number;
  recipe: Recipe;
  addServing: () => void;
  removeServing: () => void;
}

const RecipeMeta: React.FC<Props> = ({ recipe, addServing, removeServing, servings }) => {
  let difficulty: JSX.Element[] = [];

  for (let i = 0; i < 3; i++) {
    if (enumsMap.get('difficulty')!.indexOf(recipe.difficulty) > i) {
      difficulty.push(
        <img
          key={i}
          src={difficultyPink}
          alt="logo difficulté rose"
          style={{ height: '2rem', width: 'auto', objectFit: 'cover' }}
        />
      );
    } else {
      difficulty.push(
        <img
          key={i}
          src={difficultyGrey}
          alt="logo difficulté gris"
          style={{ height: '2rem', width: 'auto', objectFit: 'cover' }}
        />
      );
    }
  }

  let cost: JSX.Element[] = [];

  for (let i = 0; i < 3; i++) {
    if (enumsMap.get('cost')!.indexOf(recipe.cost) > i) {
      cost.push(
        <AttachMoneyIcon key={i} style={{ fontSize: '2rem', color: 'rgb(210, 125, 125)', margin: '0 -0.3rem' }} />
      );
    } else {
      cost.push(
        <AttachMoneyIcon key={i} style={{ fontSize: '2rem', color: 'rgb(146, 133, 133, 0.5)', margin: '0 -0.3rem' }} />
      );
    }
  }
  return (
    <div className={classes.recipeMeta}>
      <img src={IMAGE_SOURCE + recipe.pictures[0]} alt={recipe.title} />
      <div className={classes.extraInfo}>
        <div className={classes.prepTime}>
          <p>Temps de préparation : </p>
          <p>
            <strong> {getFullTime(recipe.prepTime)} </strong>
          </p>
        </div>
        <div className={classes.cookingTime}>
          <p>Temps de cuisson : </p>
          <p>
            <strong> {getFullTime(recipe.cookingTime)} </strong>
          </p>
        </div>
        <div className={classes.difficulty}>
          <p>Difficulté : </p>
          <div className={classes.difficultyLogos}>{difficulty}</div>
        </div>
        <div className={classes.cost}>
          <p>Coût : </p>
          <div className={classes.costLogos}>{cost}</div>
        </div>
        <div className={classes.cost}>
          <p>Nombre de portions : </p>
          <div className={classes.costLogos}>
            <IconButton
              aria-label="lower servings"
              component="span"
              style={{ marginLeft: '-0.25rem', padding: '0.5rem' }}
              onClick={removeServing}
              title="Diminuer le nombre de portion"
            >
              <RemoveIcon />
            </IconButton>
            {servings}
            <IconButton
              aria-label="add serving"
              component="span"
              style={{ marginRight: '-0.25rem', padding: '0.5rem' }}
              onClick={addServing}
              title="Augmenter le nombre de portion"
            >
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeMeta;
