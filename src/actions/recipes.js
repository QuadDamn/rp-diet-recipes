import { getEntriesByContentType } from '../utils/contentful';

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';

const RECIPE_CONTENT_TYPE = 'recipe';

const getAllRecipesSuccess = (recipes) => {
    return {
        type: FETCH_RECIPES_SUCCESS,
        recipes
    }
};

const getAllRecipesFailure = (error) => {
    return {
        type: FETCH_RECIPES_FAILURE,
        error
    }
};

export function getAllRecipesAction() {
    return async (dispatch) => {
        try {
            const recipes = await getEntriesByContentType(RECIPE_CONTENT_TYPE);
            dispatch(getAllRecipesSuccess(recipes));
        } catch (error) {
            dispatch(getAllRecipesFailure(error));
        }
    }
}