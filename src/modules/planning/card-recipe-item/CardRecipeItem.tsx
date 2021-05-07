import React from 'react';
import classes from './CardRecipeItem.module.css'

interface Props {}

const CardRecipeItem: React.FC<Props> = (props) => {
  return (
    <div className={classes.recipeItem}>
      <img className={classes.recipeImg} src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" alt="recette" />
      <p className={classes.recipeTitle}>Titre de la recette</p>
      <button title="Modifier la date" className={classes.actionButton} onClick={() => {alert('do something')}}>...</button>
    </div>
  );
};

export default CardRecipeItem;
