import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import {Auth0Provider} from "./utils/auth0";
import history from "./utils/history";
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
// import * as Sentry from '@sentry/browser';

// Error logging platform initialization.
// Sentry.init({dsn: process.env.REACT_APP_SENTRY_DSN});

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(
    rootReducer,
    preloadedState || {},
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

window.snapSaveState = () => ({
    __PRELOADED_STATE__: store.getState()
});

const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

const rootElement = document.getElementById("root");

const appRender = (
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        <Provider store={store}>
            <App/>
        </Provider>
    </Auth0Provider>
);

if (rootElement.hasChildNodes()) {
  hydrate(appRender, rootElement);
} else {
  render(appRender, rootElement);
}