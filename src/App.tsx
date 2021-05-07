import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { State } from './store';
import Home from './containers/home/Home';
import Layout from './containers/hoc/Layout';

const Categories = lazy(() => import('./containers/categories/Categories'));
const MyRecipes = lazy(() => import('./containers/my-recipes/MyRecipes'));
const Recipes = lazy(() => import('./containers/recipes/Recipes'));
const Planning = lazy(() => import('./containers/planning/Planning'));

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: State) => state.user.isAuthenticated);

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories" exact component={Categories} />
      <Route path="/recettes-populaires" exact component={Recipes} />
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/recettes-populaires" exact component={Recipes} />
        <Route path="/mes-recettes" exact component={MyRecipes} />
        <Route path="/planning" exact component={Planning} />
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
