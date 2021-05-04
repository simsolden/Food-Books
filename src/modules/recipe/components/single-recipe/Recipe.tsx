import React from 'react';
import classes from './styles/Recipe.module.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

interface Props {
  title: string;
  description: string;
  ingredientsList: string;
}

const Recipe: React.FC<Props> = ({ title, description, ingredientsList }) => {
  return (
    <div className={classes.recipe}>
      <a href="#">
        <img src="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg" alt="Tacos" />
      </a>
      <div className={classes.recipeInfo}>
        <a href="#">
          <h2>{title}</h2>
        </a>
        <div className={classes.rating}>
          <p className={classes.stars}>
            <StarIcon fontSize="small" style={{ color: '#CD8282', margin: 0 }} />
            <StarIcon fontSize="small" style={{ color: '#CD8282', margin: 0 }} />
            <StarIcon fontSize="small" style={{ color: '#CD8282', margin: 0 }} />
            <StarIcon fontSize="small" style={{ color: '#CD8282', margin: 0 }} />
            <StarHalfIcon fontSize="small" style={{ color: '#CD8282' }} />
          </p>
          <p className={classes.score}>4,6/5 sur 105 votes</p>
        </div>
        <p>{description}</p>
        <p>Ingrédients: {ingredientsList}</p>
      </div>
    </div>
  );
};

export default Recipe;
