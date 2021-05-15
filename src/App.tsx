import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { RootState } from './store';
import Home from './containers/home/Home';
import Layout from './containers/hoc/Layout';
import Logout from './containers/auth/logout/Logout';
import SignIn from './containers/auth/sign-in/Login';

const Categories = lazy(() => import('./containers/categories/Categories'));
const MyRecipes = lazy(() => import('./containers/my-recipes/MyRecipes'));
const Recipes = lazy(() => import('./containers/recipes/Recipes'));
const SingleRecipe = lazy(() => import('./modules/recipe/components/single-recipe/SingleRecipe'));
const AddRecipe = lazy(() => import('./modules/recipe/components/add-recipe/AddRecipe'));
const Planning = lazy(() => import('./containers/planning/Planning'));
const UsageConditions = lazy(() => import('./containers/usage-conditions/UsageConditions'));

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories" exact component={Categories} />
      <Route path="/decouvrir/:recipeSlug" exact component={SingleRecipe} />
      <Route path="/decouvrir" exact component={Recipes} />
      <Route path="/login" exact component={SignIn} />
      <Route path="/conditions" exact component={UsageConditions} />
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/decouvrir" exact component={Recipes} />
        <Route path="/decouvrir/:recipeSlug" exact component={SingleRecipe} />
        <Route path="/mes-recettes/ajouter" exact component={AddRecipe} />
        <Route path="/mes-recettes" exact component={MyRecipes} />
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
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
      </Layout>
    </>
  );
};

export default withRouter(App);
