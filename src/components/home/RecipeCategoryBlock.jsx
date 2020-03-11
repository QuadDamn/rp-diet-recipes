import React from 'react';

const RecipeCategoryBlock = categories => {
  console.log(categories);

  return (
    <div className="widget">
      <h3>Recipe Categories</h3>
      <ul className="boxed">
        {categories.items.map((category, index) => {
          const boxShade = findBoxShade(index);

          return (
            <li className={boxShade} key={index}>
              <a href="#!" title={category.fields.name}>
                <i
                  className={`icon icon-themeenergy_${category.fields.iconName}`}
                />
                <span>{category.fields.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeCategoryBlock;

function findBoxShade(boxNumberPosition) {
  const boxNumberPositionAdjusted = boxNumberPosition + 1;

  if (boxNumberPositionAdjusted % 9 === 0) return 'medium';
  if (boxNumberPositionAdjusted % 8 === 0) return 'light';
  if (boxNumberPositionAdjusted % 7 === 0) return 'dark';
  if (boxNumberPositionAdjusted % 6 === 0) return 'light';
  if (boxNumberPositionAdjusted % 5 === 0) return 'dark';
  if (boxNumberPositionAdjusted % 4 === 0) return 'medium';
  if (boxNumberPositionAdjusted % 3 === 0) return 'dark';
  if (boxNumberPositionAdjusted % 2 === 0) return 'medium';

  return 'light';
}
