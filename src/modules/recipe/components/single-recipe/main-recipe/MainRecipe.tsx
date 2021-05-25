import React, { useState } from 'react';
import { Recipe } from '../../../../../common';
import { getIngredientText } from '../../../utils/format';
import HelpIcon from '@material-ui/icons/Help';
import classes from './MainRecipe.module.css';

interface Props {
  recipe: Recipe;
  servings: number;
}

const MainRecipe: React.FC<Props> = ({ recipe, servings }) => {
  const [showHelp, setShowHelp] = useState(false);

  const toggleClass = (index: string) => {
    let element = document.getElementById(index);
    element!.classList.toggle('done');
  };

  const ingredients = recipe.ingredients.map((ingredient, index) => (
    <p id={'ingredient' + index} key={index} onClick={() => toggleClass('ingredient' + index)}>
      {getIngredientText(ingredient, servings, recipe.servings)}
    </p>
  ));

  const prepSteps = recipe.prepSteps.map((prepStep, index) => (
    <div
      key={index}
      className={classes.singlePrepStep}
      id={'prepStep' + index}
      onClick={() => toggleClass('prepStep' + index)}
    >
      <span className={classes.prepStepNumber}>{index + 1}</span>
      <p className={classes.prepStepDescription}>{prepStep}</p>
    </div>
  ));

  return (
    <>
      <div
        className={classes.ingredientsHeader}
        onClick={() => {
          setShowHelp(!showHelp);
        }}
      >
        <h2>Ingrédients</h2>
        <div className={classes.helpIcon}>
          <HelpIcon onMouseEnter={() => setShowHelp(true)} onMouseLeave={() => setShowHelp(false)} />
        </div>
        <p className={showHelp ? classes.show : classes.hide}>
          Cliquez sur un ingrédient ou une étape quand vous n'en avez plus besoin !
        </p>
      </div>
      <div className={classes.ingredients}>{ingredients}</div>
      <h2>Préparation </h2>
      <div className={classes.prepSteps}>{prepSteps}</div>
    </>
  );
};

export default MainRecipe;
