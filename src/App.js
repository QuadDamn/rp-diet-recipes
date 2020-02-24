import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import history from "./utils/history";
import Header from "./components/shared/Header";
import HomeContainer from "./containers/HomeContainer";
import Footer from "./components/shared/Footer";
import {useAuth0} from "./utils/auth0";
import PrivateRoute from "./components/shared/PrivateRoute";
import CreateRecipeContainer from "./containers/CreateRecipeContainer";

function App() {
    const {loading} = useAuth0();

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
            <Header/>

            <Switch>
                <Route exact path="/">
                    <HomeContainer />
                </Route>
                <PrivateRoute path="/recipe/new" component={CreateRecipeContainer} />
            </Switch>

            <Footer/>
            </div>
        </Router>

    );
}

export default App;