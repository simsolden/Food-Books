import React from 'react';
import RecipesList from '../../modules/recipe/components/recipes-list/RecipesList';
import classes from './styles/Recipes.module.css';
import SearchBar from '../../components/searchBar/SearchBar';

interface Props {}

const Recipes: React.FC<Props> = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.recipes}>
        <div className={classes.top}>
          <div>
            <SearchBar
              onSubmit={(input) => {
                alert(`Search: ${input}`);
              }}
            />
          </div>
        </div>
        <RecipesList isMine={false} />
      </div>
    </div>
  );
};

export default Recipes;
