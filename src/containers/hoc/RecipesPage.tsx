import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import RecipesList from '../../modules/recipe/components/recipes-list/RecipesList';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchBar from '../../components/inputs/search-bar/SearchBar';
import SortSelect from '../../modules/recipe/components/recipes-list/sort-select/SortSelect';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import classes from './RecipesPage.module.css';
import { Recipe } from '../../common/index.d';

interface Props {
  isUserRecipes: boolean;
  recipes: Recipe[];
  onSearch: (text: string) => void;
}

const RecipesPage: React.FC<Props> = ({ isUserRecipes, recipes, onSearch }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const match = useRouteMatch();

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerOpenHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  const searchBarClass = isUserRecipes ? classes.searchBar : classes.fullSearchBar;
  const recipesClass = isUserRecipes ? [classes.recipes, classes.userRecipes] : [classes.recipes];

  return (
    <div className={recipesClass.join(' ')}>
      <div className={classes.top}>
        {isUserRecipes && (
          <Link to={`${match.url}/ajouter`}>
            <button className={classes.addRecipe} type="button" title="Ajouter une recette">
              Ajouter une recette <LibraryBooksIcon style={{ verticalAlign: 'top' }} fontSize="small" />
            </button>
          </Link>
        )}
        <div className={searchBarClass}>
          <SearchBar onSubmit={onSearch} />
        </div>
      </div>
      <div className={classes.middle}>
        <SortSelect />
        <button className={classes.filterIcon} title="Filtrer les recettes" onClick={sideDrawerOpenHandler}>
          <TuneOutlinedIcon fontSize="large" />
        </button>
      </div>
      <RecipesList
        recipes={recipes}
        userRecipes={isUserRecipes}
        show={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
    </div>
  );
};

export default RecipesPage;
