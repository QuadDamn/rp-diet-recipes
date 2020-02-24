import * as ACTIONS from '../actions/recipeCategories';

const recipeCategories = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_RECIPE_CATEGORIES:
            return {
                ...state,
                recipeCategories: {
                    loading: true,
                    error: null,
                    data: {}
                }
            };
        case ACTIONS.FETCH_RECIPE_CATEGORIES_SUCCESS:
            return {
                ...state,
                recipeCategories: {
                    loading: false,
                    error: null,
                    data: action.recipeCategories
                },
            };
        case ACTIONS.FETCH_RECIPE_CATEGORIES_FAILURE:
            return {
                ...state,
                recipeCategories: {
                    loading: false,
                    error: action.error,
                    data: {}
                },
            };
        default:
            return state;
    }
};

export default recipeCategories;