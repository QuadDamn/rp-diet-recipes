import { getEntriesByContentType } from '../utils/contentfulDelivery';

export const FETCH_RECIPE_CATEGORIES = 'FETCH_RECIPE_CATEGORIES';
export const FETCH_RECIPE_CATEGORIES_SUCCESS = 'FETCH_RECIPE_CATEGORIES_SUCCESS';
export const FETCH_RECIPE_CATEGORIES_FAILURE = 'FETCH_RECIPE_CATEGORIES_FAILURE';

const RECIPE_CATEGORY_CONTENT_TYPE = 'recipeCategories';

const fetchRecipeCategories = () => {
    return {
        type: FETCH_RECIPE_CATEGORIES
    }
};

const fetchRecipeCategoriesSuccess = (recipeCategories) => {
    return {
        type: FETCH_RECIPE_CATEGORIES_SUCCESS,
        recipeCategories
    }
};

const fetchRecipeCategoriesFailure = (error) => {
    return {
        type: FETCH_RECIPE_CATEGORIES_FAILURE,
        error
    }
};

export function fetchRecipeCategoriesAction() {
    return async (dispatch) => {
        dispatch(fetchRecipeCategories());

        try {
            const recipeCategories = await getEntriesByContentType(RECIPE_CATEGORY_CONTENT_TYPE, { order: 'fields.name'});
            dispatch(fetchRecipeCategoriesSuccess(recipeCategories));
        } catch (error) {
            dispatch(fetchRecipeCategoriesFailure(error));
        }
    }
}