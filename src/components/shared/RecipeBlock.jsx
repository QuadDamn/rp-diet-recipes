import React from 'react';

const RecipeBlock = ({sys, fields}) => {
    const titleForUrl = fields.title.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className="entry one-third">
            <figure>
                <img src={fields.mainImageLink} alt=""/>
                <figcaption><a href={`/recipe/${sys.id}/${titleForUrl}`}><i
                    className="icon icon-themeenergy_eye2"></i>
                    <span>View recipe</span></a></figcaption>
            </figure>
            <div className="container">
                <h2><a href={`/recipe/${sys.id}/${titleForUrl}`}>{fields.title}</a></h2>

                {/*<p>{fields.shortDescription}</p>*/}

                <div className="actions">
                    <div>
                        <div className="difficulty"><i className={`ico i-${fields.difficulty}`}></i><a
                            href="#">{fields.difficulty}</a></div>
                        <div className="likes"><i className="fa fa-heart"></i><a href="#">{fields.favoritesCount}</a>
                        </div>
                        <div className="comments"><i className="fa fa-comment"></i><a
                            href="recipe.html#comments">{fields.commentsCount}</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RecipeBlock;