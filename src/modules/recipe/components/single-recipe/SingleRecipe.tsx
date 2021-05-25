import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeRouteParams } from '../../../../common/RouteParams';
import RecipeMeta from './recipe-meta/RecipeMeta';
import MainRecipe from './main-recipe/MainRecipe';
import { useRematchDispatch } from '../../../../hooks/useRematchDispatch';
import { Dispatch, RootState } from '../../../../store';
import { useSelector } from 'react-redux';
import classes from './SingleRecipe.module.css';

interface Props {
  isUserRecipe: boolean;
}

const SingleRecipe: React.FC<Props> = (props) => {
  const { recipeSlug } = useParams<RecipeRouteParams>();
  const id = recipeSlug.split('_')[1];

  const fetchedRecipe = useSelector((state: RootState) => state.recipe.singleRecipe);
  const { fetchOneRecipe } = useRematchDispatch((dispatch: Dispatch) => ({
    fetchOneRecipe: dispatch.recipe.fetchOneRecipe,
  }));

  useEffect(() => {
    fetchOneRecipe(id);
  }, [fetchOneRecipe, id]);

  const recipe = fetchedRecipe;
  let [servings, setServings] = useState(recipe.servings);

  return (
    <div className={classes.singleRecipe}>
      <h1>{recipe.title}</h1>
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
      <hr className={classes.hrOne} />

      <div className={classes.description}>
        <p>{recipe.description}</p>
      </div>
      <hr className={classes.hrTwo} />
      <MainRecipe recipe={recipe} servings={servings} />
      <p className={classes.recipeCreator}>
        Merci à <strong>{recipe.username}</strong> pour la délicieuse recette !
      </p>
    </div>
  );
};

export default SingleRecipe;
