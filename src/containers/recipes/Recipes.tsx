import React from 'react';
import RecipesList from '../../components/modules/recipe/recipesList/RecipesList';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import classes from './styles/Recipes.module.css';

interface Props {}

const Recipes: React.FC<Props> = (props) => {
  return (
    <div className={classes.recipes}>
      <div className={classes.top}>
        <button className={classes.addRecipe} type="button">
          Ajouter une recette <LibraryBooksIcon style={{ verticalAlign: 'top' }} fontSize="small" />
        </button>

        <div>
          <p>Search bar</p>
        </div>
      </div>
      <RecipesList />
    </div>
  );
};

export default Recipes;
