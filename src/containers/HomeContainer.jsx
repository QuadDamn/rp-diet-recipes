import React, {useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllRecipesAction} from '../actions/recipes';
import {getAllRecipeCategoriesAction} from "../actions/recipeCategories";
import RecipeBlock from "../components/shared/RecipeBlock";
import RecipeCategoryBlock from "../components/home/RecipeCategoryBlock";

const HomeContainer = () => {
    const recipesSelector = useSelector(state => state.recipes);
    const recipeCategoriesSelector = useSelector(state => state.recipeCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRecipesAction());
        dispatch(getAllRecipeCategoriesAction());
    }, []);

    if (!recipesSelector.recipes || recipesSelector.recipes.loading || !recipeCategoriesSelector.recipeCategories || recipeCategoriesSelector.recipeCategories.loading) {
        return (
            <div className="preloader">
                <div className="spinner"/>
            </div>
        );
    }

    return (
        <main className="main" role="main">
            <div className="wrap clearfix">
                <div className="row">
                    <section className="content three-fourth">
                        <div className="cwrap">
                            <div className="entries row">
                                <div className="featured two-third">
                                    <header className="s-title">
                                        <h2 className="ribbon">Recipe of the Day</h2>
                                    </header>
                                    <article className="entry">
                                        <figure>
                                            <img src="images/img.jpg" alt=""/>
                                            <figcaption><a href="recipe.html"><i
                                                className="icon icon-themeenergy_eye2"></i> <span>View recipe</span></a>
                                            </figcaption>
                                        </figure>
                                        <div className="container">
                                            <h2><a href="recipe.html">Honey Cake</a></h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                                volutpat. </p>
                                            <div className="actions">
                                                <div>
                                                    <a href="#" className="button">See the full recipe</a>
                                                    <div className="more"><a href="recipes2.html">See past recipes of
                                                        the day</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="featured one-third">
                                    <header className="s-title">
                                        <h2 className="ribbon star">Featured member</h2>
                                    </header>
                                    <article className="entry">
                                        <figure>
                                            <img src="images/avatar.jpg" alt=""/>
                                            <figcaption><a href="my_profile.html"><i
                                                className="icon icon-themeenergy_eye2"></i> <span>View member</span></a>
                                            </figcaption>
                                        </figure>
                                        <div className="container">
                                            <h2><a href="my_profile.html">Kimberly C.</a></h2>
                                            <blockquote><i className="fa fa-quote-left"></i>Traditional dishes and fine
                                                bakery products accompanied by beautiful photographs to bend around and
                                                attract the tryout! Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit.
                                            </blockquote>
                                            <div className="actions">
                                                <div>
                                                    <a href="#" className="button">Check out her recipes</a>
                                                    <div className="more"><a href="#">See past featured members</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>


                        <div className="cwrap">
                            <header className="s-title">
                                <h2 className="ribbon bright">Latest recipes</h2>
                            </header>

                            <div className="entries row">
                                {recipesSelector.recipes.data.items.map((recipe) => {
                                    return (
                                        <Fragment key={recipe.fields.ID}>
                                            <RecipeBlock {...recipe} />
                                        </Fragment>
                                    );
                                })}

                                <div className="quicklinks">
                                    <a href="#" className="button">More recipes</a>
                                    <a href="" className="button scroll-to-top">Back to top</a>
                                </div>
                            </div>

                        </div>


                    </section>


                    <aside className="sidebar one-fourth">

                        <RecipeCategoryBlock {...recipeCategoriesSelector.recipeCategories} />

                        <div className="widget members">
                            <h3>Our members</h3>
                            <div id="members-list-options" className="item-options">
                                <a href="#">Newest</a>
                                <a className="selected" href="#">Active</a>
                                <a href="#">Popular</a>
                            </div>
                            <ul className="boxed">
                                <li>
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar.jpg"
                                                                                           alt=""/><span>Kimberly C.</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar.jpg"
                                                                                           alt=""/><span>Alex J.</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar.jpg"
                                                                                           alt=""/><span>Denise M.</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar.jpg"
                                                                                           alt=""/><span>Jason H.</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar.jpg"
                                                                                           alt=""/><span>Jennifer W.</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar.jpg"
                                                                                           alt=""/><span>Anabelle Q.</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar.jpg"
                                                                                           alt=""/><span>Thomas M.</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar.jpg"
                                                                                           alt=""/><span>Michelle S.</span></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar"><a href="my_profile.html"><img src="images/avatar.jpg"
                                                                                           alt=""/><span>Bryan A.</span></a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/*<div className="widget">*/}
                        {/*    <h3>Advertisment</h3>*/}
                        {/*    <a href="#"><img src="images/advertisment.jpg" alt=""/></a>*/}
                        {/*</div>*/}
                    </aside>
                </div>

                {/*<div className="row">*/}

                {/*    <section className="content full-width">*/}
                {/*        <div className="icons dynamic-numbers">*/}
                {/*            <header className="s-title">*/}
                {/*                <h2 className="ribbon large">RP Recipes Site Stats</h2>*/}
                {/*            </header>*/}
                {/*            <div className="row">*/}
                {/*                <div className="one-sixth">*/}
                {/*                    <div className="container">*/}
                {/*                        <i className="icon icon-themeenergy_chef-hat"></i>*/}
                {/*                        <span className="title dynamic-number" data-dnumber="1730">0</span>*/}
                {/*                        <span className="subtitle">members</span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <div className="one-sixth">*/}
                {/*                    <div className="container">*/}
                {/*                        <i className="icon icon-themeenergy_pan"></i>*/}
                {/*                        <span className="title dynamic-number" data-dnumber="1250">0</span>*/}
                {/*                        <span className="subtitle">recipes</span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <div className="one-sixth">*/}
                {/*                    <div className="container">*/}
                {/*                        <i className="icon icon-themeenergy_image"></i>*/}
                {/*                        <span className="title dynamic-number" data-dnumber="5300">0</span>*/}
                {/*                        <span className="subtitle">photos</span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <div className="one-sixth">*/}
                {/*                    <div className="container">*/}
                {/*                        <i className="icon icon-themeenergy_pencil"></i>*/}
                {/*                        <span className="title dynamic-number" data-dnumber="2300">0</span>*/}
                {/*                        <span className="subtitle">forum posts</span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <div className="one-sixth">*/}
                {/*                    <div className="container">*/}
                {/*                        <i className="icon icon-themeenergy_chat-bubbles"></i>*/}
                {/*                        <span className="title dynamic-number" data-dnumber="7400">0</span>*/}
                {/*                        <span className="subtitle">comments</span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <div className="one-sixth">*/}
                {/*                    <div className="container">*/}
                {/*                        <i className="icon icon-themeenergy_stars"></i>*/}
                {/*                        <span className="title dynamic-number" data-dnumber="1700">0</span>*/}
                {/*                        <span className="subtitle">articles</span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </section>*/}
                {/*</div>*/}
            </div>
        </main>
    )
};

export default HomeContainer;

