import React from 'react';
import { Recipe } from '../../../../../../common';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import classes from '../RecipeItem.module.css';

interface Props {
  recipe: Recipe;
}

const RecipeStars: React.FC<Props> = ({ recipe }) => {
  const stars: JSX.Element[] = [];

  for (let i = 1; i <= 5; i++) {
    if (recipe.grade >= i) {
      stars.push(<StarIcon key={i} fontSize="small" style={{ color: '#CD8282', margin: 0 }} />);
    } else {
      if (recipe.grade === i - 0.5) {
        stars.push(<StarHalfIcon key={i} fontSize="small" style={{ color: '#CD8282', margin: 0 }} />);
      } else {
        stars.push(<StarOutlineIcon key={i} fontSize="small" style={{ color: '#CD8282', margin: 0 }} />);
      }
    }
  }
  return <p className={classes.stars}>{stars}</p>;
};

export default RecipeStars;
