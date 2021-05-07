import React from 'react';
import RecipesPage from '../hoc/RecipesPage';

interface Props {}

const Recipes: React.FC<Props> = (props) => {
  return <RecipesPage isUserRecipes/>;
};

export default Recipes;
