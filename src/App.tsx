import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { State } from './store';
import Toolbar from './components/common/navigation/Toolbar/Toolbar';

const Home = lazy(() => import('./containers/home/Home'));
const Categories = lazy(() => import('./containers/categories/Categories'));
const MyRecipes = lazy(() => import('./containers/my-recipes/MyRecipes'));
const Planning = lazy(() => import('./containers/planning/Planning'));

interface Props {
  isAuthenticated: boolean;
}

const App: React.FC<Props> = ({ isAuthenticated }) => {
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories" exact component={Categories} />
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/mes-recettes" exact component={MyRecipes} />
        <Route path="/planning" exact component={Planning} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <>
      <Toolbar />
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </>
  );
};

const mapState = (state: State) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default withRouter(connect(mapState)(App));
