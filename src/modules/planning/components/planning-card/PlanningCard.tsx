import React from 'react';
import { PlanningRecipe } from '../../../../common';
import CardRecipeItem from '../card-recipe-item/CardRecipeItem';
import classes from './PlanningCard.module.css';

interface Props {
  day: Date;
  recipes: PlanningRecipe[];
}

const PlanningCard: React.FC<Props> = ({ day, recipes }) => {
  const weekday = day.toLocaleDateString(undefined, { weekday: 'long' });
  const capitalizedDay = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  let cardRecipes: any = [];
  if (recipes) {
    cardRecipes = recipes
      .filter((planningRecipe: PlanningRecipe) => {
        return new Date(planningRecipe.date).getDate() === day.getDate();
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  const cardItems = cardRecipes.map((planningReicpe: PlanningRecipe, index: number) => (
    <CardRecipeItem key={index} recipe={planningReicpe.recipe} date={planningReicpe.date} />
  ));

  return (
    <div className={classes.card}>
      <h3>{capitalizedDay}</h3>
      {cardItems}
    </div>
  );
};

export default PlanningCard;
