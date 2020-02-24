import React, {useEffect} from 'react';
import Helmet from 'react-helmet';
import {useDispatch, useSelector} from "react-redux";
import {getAllRecipeCategoriesAction} from "../actions/recipeCategories";
import {isObjectEmpty} from '../utils/helpers';

import {
    Button,
    TextField,
    CssBaseline,
    Grid,
    Typography,
    Container,
    Avatar,
    InputAdornment,
} from '@material-ui/core';

const CreateRecipeContainer = () => {
    const [autoPurchasePriceValue, setAutoPurchasePriceValue] = useState();
    const [autoPurchasePriceErrorText, setAutoPurchasePriceErrorText] = useState('');

    const [submitButtonText, setSubmitButtonText] = useState();
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const [redirect, setRedirect] = useState(false);

    const recipeCategoriesSelector = useSelector(state => state.recipeCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isObjectEmpty(recipeCategoriesSelector)) {
            dispatch(getAllRecipeCategoriesAction());
        }
    }, []);

    return (

        <main className="main" role="main">

            <Helmet>
                <title>Create New Recipe | RP Recipes</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Helmet>


            <div className="wrap clearfix">

                <nav className="breadcrumbs">
                    <ul>
                        <li><a href="index.html" title="Home">Home</a></li>
                        <li>Submit a recipe</li>
                    </ul>
                </nav>



                <div className="row">
                    <header className="s-title">
                        <h1>Add a new recipe</h1>
                    </header>


                    <section className="content full-width">
                        <div className="submit_recipe container">
                            <form>

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="recipe-title"
                                    label="Recipe Title"
                                    name="recipe-title"
                                    value={recipeTitle}
                                    onChange={event => setRecipeTitle(event.target.value)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start" />,
                                    }}
                                    helperText={recipeTitleErrorText}
                                    error={!!recipeTitleErrorText}
                                />

                                {/*<section>*/}
                                {/*    */}
                                {/*    */}
                                {/*    */}
                                {/*    */}
                                {/*    <h2>Basics</h2>*/}
                                {/*    <p>All fields are required.</p>*/}
                                {/*    <div className="f-row">*/}
                                {/*        <div className="full"><input type="text" placeholder="Recipe title"/></div>*/}
                                {/*    </div>*/}
                                {/*    <div className="f-row">*/}
                                {/*        <div className="third"><input type="text" placeholder="Preparation time"/></div>*/}
                                {/*        <div className="third"><input type="text" placeholder="Cooking time"/></div>*/}
                                {/*        <div className="third"><input type="text" placeholder="Difficulty"/></div>*/}
                                {/*    </div>*/}
                                {/*    <div className="f-row">*/}
                                {/*        <div className="third"><input type="text"*/}
                                {/*                                      placeholder="Serves how many people?"/></div>*/}
                                {/*        <div className="third"><select>*/}
                                {/*            <option selected="selected">Select a category</option>*/}
                                {/*        </select></div>*/}
                                {/*    </div>*/}
                                {/*</section>*/}

                                {/*<section>*/}
                                {/*    <h2>Description</h2>*/}
                                {/*    <div className="f-row">*/}
                                {/*        <div className="full"><textarea placeholder="Recipe title"></textarea></div>*/}
                                {/*    </div>*/}
                                {/*</section>*/}

                                {/*<section>*/}
                                {/*    <h2>Ingredients</h2>*/}
                                {/*    <div className="f-row ingredient">*/}
                                {/*        <div className="large"><input type="text" placeholder="Ingredient"/></div>*/}
                                {/*        <div className="small"><input type="text" placeholder="Quantity"/></div>*/}
                                {/*        <div className="third"><select>*/}
                                {/*            <option selected="selected">Select a category</option>*/}
                                {/*        </select></div>*/}
                                {/*        <button className="remove">-</button>*/}
                                {/*    </div>*/}
                                {/*    <div className="f-row full">*/}
                                {/*        <button className="add">Add an ingredient</button>*/}
                                {/*    </div>*/}
                                {/*</section>*/}

                                {/*<section>*/}
                                {/*    <h2>Instructions <span>(enter instructions, each step at a time)</span></h2>*/}
                                {/*    <div className="f-row instruction">*/}
                                {/*        <div className="full"><input type="text" placeholder="Instructions"/></div>*/}
                                {/*        <button className="remove">-</button>*/}
                                {/*    </div>*/}
                                {/*    <div className="f-row full">*/}
                                {/*        <button className="add">Add a step</button>*/}
                                {/*    </div>*/}
                                {/*</section>*/}

                                {/*<section>*/}
                                {/*    <h2>Photo</h2>*/}
                                {/*    <div className="f-row full">*/}
                                {/*        <input type="file"/>*/}
                                {/*    </div>*/}
                                {/*</section>*/}

                                {/*<section>*/}
                                {/*    <h2>Status <span>(would you like to further edit this recipe or are you ready to publish it?)</span>*/}
                                {/*    </h2>*/}
                                {/*    <div className="f-row full">*/}
                                {/*        <input type="radio" id="r1" name="radio"/>*/}
                                {/*        <label htmlFor="r1">I am still working on it</label>*/}
                                {/*    </div>*/}
                                {/*    <div className="f-row full">*/}
                                {/*        <input type="radio" id="r2" name="radio"/>*/}
                                {/*        <label htmlFor="r2">I am ready to publish this recipe</label>*/}
                                {/*    </div>*/}
                                {/*</section>*/}

                                {/*<div className="f-row full">*/}
                                {/*    <input type="submit" className="button" id="submitRecipe"*/}
                                {/*           value="Publish this recipe"/>*/}
                                {/*</div>*/}
                            </form>
                        </div>
                    </section>

                </div>

            </div>

        </main>


    )

};

export default CreateRecipeContainer;