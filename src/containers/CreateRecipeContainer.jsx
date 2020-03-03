import React, {useEffect, useState} from 'react';
import Helmet from 'react-helmet';
import {useDispatch, useSelector} from "react-redux";
import {getAllRecipeCategoriesAction} from "../actions/recipeCategories";
import {isObjectEmpty} from '../utils/helpers';
import {useFormFields, useFormFieldErrors} from '../utils/customHooks';
import IngredientList from '../components/createRecipe/IngredientList';
import TextFieldInput from '../components/createRecipe/TextFieldInput';
import PreparationStepList from "../components/createRecipe/PreparationStepList";
import validateImage from '../utils/validateImage';
import CustomSnackbar from "../components/shared/CustomSnackbar";
import ImageUploader from '../components/shared/ImageUploader';

import {
    Button,
    Grid,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from '@material-ui/core';

const CreateRecipeContainer = () => {
    /*********************************
     * START :: STATE INITIALIZATION *
     ********************************/

    const [fields, handleFieldChange] = useFormFields({
        title: '',
        category: '',
        shortDescription: '',
        preparationTime: '',
        cookingTime: '',
        difficulty: '',
        serves: '',
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

    const [mainImage, setMainImage] = useState('');

    const [fieldErrors, handleFieldErrorChange] = useFormFieldErrors({
        title: '',
        category: '',
        shortDescription: '',
        preparationTime: '',
        cookingTime: '',
        difficulty: '',
        serves: ''
    });

    const [submitButtonText, setSubmitButtonText] = useState();
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const [redirect, setRedirect] = useState(false);

    /*******************************
     * END :: STATE INITIALIZATION *
     ******************************/

    /********************************
     * START :: REDUX DATA FETCHING *
     *******************************/

    const recipeCategoriesSelector = useSelector(state => state.recipeCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isObjectEmpty(recipeCategoriesSelector)) {
            dispatch(getAllRecipeCategoriesAction());
        }
    }, []);

    /******************************
     * END :: REDUX DATA FETCHING *
     *****************************/

    /********************************
     * START :: INGREDIENT HANDLERS *
     *******************************/

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

    /******************************
     * END :: INGREDIENT HANDLERS *
     *****************************/

    /*********************************************
     * START :: PREPARATION INSTRUCTION HANDLERS *
     ********************************************/

    const handlePreparationStepInputChange = (event, inputField, index) => {
        let arrayCopy = [...preparationInstructions];
        arrayCopy[index] = event.target.value;
        setPreparationInstructions(arrayCopy);
    };

    const handleAddPreparationStepRow = (event) => {
        let arrayCopy = [...preparationInstructions];
        arrayCopy.push('');
        setPreparationInstructions(arrayCopy);
    };

    const handleRemovePreparationStepRow = (event, index) => {
        const arrayCopy = [...preparationInstructions];
        arrayCopy.splice(index, 1);
        setPreparationInstructions(arrayCopy);
    };

    /*******************************************
     * END :: PREPARATION INSTRUCTION HANDLERS *
     ******************************************/

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(fields);
        console.log(mainImage);

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
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </Helmet>

            {/*{mainImageUploadError &&*/}
            {/*    <CustomSnackbar message={mainImageUploadError} severity='error' isOpen={true} />*/}

            {/*}*/}

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
                                                    return <MenuItem key={index}
                                                                     value={category.sys.id}>{category.fields.name}</MenuItem>
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

                                <section style={{marginTop: "25px"}}>

                                    <h2>Recipe Image</h2>

                                    <ImageUploader
                                        buttonText='Choose Recipe Image'
                                        imgExtension={['.jpg', '.jpeg', '.png', '.gif']}
                                        maxFileSize={5242880}
                                        fileSizeError="5MB is the max allowed image upload size."
                                        fileTypeError="Only support JPG/JPEG, GIF, and PNG image types."
                                        setMainImage={setMainImage}
                                    />

                                </section>

                                <IngredientList
                                    ingredientsList={ingredientsList}
                                    handleIngredientInputChange={handleIngredientInputChange}
                                    handleAddIngredientRow={handleAddIngredientRow}
                                    handleRemoveIngredientRow={handleRemoveIngredientRow}
                                />

                                <PreparationStepList
                                    preparationStepList={preparationInstructions}
                                    handlePreparationStepInputChange={handlePreparationStepInputChange}
                                    handleAddPreparationStepRow={handleAddPreparationStepRow}
                                    handleRemovePreparationStepRow={handleRemovePreparationStepRow}
                                />

                                <Grid container
                                      spacing={0}
                                      direction="column"
                                      alignItems="center"
                                      justify="center"
                                      style={{ minHeight: '10vh' }}
                                >

                                    <Grid xs={12}>

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

                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
};

export default CreateRecipeContainer;