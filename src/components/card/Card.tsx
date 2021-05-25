import React from 'react';
import { Recipe } from '../../common';
import { IMAGE_SOURCE } from '../../common/config';
import classes from './card.module.css';

interface Props {
  recipe: Recipe;
}

const Card: React.FC<Props> = ({ recipe }) => {
  const modalClasses = [classes.card];
  modalClasses.push(classes.lastRecipe);

  return (
    <div className={modalClasses.join(' ')}>
      <img src={IMAGE_SOURCE + recipe.pictures[0]} alt={recipe.title} />
      <p>{recipe.title}</p>
    </div>
  );
};

export default Card;
