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

import {
    Button,
    Grid,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField
} from '@material-ui/core';
import ImageEditor from "../components/shared/ImageEditor";
import getCroppedImage from "../utils/getCroppedImage";

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

    const [mainImage, setMainImage] = useState();
    const [mainImageUploadError, setMainImageUploadError] = useState();
    const [mainImageDialogOpen, setMainImageDialogOpen] = useState(false);
    const [croppedMainImage, setCroppedMainImage] = useState();

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

    const handleMainImageInputChange = async (event) => {
        const imageFilePath = event.target.value;
        const imageFile = event.target.files[0];

        const imageDataUrl = await validateImage(imageFilePath, imageFile);

        if (!"error" in imageDataUrl) {
            setMainImage(imageDataUrl);
            setMainImageDialogOpen(true);
        } else {
            setMainImageUploadError(imageDataUrl.error);
        }
    };

    const handleMainImageModalClose = (event) => {
      setMainImageDialogOpen(false);
    };

    const handleMainImageSave = async (croppedAreaPixels) => {
        try {
            const croppedImage = await getCroppedImage(
                mainImage,
                croppedAreaPixels
            );

            setCroppedMainImage(croppedImage);
            setMainImageDialogOpen(false);
        } catch (error) {
            alert('Image crop failed.  Please try again.');
            console.error(error);
        }
    };

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

            {mainImageUploadError &&
                <CustomSnackbar message={mainImageUploadError} severity='error' isOpen={true} />

            }

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

                                <TextField
                                    type="file"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="mainImage"
                                    // label="Photo Upload"
                                    name="mainImage"
                                    // value={mainImage ? mainImage.name : ''}
                                    onChange={handleMainImageInputChange}
                                    // InputProps={{
                                    //     startAdornment: <InputAdornment position="start" />,
                                    // }}
                                    // onChange={handleFieldChange}
                                    // helperText={fieldError}
                                    // error={!!fieldError}
                                />

                                <ImageEditor mainImage={mainImage} open={mainImageDialogOpen} onClose={handleMainImageModalClose} handleMainImageSave={handleMainImageSave} />

                                {croppedMainImage &&

                                    <img src={croppedMainImage} />

                                }

                                {/*<ImageUploader />*/}

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