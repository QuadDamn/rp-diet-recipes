import recipes from './recipes'
import recipeCategories from "./recipeCategories";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    recipes,
    recipeCategories
});

export default rootReducer;