import React, { useSelector } from 'react';

const RecipeViewContainer = props => {
  console.log(props.match.params);

  const recipeId = props.match.params.recipeId;
  const recipeSelector = useSelector(state =>
    state.recipes.data.length > 0
      ? state.recipes.data.find(recipe => recipe.sys.id === recipeId)
      : null
  );

  console.log(recipeSelector);

  return <div>Recipe View Container</div>;
};

export default RecipeViewContainer;
