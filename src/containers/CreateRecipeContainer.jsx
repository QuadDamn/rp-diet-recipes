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

    console.log(ingredientsList);

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
                                            id="title"
                                            label="Title"
                                            name="title"
                                            value={fields.title}
                                            onChange={handleFieldChange}

                                            helperText={fieldErrors.title}
                                            error={!!fieldErrors.title}
                                        />
                                    </Grid>
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
                                    <Grid item xs={12}>
                                        <TextField
                                            multiline
                                            rows={3}
                                            rowsMax={6}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="shortDescription"
                                            label="Description"
                                            name="shortDescription"
                                            value={fields.shortDescription}
                                            onChange={handleFieldChange}
                                            helperText={fieldErrors.shortDescription}
                                            error={!!fieldErrors.shortDescription}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="preparationTime"
                                            label="Preparation Time"
                                            name="preparationTime"
                                            value={fields.preparationTime}
                                            onChange={handleFieldChange}
                                            helperText={fieldErrors.preparationTime}
                                            error={!!fieldErrors.preparationTime}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="cookingTime"
                                            label="Cooking Time"
                                            name="cookingTime"
                                            value={fields.cookingTime}
                                            onChange={handleFieldChange}
                                            helperText={fieldErrors.cookingTime}
                                            error={!!fieldErrors.cookingTime}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="difficulty"
                                            label="Difficulty"
                                            name="difficulty"
                                            value={fields.difficulty}
                                            onChange={handleFieldChange}
                                            helperText={fieldErrors.difficulty}
                                            error={!!fieldErrors.difficulty}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="serves"
                                            label="Serves How Many People?"
                                            name="serves"
                                            value={fields.serves}
                                            onChange={handleFieldChange}
                                            helperText={fieldErrors.serves}
                                            error={!!fieldErrors.serves}
                                        />
                                    </Grid>
                                </Grid>

                                <section style={{marginTop: "25px"}}>

                                    <h2>Ingredients</h2>

                                    {ingredientsList.map((ingredient, index) => {
                                        return (
                                        <Grid container spacing={2} key={index}>
                                            <Grid item xs={7}>
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    fullWidth
                                                    id={`ingredientName${index}`}
                                                    label="Ingredient"
                                                    name={`ingredientName${index}`}
                                                    value={ingredient.name}
                                                    onChange={(event) => handleIngredientInputChange(event, 'name', index)}
                                                    // helperText={fieldErrors.ingredientList[index].name}
                                                    // error={!!fieldErrors.ingredientList[index].name}
                                                />
                                            </Grid>
                                            <Grid item xs={2}>
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    fullWidth
                                                    id={`ingredientQuantity${index}`}
                                                    label="Quantity"
                                                    name={`ingredientQuantity${index}`}
                                                    value={ingredient.quantity}
                                                    onChange={(event) => handleIngredientInputChange(event, 'quantity', index)}
                                                    // helperText={fieldErrors.ingredientList[index].quantity}
                                                    // error={!!fieldErrors.ingredientList[index].quantity}
                                                />
                                            </Grid>
                                            <Grid item xs={2}>
                                                <FormControl variant="outlined" fullWidth margin="normal">
                                                    <InputLabel id="recipeCategoryLabel">
                                                        Unit of Measure
                                                    </InputLabel>
                                                    <Select
                                                        labelId="unitOfMeasureLabel"
                                                        id={`ingredientUnitOfMeasure${index}`}
                                                        name={`ingredientUnitOfMeasure${index}`}
                                                        value={ingredient.unitOfMeasure}
                                                        onChange={(event) => handleIngredientInputChange(event, 'unitOfMeasure', index)}
                                                        labelWidth={115}
                                                    >
                                                        <MenuItem value="c">Cup</MenuItem>
                                                        <MenuItem value="fl oz">Fluid Ounce</MenuItem>
                                                        <MenuItem value="gal">Gallon</MenuItem>
                                                        <MenuItem value="g">Gram</MenuItem>
                                                        <MenuItem value="kg">Kilogram</MenuItem>
                                                        <MenuItem value="l">Liter</MenuItem>
                                                        <MenuItem value="mg">Milligram</MenuItem>
                                                        <MenuItem value="ml">Milliliter</MenuItem>
                                                        <MenuItem value="oz">Ounce</MenuItem>
                                                        <MenuItem value="pt">Pint</MenuItem>
                                                        <MenuItem value="lb">Pound</MenuItem>
                                                        <MenuItem value="qt">Quart</MenuItem>
                                                        <MenuItem value="tbsp">Tablespoon</MenuItem>
                                                        <MenuItem value="tsp">Teaspoon</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            { index !== 0 ?
                                                <Grid item xs={1}>
                                                    <button onClick={(event) => handleRemoveIngredientRow(event, index)} className="remove">-</button>
                                                </Grid> :
                                                <Grid item xs={1} />
                                            }
                                        </Grid>
                                        );
                                    })}

                                    <Grid item xs={12}>
                                        <Button
                                            type="button"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className="button"
                                            onClick={(event) => handleAddIngredientRow(event)}
                                        >
                                            Add Ingredient
                                        </Button>
                                    </Grid>
                                </section>



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