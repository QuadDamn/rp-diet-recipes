import { getEntriesByContentType } from '../utils/contentful';

export const FETCH_RECIPE_CATEGORIES = 'FETCH_RECIPE_CATEGORIES';
export const FETCH_RECIPE_CATEGORIES_SUCCESS = 'FETCH_RECIPE_CATEGORIES_SUCCESS';
export const FETCH_RECIPE_CATEGORIES_FAILURE = 'FETCH_RECIPE_CATEGORIES_FAILURE';

const RECIPE_CATEGORY_CONTENT_TYPE = 'recipeCategories';

const getAllRecipeCategories = () => {
    return {
        type: FETCH_RECIPE_CATEGORIES
    }
};

const getAllRecipeCategoriesSuccess = (recipeCategories) => {
    return {
        type: FETCH_RECIPE_CATEGORIES_SUCCESS,
        recipeCategories
    }
};

const getAllRecipeCategoriesFailure = (error) => {
    return {
        type: FETCH_RECIPE_CATEGORIES_FAILURE,
        error
    }
};

export function getAllRecipeCategoriesAction() {
    return async (dispatch) => {
        dispatch(getAllRecipeCategories());

        try {
            const recipeCategories = await getEntriesByContentType(RECIPE_CATEGORY_CONTENT_TYPE, { order: 'fields.name'});
            dispatch(getAllRecipeCategoriesSuccess(recipeCategories));
        } catch (error) {
            dispatch(getAllRecipeCategoriesFailure(error));
        }
    }
}