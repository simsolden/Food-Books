import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useRematchDispatch } from '../../hooks/useRematchDispatch';
import { Dispatch, RootState } from '../../store';
import RecipesPage from '../hoc/RecipesPage';

interface Props {}

const MyRecipes: React.FC<Props> = (props) => {
  const history = useHistory();
  const recipes = useSelector((state: RootState) => state.recipe.userRecipes);
  const search = new URLSearchParams(useLocation().search);
  const query = `/users/recipes${useLocation().search}`;
  const { setTitle, setPagination, fetchUserRecipes } = useRematchDispatch((dispatch: Dispatch) => ({
    setTitle: dispatch.recipe.setTitle,
    setPagination: dispatch.recipe.setPagination,
    fetchUserRecipes: dispatch.recipe.fetchUserRecipes,
  }));

  useEffect(() => {
    // @ts-ignore
    query ? fetchUserRecipes({ query }) : fetchUserRecipes();
  }, [fetchUserRecipes, query]);

  const handleSearch = (text: string) => {
    // @ts-ignore
    setPagination({ currentPage: 1 });
    text ? setTitle(text) : setTitle(null);
    text ? search.set('title', text) : search.delete('title');
    search.set('page', '' + 1);
    history.push(`/mes-recettes?${search.toString()}`);
    // @ts-ignore
    fetchUserRecipes({ title: text });
  };

  return <RecipesPage isUserRecipes recipes={recipes} onSearch={handleSearch} />;
};

export default MyRecipes;
