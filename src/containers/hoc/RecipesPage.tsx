import React, { useState } from 'react';
import RecipesList from '../../modules/recipe/components/recipes-list/RecipesList';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SearchBar from '../../components/searchBar/SearchBar';
import SortSelect from '../../modules/recipe/components/sort-select/SortSelect';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import classes from './RecipesPage.module.css';

interface Props {
  isUserRecipes: boolean;
}

const RecipesPage: React.FC<Props> = ({ isUserRecipes }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerOpenHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  const searchBarClass = isUserRecipes ? classes.searchBar : classes.fullSearchBar; 

  return (
    <div className={classes.recipes}>
      <div className={classes.top}>
        {
          isUserRecipes
          &&
          (
            <button className={classes.addRecipe} type="button" title="Ajouter une recette" onClick={() => {alert('ajouter une recette')}}>
                Ajouter une recette <LibraryBooksIcon style={{ verticalAlign: 'top' }} fontSize="small" />
            </button>
          )
        }
        <div className={searchBarClass}>
          <SearchBar
            onSubmit={(input) => {
              alert(`Search: ${input}`);
            }}
          />
        </div>
      </div>
      <div className={classes.middle}>
        <SortSelect />
        <button className={classes.filterIcon} title="Filtrer les recettes" onClick={sideDrawerOpenHandler}>
          <TuneOutlinedIcon fontSize="large"/>
        </button>
      </div>
      <RecipesList userRecipes={isUserRecipes} show={showSideDrawer} closed={sideDrawerClosedHandler} />
    </div>
  );
};

export default RecipesPage;
