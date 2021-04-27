import React from 'react';
import RecipesList from '../../modules/recipe/recipes-list/components/RecipesList';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import classes from './styles/Recipes.module.css';
import SearchBar from '../../components/common/searchBar/SearchBar';

interface Props {}

const Recipes: React.FC<Props> = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.recipes}>
        <div className={classes.top}>
          <button className={classes.addRecipe} type="button">
            Ajouter une recette <LibraryBooksIcon style={{ verticalAlign: 'top' }} fontSize="small" />
          </button>

          <div>
            <SearchBar
              onSubmit={(input) => {
                alert(`Search: ${input}`);
              }}
            />
          </div>
        </div>
        <RecipesList />
      </div>
    </div>
  );
};

export default Recipes;
