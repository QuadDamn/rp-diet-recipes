import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';
import Header from './components/shared/Header';
import HomeContainer from './containers/HomeContainer';
import Footer from './components/shared/Footer';
import { useAuth0 } from './utils/auth0';
import PrivateRoute from './components/shared/PrivateRoute';
import CreateRecipeContainer from './containers/CreateRecipeContainer';
import PageNotFoundError from './components/PageNotFoundError';
import Theme from './components/shared/ThemeProvider';
import RecipeViewContainer from './containers/RecipeViewContainer';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div className="preloader">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <Router history={history}>
      <div>
        <Theme>
          <Header />

          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route
              path="/recipe/:recipeId/:recipeTitle"
              component={RecipeViewContainer}
            />
            <PrivateRoute
              path="/recipe/new"
              component={CreateRecipeContainer}
            />
            <Route component={PageNotFoundError} />
          </Switch>

          <Footer />
        </Theme>
      </div>
    </Router>
  );
}

export default App;
