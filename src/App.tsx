import React, { Suspense, lazy, useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import frLocale from 'date-fns/locale/fr';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useRematchDispatch } from './hooks/useRematchDispatch';
import { Dispatch, RootState } from './store';

import FallBack from './components/fallback/FallBack';
import Home from './containers/home/Home';
import MemberHome from './containers/home/MemberHome';
import Discover from './containers/discover/Discover';
import Logout from './containers/auth/logout/Logout';
import Layout from './hoc/Layout';

const Categories = lazy(() => import('./containers/categories/Categories'));
const SignIn = lazy(() => import('./containers/auth/sign-in/Login'));
const MyRecipes = lazy(() => import('./containers/my-recipes/MyRecipes'));
const SingleRecipe = lazy(() => import('./modules/recipe/components/single-recipe/SingleRecipe'));
const UpdateRecipe = lazy(() => import('./modules/recipe/components/update-recipe/UpdateRecipe'));
const AddRecipe = lazy(() => import('./modules/recipe/components/add-recipe/AddRecipe'));
const Planning = lazy(() => import('./containers/planning/Planning'));
const UsageConditions = lazy(() => import('./containers/usage-conditions/UsageConditions'));
const Welcome = lazy(() => import('./containers/auth/sign-up/welcome/Welcome'));
const Confirmation = lazy(() => import('./containers/auth/sign-up/confirmation/Confirmation'));

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  const { fetchCategories, checkAuthenticationState } = useRematchDispatch((dispatch: Dispatch) => ({
    fetchCategories: dispatch.recipe.fetchCategories,
    checkAuthenticationState: dispatch.user.checkAuthenticationState,
  }));

  useEffect(() => {
    fetchCategories();
    checkAuthenticationState();
  }, [fetchCategories, checkAuthenticationState]);

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories" exact component={Categories} />
      <Route path="/decouvrir/:recipeSlug" exact component={SingleRecipe} />
      <Route path="/decouvrir" exact component={Discover} />
      <Route path="/login" exact component={SignIn} />
      <Route path="/conditions" exact component={UsageConditions} />
      <Route path="/confirmation/:token" exact component={Confirmation} />
      <Route path="/bienvenue" exact component={Welcome} />
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact component={MemberHome} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/decouvrir" exact component={Discover} />
        <Route path="/decouvrir/:recipeSlug" exact component={SingleRecipe} />
        <Route path="/mes-recettes/ajouter" exact component={AddRecipe} />
        <Route path="/mes-recettes" exact component={MyRecipes} />
        <Route path="/mes-recettes/edit/:recipeSlug" exact component={UpdateRecipe} />
        <Route path="/mes-recettes/:recipeSlug" exact component={SingleRecipe} />
        <Route path="/planning" exact component={Planning} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/conditions" exact component={UsageConditions} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
        <Layout>
          <Suspense fallback={<FallBack />}>{routes}</Suspense>
        </Layout>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default withRouter(App);
