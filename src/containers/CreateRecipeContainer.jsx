import React, {useEffect, useState} from 'react';
import Helmet from 'react-helmet';
import {useDispatch, useSelector} from "react-redux";
import {getAllRecipeCategoriesAction} from "../actions/recipeCategories";
import {isObjectEmpty} from '../utils/helpers';
import {useFormFields, useFormFieldErrors} from '../utils/customHooks';
import IngredientList from '../components/createRecipe/IngredientList';
import TextFieldInput from '../components/createRecipe/TextFieldInput';

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
        title: '',
        category: '',
        shortDescription: '',
        preparationTime: '',
        cookingTime: '',
        difficulty: '',
        serves: '',
        mainImageLink: ''
    });

    const [ingredientsList, setIngredientList] = useState(
        [{
            name: '',
            quantity: '',
            unitOfMeasure: ''
        }]
    );

    const [preparationInstructions, setPreparationInstructions] = useState(
        [
            ''
        ]
    );

    const [fieldErrors, handleFieldErrorChange] = useFormFieldErrors({
        title: '',
        category: '',
        shortDescription: '',
        preparationTime: '',
        cookingTime: '',
        difficulty: '',
        serves: '',
        mainImageLink: ''
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

    const handleIngredientInputChange = (event, inputField, index) => {
        let arrayCopy = [...ingredientsList];
        arrayCopy[index][inputField] = event.target.value;
        setIngredientList(arrayCopy);
    };

    const handleAddIngredientRow = (event) => {
        let arrayCopy = [...ingredientsList];
        arrayCopy.push({
            name: '',
            quantity: '',
            unitOfMeasure: ''
        });
        setIngredientList(arrayCopy);
    };

    const handleRemoveIngredientRow = (event, index) => {
        const arrayCopy = [...ingredientsList];
        arrayCopy.splice(index, 1);
        setIngredientList(arrayCopy);
    };

    console.log(ingredientsList);

    return (
        <main className="main" role="main">
            <Helmet>
                <title>Create New Recipe | RP Recipes</title>
                {/*<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />*/}
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Helmet>

            <div className="wrap clearfix">
                <div className="row">
                    <section className="content full-width">
                        <div className="submit_recipe container">
                            <form onSubmit={(event) => handleFormSubmit(event)}>
                                <Grid container spacing={2}>
                                    <TextFieldInput
                                        gridItemSize={6}
                                        fieldName="title"
                                        fieldLabel="Title"
                                        fieldValue={fields.title}
                                        handleFieldChange={handleFieldChange}
                                        fieldError={fieldErrors.title}
                                        isMultiLine={false}
                                    />

                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" fullWidth margin="normal">
                                            <InputLabel id="recipeCategoryLabel">
                                                Category
                                            </InputLabel>
                                            <Select
                                                labelId="recipeCategoryLabel"
                                                id="category"
                                                value={fields.category}
                                                name="category"
                                                onChange={handleFieldChange}
                                                labelWidth={65}
                                            >
                                                {recipeCategoriesSelector.recipeCategories.data.items.map((category, index) => {
                                                    return <MenuItem key={index} value={category.sys.id}>{category.fields.name}</MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <TextFieldInput
                                        gridItemSize={12}
                                        fieldName="shortDescription"
                                        fieldLabel="Description"
                                        fieldValue={fields.shortDescription}
                                        handleFieldChange={handleFieldChange}
                                        fieldError={fieldErrors.shortDescription}
                                        isMultiLine={true}
                                    />

                                    <TextFieldInput
                                        gridItemSize={3}
                                        fieldName="preparationTime"
                                        fieldLabel="Preparation Time"
                                        fieldValue={fields.preparationTime}
                                        handleFieldChange={handleFieldChange}
                                        fieldError={fieldErrors.preparationTime}
                                        isMultiLine={false}
                                    />

                                    <TextFieldInput
                                        gridItemSize={3}
                                        fieldName="cookingTime"
                                        fieldLabel="Cooking Time"
                                        fieldValue={fields.cookingTime}
                                        handleFieldChange={handleFieldChange}
                                        fieldError={fieldErrors.cookingTime}
                                        isMultiLine={false}
                                    />

                                    <TextFieldInput
                                        gridItemSize={3}
                                        fieldName="difficulty"
                                        fieldLabel="Difficulty"
                                        fieldValue={fields.difficulty}
                                        handleFieldChange={handleFieldChange}
                                        fieldError={fieldErrors.difficulty}
                                        isMultiLine={false}
                                    />

                                    <TextFieldInput
                                        gridItemSize={3}
                                        fieldName="serves"
                                        fieldLabel="Serves How Many People?"
                                        fieldValue={fields.serves}
                                        handleFieldChange={handleFieldChange}
                                        fieldError={fieldErrors.serves}
                                        isMultiLine={false}
                                    />
                                </Grid>

                                <IngredientList
                                    ingredientsList={ingredientsList}
                                    handleIngredientInputChange={handleIngredientInputChange}
                                    handleAddIngredientRow={handleAddIngredientRow}
                                    handleRemoveIngredientRow={handleRemoveIngredientRow}
                                />

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