import React from 'react';

const Header = () => {
    return (
        <header className="head" role="banner">
            <div className="wrap clearfix">
                <a href="index.html" title="SocialChef" className="logo"><img src="images/ico/logo.png"
                                                                              alt="SocialChef logo"/></a>
                <nav className="main-nav" role="navigation" id="menu">
                    <ul>
                        <li className="current-menu-item"><a href="index.html" title="Home"><span>Home</span></a>
                        </li>
                        <li><a href="recipes.html" title="Recipes"><span>Recipes</span></a>
                            <ul>
                                <li><a href="recipes2.html" title="Recipes 2">Recipes 2</a></li>
                                <li><a href="recipe.html" title="Recipe">Recipe</a></li>
                            </ul>
                        </li>
                        <li><a href="blog.html" title="Blog"><span>Blog</span></a>
                            <ul>
                                <li><a href="blog_single.html" title="Blog post">Blog post</a></li>
                            </ul>
                        </li>
                        <li><a href="#" title="Pages"><span>Pages</span></a>
                            <ul>
                                <li><a href="left_sidebar.html" title="Left sidebar page">Left sidebar page</a></li>
                                <li><a href="right_sidebar.html" title="Right sidebar page">Right sidebar page</a>
                                </li>
                                <li><a href="two_sidebars.html" title="Both sidebars page">Both sidebars page</a>
                                </li>
                                <li><a href="full_width.html" title="Full width page">Full width page</a></li>
                                <li><a href="login.html" title="Login page">Login page</a></li>
                                <li><a href="register.html" title="Register page">Register page</a></li>
                                <li><a href="error404.html" title="Error page">Error page</a></li>
                            </ul>
                        </li>
                        <li><a href="#" title="Features"><span>Features</span></a>
                            <ul>
                                <li><a href="icons.html" title="Icons">Icons</a></li>
                                <li><a href="grid.html" title="Grid">Grid</a></li>
                                <li><a href="shortcodes.html" title="Shortcodes">Shortcodes</a></li>
                                <li><a href="pricing.html" title="Pricing tables">Pricing tables</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html" title="Contact"><span>Contact</span></a></li>
                        <li><a
                            href="http://themeforest.net/item/socialchef-social-recipe-html-template/8568727?ref=themeenergy"
                            title="Buy now"><span>Buy now</span></a></li>
                    </ul>
                </nav>

                <nav className="user-nav" role="navigation">
                    <ul>
                        <li className="light"><a href="find_recipe.html" title="Search for recipes"><i
                            className="icon icon-themeenergy_search"></i> <span>Search for recipes</span></a></li>
                        {/*<li className="medium"><a href="my_profile.html" title="My account"><i*/}
                        {/*    className="icon icon-themeenergy_chef-hat"></i> <span>My account</span></a></li>*/}
                        {/*<li className="dark"><a href="submit_recipe.html" title="Submit a recipe"><i*/}
                        {/*    className="icon icon-themeenergy_fork-spoon"></i> <span>Submit a recipe</span></a></li>*/}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;