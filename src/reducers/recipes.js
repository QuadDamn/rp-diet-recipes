import * as ACTIONS from '../actions/recipes';

const recipes = (state = {
    recipes: {
        loading: false,
        error: null,
        total: 0,
        data: []
    }}, action) => {

    switch (action.type) {
        case ACTIONS.FETCH_RECIPES:
            return {
                ...state,
                recipes: {
                    ...state.recipes,
                    loading: true,
                }
            };
        case ACTIONS.FETCH_RECIPES_SUCCESS:
            const recipeData = state.recipes.data.concat(action.recipes.items);

            return {
                ...state,
                recipes: {
                    loading: false,
                    error: null,
                    total: action.recipes.total,
                    data: recipeData
                },
            };
        case ACTIONS.FETCH_RECIPES_FAILURE:
            return {
                ...state,
                recipes: {
                    ...state.recipes,
                    loading: false,
                    error: action.error,
                },
            };
        case ACTIONS.CREATE_RECIPE:
            return {
                ...state,
                recipes: {
                    ...state.recipes,
                    loading: true,
                }
            }
        case ACTIONS.CREATE_RECIPE_SUCCESS:
            return {
                ...state,
                recipes: {
                    total: state.recipes.total + 1,
                    data: [...state.recipes.data, action.recipe]
                }
            }
        case ACTIONS.CREATE_RECIPE_FAILURE: {
            return {
                ...state,
                recipes: {
                    ...state.recipes,
                    loading: false,
                    error: action.error,
                },
            }
        }
        default:
            return state;
    }
};

export default recipes;