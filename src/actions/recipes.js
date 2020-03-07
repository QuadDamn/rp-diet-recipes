import { getEntriesByContentType } from '../utils/contentfulDelivery';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';

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

export function fetchRecipesAction(skip, limit = RECIPE_FETCH_LIMIT) {
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