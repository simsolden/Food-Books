import React from 'react';
import RecipesList from '../../components/modules/recipe/recipesList/RecipesList';
// import classes from './MyRecipes.module.css'

interface Props {}

const Recipes: React.FC<Props> = (props) => {
  return (
    <div className="">
      <RecipesList />
    </div>
  );
};

export default Recipes;
