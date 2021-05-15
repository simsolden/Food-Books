import { CalendarViewDay } from '@material-ui/icons';
import React from 'react';
import CardRecipeItem from '../card-recipe-item/CardRecipeItem';
import classes from './PlanningCard.module.css';

interface Props {
  day: Date;
}

const PlanningCard: React.FC<Props> = ({ day }) => {
  const weekday = day.toLocaleDateString(undefined, { weekday: 'long' });
  const capitalizedDay = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  return (
    <div className={classes.card}>
      <h3>{capitalizedDay}</h3>
      <CardRecipeItem />
      <CardRecipeItem />
      <CardRecipeItem />
    </div>
  );
};

export default PlanningCard;
