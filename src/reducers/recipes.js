import * as ACTIONS from '../actions/recipes';

const recipes = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_RECIPES:
            return {
                ...state,
                recipes: {
                    loading: true,
                    error: null,
                    data: {}
                }
            };
        case ACTIONS.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: {
                    loading: false,
                    error: null,
                    data: action.recipes
                },
            };
        case ACTIONS.FETCH_RECIPES_FAILURE:
            return {
                ...state,
                recipes: {
                    loading: false,
                    error: action.error,
                    data: {}
                },
            };
        default:
            return state;
    }
};

export default recipes;