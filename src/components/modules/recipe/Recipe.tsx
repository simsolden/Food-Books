import React from 'react';
import classes from './styles/Recipe.module.css';

interface Props {
  title: string;
  description: string;
}

const Recipe: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={classes.recipe}>
      <img src="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg" alt="Tacos" />
      <div className={classes.recipeInfo}>
        <h2>{title}</h2>
        <div className={classes.rating}>
          <p className={classes.stars}>☆☆☆☆☆ </p>
          <p className={classes.score}>4,6/5 sur 105 votes</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Recipe;
