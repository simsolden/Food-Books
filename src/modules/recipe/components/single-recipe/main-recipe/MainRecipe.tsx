import React from 'react';
import { Recipe } from '../../../../../common';
import { getIngredientText } from '../../../utility/format';
import classes from './MainRecipe.module.css';

interface Props {
  recipe: Recipe;
  servings: number;
}

const MainRecipe: React.FC<Props> = ({ recipe, servings }) => {
  const ingredients = recipe.ingredients.map((ingredient, index) => (
    <p key={index}>{getIngredientText(ingredient, servings, recipe.servings)}</p>
  ));

  const prepSteps = recipe.prepSteps.map((prepStep, index) => (
    <div key={index} className={classes.singlePrepStep}>
      <span className={classes.prepStepNumber}>{index + 1}</span>
      <p className={classes.prepStepDescription}>{prepStep}</p>
    </div>
  ));

  return (
    <>
      <h2>Ingrédients</h2>
      <div className={classes.ingredients}>{ingredients}</div>
      <h2>Préparation</h2>
      <div className={classes.prepSteps}>{prepSteps}</div>
    </>
  );
};

export default MainRecipe;
