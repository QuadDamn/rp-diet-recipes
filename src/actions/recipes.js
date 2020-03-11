import { getEntriesByContentType } from '../utils/contentfulDelivery';
import { createEntry } from '../utils/contentfulManagement';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS';
export const CREATE_RECIPE_FAILURE = 'CREATE_RECIPE_FAILURE';

export const RECIPE_FETCH_LIMIT = 12;

const RECIPE_CONTENT_TYPE = 'recipe';

const fetchRecipes = () => {
    return {
        type: FETCH_RECIPES
    }
};

const fetchRecipesSuccess = (recipes) => {
    return {
        type: FETCH_RECIPES_SUCCESS,
        recipes
    }
};

const fetchRecipesFailure = (error) => {
    return {
        type: FETCH_RECIPES_FAILURE,
        error
    }
};

const createRecipe = () => {
    return {
        type: CREATE_RECIPE
    }
};

const createRecipeSuccess = (recipe) => {
    return {
        type: CREATE_RECIPE_SUCCESS,
        recipe
    }
};

const createRecipeFailure = (error) => {
    return {
        type: CREATE_RECIPE_FAILURE,
        error
    }
};

export function fetchRecipesAction(skip, limit = 12) {
    return async (dispatch) => {
        dispatch(fetchRecipes());

        try {
            const recipes = await getEntriesByContentType(RECIPE_CONTENT_TYPE, {skip, limit});
            dispatch(fetchRecipesSuccess(recipes));
        } catch (error) {
            dispatch(fetchRecipesFailure(error));
        }
    }
}

export function createRecipeAction(recipeData, imageData) {

    console.log(recipeData);

    return async (dispatch) => {
        dispatch(createRecipe());

        try {
            const recipe = await createEntry(RECIPE_CONTENT_TYPE, recipeData, imageData);
            return dispatch(createRecipeSuccess(recipe));
        } catch (error) {
            return dispatch(createRecipeFailure(error));
        }
    }
}