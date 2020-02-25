import React, {useEffect, useState} from 'react';
import Helmet from 'react-helmet';
import {useDispatch, useSelector} from "react-redux";
import {getAllRecipeCategoriesAction} from "../actions/recipeCategories";
import {isObjectEmpty} from '../utils/helpers';
import {useFormFields, useFormFieldErrors} from '../utils/customHooks';

import {
    Button,
    TextField,
    Grid,
    InputLabel,
    MenuItem,
    FormControl,
    Select
} from '@material-ui/core';

const CreateRecipeContainer = () => {

    const [fields, handleFieldChange] = useFormFields({
        recipeTitle: '',
        recipeCategory: '',
        recipeDescription: '',
        recipePreparationTime: '',
        recipeCookingTime: '',
        recipeDifficulty: '',
        recipeServings: '',
    });

    const [fieldErrors, handleFieldErrorChange] = useFormFieldErrors({
        recipeTitle: '',
        recipeCategory: '',
        recipeDescription: '',
        recipePreparationTime: '',
        recipeCookingTime: '',
        recipeDifficulty: '',
        recipeServings: '',
    });

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

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(fields);

    };

    if (!recipeCategoriesSelector.recipeCategories || recipeCategoriesSelector.recipeCategories.loading) {
        return (
            <div className="preloader">
                <div className="spinner"/>
            </div>
        );
    }

    return (
        <main className="main" role="main">

            <Helmet>
                <title>Create New Recipe | RP Recipes</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Helmet>

            <div className="wrap clearfix">
                <div className="row">
                    <section className="content full-width">
                        <div className="submit_recipe container">
                            <form onSubmit={(event) => handleFormSubmit(event)}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="recipeTitle"
                                            label="Title"
                                            name="recipeTitle"
                                            value={fields.recipeTitle}
                                            onChange={handleFieldChange}

                                            helperText={fieldErrors.recipeTitle}
                                            error={!!fieldErrors.recipeTitle}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" fullWidth margin="normal">
                                            <InputLabel id="recipeCategoryLabel">
                                                Category
                                            </InputLabel>
                                            <Select
                                                labelId="recipeCategoryLabel"
                                                id="recipeCategory"
                                                value={fields.recipeCategory}
                                                name="recipeCategory"
                                                onChange={handleFieldChange}
                                                labelWidth={65}
                                            >
                                                {recipeCategoriesSelector.recipeCategories.data.items.map((category, index) => {
                                                    return <MenuItem key={index} value={category.sys.id}>{category.fields.name}</MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            multiline
                                            rows={3}
                                            rowsMax={6}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="recipeDescription"
                                            label="Description"
                                            name="recipeDescription"
                                            value={fields.recipeDescription}
                                            onChange={handleFieldChange}
                                            helperText={fieldErrors.recipeDescription}
                                            error={!!fieldErrors.recipeDescription}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="recipePreparationTime"
                                            label="Preparation Time"
                                            name="recipePreparationTime"
                                            value={fields.recipePreparationTime}
                                            onChange={handleFieldChange}
                                            helperText={fieldErrors.recipePreparationTime}
                                            error={!!fieldErrors.recipePreparationTime}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="recipeCookingTime"
                                            label="Cooking Time"
                                            name="recipeCookingTime"
                                            value={fields.recipeCookingTime}
                                            onChange={handleFieldChange}
                                            helperText={fieldErrors.recipeCookingTime}
                                            error={!!fieldErrors.recipeCookingTime}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="recipeDifficulty"
                                            label="Difficulty"
                                            name="recipeDifficulty"
                                            value={fields.recipeDifficulty}
                                            onChange={handleFieldChange}
                                            helperText={fieldErrors.recipeDifficulty}
                                            error={!!fieldErrors.recipeDifficulty}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="recipeServings"
                                            label="Serves How Many People?"
                                            name="recipeServings"
                                            value={fields.recipeServings}
                                            onChange={handleFieldChange}
                                            helperText={fieldErrors.recipeServings}
                                            error={!!fieldErrors.recipeServings}
                                        />
                                    </Grid>
                                </Grid>

                                {/*<section style={{marginTop: "25px"}}>*/}




                                {/*    <h2>Ingredients</h2>*/}


                                {/*    <Grid container spacing={2}>*/}
                                {/*        <Grid item xs={7}>*/}
                                {/*            <TextField*/}
                                {/*                variant="outlined"*/}
                                {/*                margin="normal"*/}
                                {/*                fullWidth*/}
                                {/*                id="recipe-title"*/}
                                {/*                label="Ingredient"*/}
                                {/*                name="recipe-title"*/}
                                {/*                value={fields.recipeTitle}*/}
                                {/*                onChange={handleFieldChange}*/}

                                {/*                helperText={fieldErrors.recipeTitle}*/}
                                {/*                error={!!fieldErrors.recipeTitle}*/}
                                {/*            />*/}
                                {/*        </Grid>*/}
                                {/*        <Grid item xs={2}>*/}
                                {/*            <TextField*/}
                                {/*                variant="outlined"*/}
                                {/*                margin="normal"*/}
                                {/*                fullWidth*/}
                                {/*                id="quantity"*/}
                                {/*                label="Quantity"*/}
                                {/*                name="quantity"*/}
                                {/*                value={fields.recipeTitle}*/}
                                {/*                onChange={handleFieldChange}*/}

                                {/*                helperText={fieldErrors.recipeTitle}*/}
                                {/*                error={!!fieldErrors.recipeTitle}*/}
                                {/*            />*/}
                                {/*        </Grid>*/}
                                {/*        <Grid item xs={2}>*/}
                                {/*            <FormControl variant="outlined" fullWidth margin="normal">*/}
                                {/*                <InputLabel id="recipeCategoryLabel">*/}
                                {/*                    Unit of Measure*/}
                                {/*                </InputLabel>*/}
                                {/*                <Select*/}
                                {/*                    labelId="recipeCategoryLabel"*/}
                                {/*                    id="recipeCategoryLabel"*/}
                                {/*                    value={fields.recipeCategory}*/}
                                {/*                    onChange={handleFieldChange}*/}
                                {/*                    labelWidth="65"*/}
                                {/*                >*/}

                                {/*                    {recipeCategoriesSelector.recipeCategories.data.items.map((category, index) => {*/}
                                {/*                        return <MenuItem key={index} value={category.sys.id}>{category.fields.name}</MenuItem>*/}
                                {/*                    })}*/}
                                {/*                </Select>*/}
                                {/*            </FormControl>*/}
                                {/*        </Grid>*/}
                                {/*        <Grid item xs={1}>*/}
                                {/*            <button className="remove">-</button>*/}
                                {/*        </Grid>*/}
                                {/*    </Grid>*/}




                                    {/*<div className="f-row ingredient">*/}
                                    {/*    <div className="large"><input type="text" placeholder="Ingredient"/></div>*/}
                                    {/*    <div className="small"><input type="text" placeholder="Quantity"/></div>*/}
                                    {/*    <div className="third"><select>*/}
                                    {/*        <option selected="selected">Select a category</option>*/}
                                    {/*    </select></div>*/}

                                    {/*</div>*/}
                                    {/*<div className="f-row full">*/}
                                    {/*    <button className="add">Add an ingredient</button>*/}
                                    {/*</div>*/}


                                {/*</section>*/}



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

                                <div className="f-row full">

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className="button"
                                        disabled={submitButtonDisabled}
                                    >
                                        {submitButtonText ? submitButtonText : 'Submit Recipe'}
                                    </Button>


                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
};

export default CreateRecipeContainer;