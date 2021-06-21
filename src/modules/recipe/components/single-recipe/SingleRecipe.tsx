import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import PrintIcon from '@material-ui/icons/Print';
import { RecipeRouteParams } from '../../../../common/RouteParams';
import RecipeMeta from './recipe-meta/RecipeMeta';
import MainRecipe from './main-recipe/MainRecipe';
import { useRematchDispatch } from '../../../../hooks/useRematchDispatch';
import { Dispatch, RootState } from '../../../../store';
import classes from './SingleRecipe.module.css';

interface Props {
  isUserRecipe: boolean;
}

const SingleRecipe: React.FC<Props> = () => {
  const componentRef = useRef<HTMLDivElement>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
  });

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
    <>
      {/* @ts-ignore */}
      <div className={classes.singleRecipe} ref={componentRef}>
        <div className={classes.header}>
          <h1>{recipe.title}</h1>
          <button className={classes.printButton} onClick={handlePrint}>
            <PrintIcon className={classes.printIcon} />
            <p>Imprimer</p>
          </button>
        </div>
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
    </>
  );
};

export default SingleRecipe;
