import * as ACTIONS from '../actions/recipeCategories';

const recipeCategories = (state = {
    recipeCategories: {
        loading: false,
        error: null,
        data: []
    }}, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_RECIPE_CATEGORIES:
            return {
                ...state,
                recipeCategories: {
                    ...state.recipeCategories,
                    loading: true,
                }
            };
        case ACTIONS.FETCH_RECIPE_CATEGORIES_SUCCESS:
            const recipeCategories = state.recipeCategories.data.concat(action.recipeCategories.items);

            return {
                ...state,
                recipeCategories: {
                    loading: false,
                    error: null,
                    data: recipeCategories
                },
            };
        case ACTIONS.FETCH_RECIPE_CATEGORIES_FAILURE:
            return {
                ...state,
                recipeCategories: {
                    ...state.recipeCategories,
                    loading: false,
                    error: action.error,
                },
            };
        default:
            return state;
    }
};

export default recipeCategories;