import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../../../../common/RouteParams';
import { RecipeFactory } from '../../factories/RecipeFactory';
import { getIngredientText } from '../../utility/format';

import classes from './SingleRecipe.module.css';
import RecipeMeta from './recipe-meta/RecipeMeta';
import MainRecipe from './main-recipe/MainRecipe';

interface Props {
  isUserRecipe: boolean;
}

const SingleRecipe: React.FC<Props> = (props) => {
  const { recipeSlug } = useParams<RouteParams>();
  const recipe = RecipeFactory.createMock();
  let [servings, setServings] = useState(recipe.servings);

  return (
    <div className={classes.singleRecipe}>
      <h1>{recipe.name}</h1>
      <RecipeMeta
        recipe={recipe}
        servings={servings}
        addServing={() => {
          setServings((prevServings) => ++prevServings);
        }}
        removeServing={() => {
          setServings((prevServings) => --prevServings);
        }}
      />
      <hr style={{ marginTop: '2rem', width: '90%', color: '#050505ff' }} />

      <div className={classes.description}>
        <p>{recipe.description}</p>
      </div>
      <hr style={{ width: '90%', color: '#050505ff' }} />
      <MainRecipe recipe={recipe} servings={servings} />
    </div>
  );
};

export default SingleRecipe;
