import React, { useEffect } from 'react';
import classes from './RecipesList.module.css';

import RecipeItem from '../recipe-item/RecipeItem';
import Filters from '../filters/Filters';
import { Recipe } from '../../../../../common';
import { useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../../../../store';
import Pagination from '../../../../../components/pagination/Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import { useRematchDispatch } from '../../../../../hooks/useRematchDispatch';

interface Props {
  userRecipes: boolean;
  show: boolean;
  closed: () => void;
  recipes: Recipe[];
}

const RecipesList: React.FC<Props> = ({ userRecipes, show, closed, recipes }) => {
  let recipesListItems = null;
  const history = useHistory();
  const currentLocation = useLocation();
  const { setTitle, fetchUserRecipes, fetchRecipes, setPagination } = useRematchDispatch((dispatch: Dispatch) => ({
    setTitle: dispatch.recipe.setTitle,
    fetchUserRecipes: dispatch.recipe.fetchUserRecipes,
    fetchRecipes: dispatch.recipe.fetchRecipes,
    setPagination: dispatch.recipe.setPagination,
  }));
  const loading = useSelector((state: RootState) => state.recipe.isLoading);
  const pagination = useSelector((state: RootState) => state.recipe.pagination);

  useEffect(() => {
    return () => {
      setTitle(null);
    };
  });

  if (recipes.length) {
    recipesListItems = recipes.map((recipe) => {
      return <RecipeItem key={recipe._id} isUserRecipe={userRecipes} recipe={recipe} />;
    });
  } else {
    if (loading) {
      recipesListItems = <p className={classes.noRecipes}>Chargement des recettes...</p>;
    } else {
      recipesListItems = userRecipes ? (
        <p className={classes.noRecipes}>
          Aucune recettes à afficher. N'hésitez pas à en créer en cliquant sur le bouton{' '}
          <strong>Ajouter une recette</strong> en haut de la page
        </p>
      ) : (
        <p className={classes.noRecipes}>
          Aucune recettes à afficher. N'hésitez pas à en créer depuis la page mes recettes une fois connecté
        </p>
      );
    }
  }

  const handlePagination = (page: number) => {
    // @ts-ignore
    setPagination({ ...pagination, currentPage: page });

    currentLocation.pathname === 'mes-recettes' ? fetchUserRecipes() : fetchRecipes();

    const query = new URLSearchParams(currentLocation.search);
    query.set('page', '' + page);

    history.push(`${currentLocation.pathname}?${query.toString()}`);
  };

  return (
    <>
      <div className={classes.recipesPage}>
        <Filters show={show} closed={closed} />
        <div className={classes.recipeList}>
          {recipesListItems}
          <Pagination onClick={handlePagination} />
        </div>
      </div>
    </>
  );
};

export default RecipesList;
