import * as ACTIONS from '../actions/recipes';

const recipes = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: action.recipes,
                error: ''
            };
        case ACTIONS.FETCH_RECIPES_FAILURE:
            return {
                ...state,
                recipes: {},
                error: action.error
            };
        default:
            return state;
    }
};

export default recipes;