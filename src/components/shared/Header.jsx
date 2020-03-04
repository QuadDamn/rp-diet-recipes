import React, {Fragment} from 'react';
import {useAuth0} from "../../utils/auth0";

const Header = () => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

    return (
        <header className="head" role="banner">
            <div className="wrap clearfix">
                <a href="/" title="SocialChef" className="logo"><img src="/images/ico/logo.png"
                                                                     alt="SocialChef logo"/></a>
                <nav className="user-nav" role="navigation">
                    <ul>
                        {!isAuthenticated && (
                            <Fragment>
                                <li className="dark"><a onClick={() => loginWithRedirect({})} title="Search for recipes"
                                                        style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_head"/> <span>Login</span></a></li>
                                <li className="dark"><a href="" title="Members List"
                                                        style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_search"/> <span>Members List</span></a></li>
                                <li className="medium"><a href="" title="Search for recipes"
                                                          style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_search"/> <span>Search for recipes</span></a></li>

                            </Fragment>
                        )}

                        {isAuthenticated && (
                            <Fragment>
                                <li className="light"><a onClick={() => logout()} title="Logout"
                                                         style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_head"/> <span>Logout</span></a></li>
                                <li className="medium"><a href="" title="My Account"
                                                          style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_head"/> <span>My Account</span></a></li>
                                <li className="dark"><a href="" title="Members List"
                                                        style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_search"/> <span>Members List</span></a></li>
                                <li className="medium"><a href="/recipe/new" title="Submit A Recipe"
                                                          style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_fork-spoon"/> <span>Submit a recipe</span></a></li>
                                <li className="light"><a href="" title="Search For Recipes"
                                                         style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_search"/> <span>Search for recipes</span></a></li>
                            </Fragment>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;