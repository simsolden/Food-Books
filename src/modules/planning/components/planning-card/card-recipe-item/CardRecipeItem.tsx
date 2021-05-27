import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlanningRecipe, Recipe } from '../../../../../common';
import { IMAGE_SOURCE } from '../../../../../common/config';
import Modal from '../../../../../components/modal/Modal';
import { useModalState } from '../../../../../hooks/useModal';
import { useRematchDispatch } from '../../../../../hooks/useRematchDispatch';
import { Dispatch, RootState } from '../../../../../store';
import UpdateRecipeModal from '../../update-recipe-modal/UpdateRecipeModal';
import classes from './CardRecipeItem.module.css';

interface Props {
  recipe: Recipe;
  date: Date;
}

const CardRecipeItem: React.FC<Props> = ({ recipe, date }) => {
  const updatePlanning = useRematchDispatch((disptach: Dispatch) => disptach.planning.updatePlanning);
  const planning = useSelector((state: RootState) => state.planning.planning);
  const { isOpen, onClose, onOpen } = useModalState();
  const destination = recipe.owner === localStorage.getItem('user') ? 'mes-recettes' : 'decouvrir';
  const slug = `${destination}/${recipe.title.toLocaleLowerCase().split(' ').join('-')}_${recipe._id}`;
  const timeOfDay = `${('0' + new Date(date).getHours()).slice(-2)}h${('0' + new Date(date).getMinutes()).slice(-2)} :`;

  const onSave = (updatedDate: Date) => {
    let updated = false;
    const updatedPlanning = planning.map((planningRecipe: PlanningRecipe) => {
      const updatedRecipe = planningRecipe;

      if (planningRecipe.date === date && planningRecipe.recipe === recipe && !updated) {
        updatedRecipe.date = updatedDate;
        updated = true;
      }

      return updatedRecipe;
    });

    updatePlanning(updatedPlanning);
    setTimeout(onClose, 1500);
  };

  const onDelete = () => {
    let updated = false;

    const updatedPlanning = planning.filter((planningRecipe: PlanningRecipe) => {
      if ((planningRecipe.date !== date && planningRecipe.recipe !== recipe) || updated) {
        return true;
      } else {
        updated = true;
        return false;
      }
    });

    updatePlanning(updatedPlanning);
    setTimeout(onClose, 1500);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <UpdateRecipeModal onClose={onClose} onSave={onSave} onDelete={onDelete} recipeDate={date} />
      </Modal>
      <div className={classes.recipeItem}>
        <Link to={slug} className={classes.link}>
          <img className={classes.recipeImg} src={IMAGE_SOURCE + recipe.pictures[0]} alt="recette" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ margin: '0.75rem 0.5rem 0' }}>{timeOfDay}</p>
            <p className={classes.recipeTitle}>{recipe.title}</p>
          </div>
        </Link>
        <button title="Modifier la date" className={classes.actionButton} onClick={onOpen}>
          ...
        </button>
      </div>
    </>
  );
};

export default CardRecipeItem;
