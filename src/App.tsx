import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from './store/index';

const RecipesList = lazy(() => import('./components/modules/recipe/recipesList/RecipesList'));

const App = () => (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={RecipesList} />
        </Switch>
      </Suspense>
    </Router>
  </Provider>
);

export default App;
