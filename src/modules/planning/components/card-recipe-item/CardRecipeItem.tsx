import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../../../../common';
import { IMAGE_SOURCE } from '../../../../common/config';
import classes from './CardRecipeItem.module.css';

interface Props {
  recipe: Recipe;
  date: Date;
}

const CardRecipeItem: React.FC<Props> = ({ recipe, date }) => {
  const destination = recipe.owner === localStorage.getItem('user') ? 'mes-recettes' : 'decouvrir';
  const slug = `${destination}/${recipe.title.toLocaleLowerCase().split(' ').join('-')}_${recipe._id}`;
  const timeOfDay = `${('0' + new Date(date).getHours()).slice(-2)}h${('0' + new Date(date).getMinutes()).slice(-2)} :`;

  return (
    <div className={classes.recipeItem}>
      <Link to={slug} className={classes.link}>
        <img className={classes.recipeImg} src={IMAGE_SOURCE + recipe.pictures[0]} alt="recette" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ margin: '0.75rem 0.5rem 0' }}>{timeOfDay}</p>
          <p className={classes.recipeTitle}>{recipe.title}</p>
        </div>
      </Link>
      <button
        title="Modifier la date"
        className={classes.actionButton}
        onClick={() => {
          alert('do something');
        }}
      >
        ...
      </button>
    </div>
  );
};

export default CardRecipeItem;
