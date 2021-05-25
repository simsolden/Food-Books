import React, { useEffect } from 'react';
import RecipesPage from '../hoc/RecipesPage';
import { useSelector } from 'react-redux';
import { useRematchDispatch } from '../../hooks/useRematchDispatch';
import { RootState, Dispatch } from '../../store';
import { useHistory, useLocation } from 'react-router-dom';

interface Props {}

const Recipes: React.FC<Props> = (props) => {
  const history = useHistory();
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const search = new URLSearchParams(useLocation().search);
  const query = `/recipes${useLocation().search}`;
  const { setTitle, setPagination, fetchRecipes } = useRematchDispatch((dispatch: Dispatch) => ({
    setTitle: dispatch.recipe.setTitle,
    setPagination: dispatch.recipe.setPagination,
    fetchRecipes: dispatch.recipe.fetchRecipes,
  }));

  useEffect(() => {
    // @ts-ignore
    query ? fetchRecipes({ query }) : fetchRecipes();
  }, [fetchRecipes, query]);

  const handleSearch = (text: string) => {
    //@ts-ignore
    setPagination({ currentPage: 1 });
    text ? setTitle(text) : setTitle(null);
    text ? search.set('title', text) : search.delete('title');
    search.set('page', '' + 1);
    history.push(`/decouvrir?${search.toString()}`);
    // @ts-ignore
    fetchRecipes({ title: text });
  };

  return <RecipesPage isUserRecipes={false} recipes={recipes} onSearch={handleSearch} />;
};

export default Recipes;
