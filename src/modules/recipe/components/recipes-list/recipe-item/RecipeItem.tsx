import React from 'react';
import classes from './RecipeItem.module.css';

import TodayIcon from '@material-ui/icons/Today';
import EditIcon from '@material-ui/icons/Edit';
import { Link, useRouteMatch } from 'react-router-dom';
import { Recipe } from '../../../../../common';
import { IMAGE_SOURCE } from '../../../../../common/config';
import { useModalState } from '../../../../../hooks/useModal';
import Modal from '../../../../../components/modal/Modal';
import RecipeStars from './recipe-stars/RecipeStars';
import AddRecipeModal from '../../../../planning/components/add-recipe-modal/AddRecipeModal';
import { useRematchDispatch } from '../../../../../hooks/useRematchDispatch';
import { Dispatch } from '../../../../../store';

interface Props {
  isUserRecipe?: boolean;
  recipe: Recipe;
}

const RecipeItem: React.FC<Props> = ({ recipe, isUserRecipe }) => {
  const addPlanningRecipe = useRematchDispatch((dispatch: Dispatch) => dispatch.planning.addPlanningRecipe);
  const { isOpen, onClose, onOpen } = useModalState();
  const match = useRouteMatch();
  const slug = `${match.url}/${recipe.title.toLocaleLowerCase().split(' ').join('-')}_${recipe._id}`;
  const ingredientsList =
    recipe.ingredients
      .slice(0, 6)
      .map((ingredient) => ingredient.name)
      .join(', ')
      .trim() + ', ...';

  const onSave = async (date: Date) => {
    // @ts-ignore
    const success = await addPlanningRecipe({ planningRecipe: { recipeId: recipe._id, date } });
    setTimeout(onClose, 2500);
    return success;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <AddRecipeModal onClose={onClose} onSave={onSave} />
      </Modal>
      <div className={classes.recipe}>
        <Link to={slug}>
          <img src={IMAGE_SOURCE + recipe.pictures[0]} alt={recipe.title} />
        </Link>
        <div className={classes.recipeInfo}>
          <div className={classes.firstRow}>
            <Link className={classes.title} to={slug}>
              <h2>{recipe.title}</h2>
            </Link>
            <div className={classes.actionButtons}>
              <button title="Ajouter au calendrier" onClick={onOpen}>
                <TodayIcon fontSize="large" />
              </button>
              {isUserRecipe && (
                <button title="Modifier la recette" onClick={() => alert(`edit ${match.path + recipe.title}`)}>
                  <EditIcon fontSize="large" />
                </button>
              )}
            </div>
          </div>
          <div className={classes.rating}>
            <RecipeStars recipe={recipe} />
            <p className={classes.score}>{recipe.grade}/5</p>
          </div>
          <div className={classes.extraInfo}>
            <p>{recipe.description}</p>
            <p>Ingrédients: {ingredientsList}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeItem;
