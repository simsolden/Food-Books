import React from 'react';
import classes from './RecipeItem.module.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import TodayIcon from '@material-ui/icons/Today';
import EditIcon from '@material-ui/icons/Edit';
import { useRouteMatch } from 'react-router-dom';

interface Props {
  isUserRecipe?: boolean;
  title: string;
  description: string;
  ingredientsList: string;
}

const RecipeItem: React.FC<Props> = ({ title, description, ingredientsList, isUserRecipe }) => {
  const match = useRouteMatch();

  return (
    <div className={classes.recipe}>
      <a href="#">
        <img src="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg" alt="Tacos" />
      </a>
      <div className={classes.recipeInfo}>
        <div className={classes.firstRow}>
          <a className={classes.title} href="#">
            <h2>{title}</h2>
          </a>
          {isUserRecipe && (
            <div className={classes.actionButtons}>
              <button title="Ajouter au calendrier" onClick={() => alert('add to calendar')}>
                <TodayIcon fontSize="large" />
              </button>
              <button title="Modifier la recette" onClick={() => alert(`edit ${match.path + title}`)}>
                <EditIcon fontSize="large" />
              </button>
            </div>
          )}
        </div>
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
        <div className={classes.extraInfo}>
          <p>{description}</p>
          <p>Ingrédients: {ingredientsList}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
