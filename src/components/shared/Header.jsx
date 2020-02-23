import React, {Fragment} from 'react';
import { useAuth0 } from "../../utils/auth0";

const Header = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <header className="head" role="banner">
            <div className="wrap clearfix">
                <a href="index.html" title="SocialChef" className="logo"><img src="images/ico/logo.png"
                                                                              alt="SocialChef logo"/></a>
                <nav className="main-nav" role="navigation" id="menu">
                    <ul>
                        <li className="current-menu-item"><a href="index.html" title="Home"><span>Home</span></a></li>
                        <li><a href="index.html" title="All Recipes"><span>All Recipes</span></a></li>
                        <li><a href="index.html" title="Recipes By Category"><span>Recipes By Category</span></a></li>
                        <li><a href="index.html" title="Member List"><span>Member List</span></a></li>
                    </ul>
                </nav>

                <nav className="user-nav" role="navigation">
                    <ul>

                        {!isAuthenticated && (
                            <Fragment>
                            <li className="light"><a title="Search for recipes" style={{cursor: "pointer"}}><i
                                className="icon icon-themeenergy_search"  /> <span>Search for recipes</span></a></li>
                            <li className="light"><a onClick={() => loginWithRedirect({})} title="Search for recipes" style={{cursor: "pointer"}}><i
                                className="icon icon-themeenergy_head" /> <span>Login</span></a></li>
                            </Fragment>
                        )}

                        {isAuthenticated && (
                            <Fragment>
                                <li className="light"><a onClick={() => logout()} title="Logout" style={{cursor: "pointer"}}><i
                                    className="icon icon-themeenergy_head" /> <span>Logout</span></a></li>
                                <li className="medium"><a href="my_profile.html" title="My account"><i
                                    className="icon icon-themeenergy_chef-hat" /> <span>My Account</span></a></li>
                                <li className="dark"><a href="submit_recipe.html" title="Submit a recipe"><i
                                    className="icon icon-themeenergy_fork-spoon" /> <span>Submit a recipe</span></a></li>
                            </Fragment>
                        )}







                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;