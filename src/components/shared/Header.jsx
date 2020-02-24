import React, {Fragment} from 'react';
import {useAuth0} from "../../utils/auth0";

const Header = () => {
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

    return (
        <header className="head" role="banner">
            <div className="wrap clearfix">
                <a href="index.html" title="SocialChef" className="logo"><img src="/images/ico/logo.png"
                                                                              alt="SocialChef logo"/></a>
                <nav className="main-nav" role="navigation" id="menu">
                    <ul>
                        <li><a href="/" title="Home"><span>Home</span></a></li>
                        <li><a href="/recipes/category" title="Recipes By Category"><span>Recipes By Category</span></a>
                        </li>
                        <li><a href="/member/list" title="Member List"><span>Member List</span></a></li>
                        {isAuthenticated && (
                            <li><a href="/my-account" title="Member List"><span>My Account</span></a></li>
                        )}
                    </ul>
                </nav>

                <nav className="user-nav" role="navigation">
                    <ul>
                        {!isAuthenticated && (
                            <Fragment>
                                <li className="dark"><a onClick={() => loginWithRedirect({})} title="Search for recipes"
                                                        style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_head"/> <span>Login</span></a></li>
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
                                <li className="medium"><a href="" title="Search for recipes"
                                                          style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_search"/> <span>Search for recipes</span></a></li>
                                <li className="dark"><a href="/recipe/new" title="Submit a recipe"
                                                        style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_fork-spoon"/> <span>Submit a recipe</span></a></li>

                            </Fragment>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;