import React from 'react';
import CardRecipeItem from '../card-recipe-item/CardRecipeItem';
import classes from './PlanningCard.module.css'

interface Props {}

const PlanningCard: React.FC<Props> = (props) => {
  return (
    <div className={classes.card}>
      <h3>Jour de la semaine</h3>
      <CardRecipeItem />
      <CardRecipeItem />
      <CardRecipeItem />
    </div>
  );
};

export default PlanningCard;
