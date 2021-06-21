import React, { useEffect } from 'react';
import Card from '../../components/card/Card';
import logo from '../../assets/logo-white.png';
import SearchBar from '../../components/inputs/search-bar/SearchBar';
import classes from './styles/Home.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../store';
import { useRematchDispatch } from '../../hooks/useRematchDispatch';

interface Props {}

const MemberHome: React.FC<Props> = () => {
  const history = useHistory();
  const recipes = useSelector((state: RootState) => state.recipe.recipes);
  const userRecipes = useSelector((state: RootState) => state.recipe.userRecipes);
  const { fetchRecipes, fetchUserRecipes } = useRematchDispatch((dispatch: Dispatch) => ({
    fetchRecipes: dispatch.recipe.fetchRecipes,
    fetchUserRecipes: dispatch.recipe.fetchUserRecipes,
  }));

  useEffect(() => {
    fetchRecipes();
    fetchUserRecipes();
  }, [fetchUserRecipes, fetchRecipes]);

  const lastUserRecipes = userRecipes
    .map((recipe, index) => {
      const slug = `mes-recettes/${recipe.title.toLocaleLowerCase().split(' ').join('-')}_${recipe._id}`;
      return (
        <Link to={slug} style={{ width: 'fit-content' }} key={slug + index}>
          <Card recipe={recipe} key={recipe._id} />
        </Link>
      );
    })
    .slice(undefined, 4);
  const lastRecipes = recipes
    .map((recipe, index) => {
      const slug = `decouvrir/${recipe.title.toLocaleLowerCase().split(' ').join('-')}_${recipe._id}`;
      return (
        <Link to={slug} key={slug + index}>
          <Card recipe={recipe} key={recipe._id} />
        </Link>
      );
    })
    .slice(undefined, 8);

  return (
    <>
      <div className={classes.home}>
        <div className={classes.searchBar}>
          <SearchBar
            onSubmit={(input) => {
              history.push(`/decouvrir?page=1&title=${input}`);
            }}
          />
        </div>
        <div className={classes.logo}>
          <img src={logo} alt="Logo food books" />
        </div>
        <div className={classes.lastRecipes}>
          <h2>Vos dernières recettes</h2>
          <div className={classes.lastRecipesCards}>
            {lastUserRecipes.length ? (
              lastUserRecipes
            ) : (
              <p className={classes.noRecipes}>
                Il semblerait que vous n'ayez pas encore de recettes, n'hésitez pas à en ajouter via la page{' '}
                <Link to="mes-recettes?page=1">Mes Recettes</Link>!
              </p>
            )}
          </div>
        </div>
        <div className={classes.lastRecipes}>
          <h2>Découvrez</h2>
          <div className={classes.lastRecipesCards}>{lastRecipes}</div>
        </div>
      </div>
    </>
  );
};

export default MemberHome;
