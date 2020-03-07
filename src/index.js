import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Auth0Provider} from "./utils/auth0";
import history from "./utils/history";

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

ReactDOM.render(
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        <Provider store={store}>
            <App/>
        </Provider>
    </Auth0Provider>,
    document.getElementById("root")
);