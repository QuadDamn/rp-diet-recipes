import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import { Auth0Provider } from './utils/auth0';
import history from './utils/history';

import './assets/css/style.css';
import './assets/css/icons.css';

// import * as Sentry from '@sentry/browser';

// Error logging platform initialization.
// Sentry.init({dsn: process.env.REACT_APP_SENTRY_DSN});

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const rootElement = document.getElementById('root');

const appRender = (
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>
);

if (rootElement.hasChildNodes()) {
  hydrate(appRender, rootElement);
} else {
  render(appRender, rootElement);
}
