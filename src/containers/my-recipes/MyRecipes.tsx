import React from 'react';
import RecipesList from '../../modules/recipe/components/recipes-list/RecipesList';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import classes from './styles/MyRecipes.module.css';
import SearchBar from '../../components/searchBar/SearchBar';

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
        <RecipesList isMine />
      </div>
    </div>
  );
};

export default Recipes;
