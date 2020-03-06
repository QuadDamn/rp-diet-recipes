import React from "react";
import ContentLoader from "react-content-loader";

const RecipeBlockLoader = () => {
    return (
        <ContentLoader
            height={507}
            width={900}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
        >
            <rect x="0" y="60" rx="0" ry="0" width="250" height="120" />
            <rect x="0" y="189" rx="0" ry="0" width="250" height="15" />
            <rect x="0" y="211" rx="0" ry="0" width="200" height="15" />
            <rect x="300" y="60" rx="0" ry="0" width="250" height="120" />
            <rect x="300" y="189" rx="0" ry="0" width="250" height="15" />
            <rect x="300" y="211" rx="0" ry="0" width="200" height="15" />
            <rect x="600" y="60" rx="0" ry="0" width="250" height="120" />
            <rect x="600" y="189" rx="0" ry="0" width="250" height="15" />
            <rect x="600" y="211" rx="0" ry="0" width="200" height="15" />

            <rect x="0" y="275" rx="0" ry="0" width="250" height="120" />
            <rect x="0" y="405" rx="0" ry="0" width="250" height="15" />
            <rect x="0" y="429" rx="0" ry="0" width="200" height="15" />
            <rect x="300" y="275" rx="0" ry="0" width="250" height="120" />
            <rect x="300" y="405" rx="0" ry="0" width="250" height="15" />
            <rect x="300" y="429" rx="0" ry="0" width="200" height="15" />
            <rect x="600" y="275" rx="0" ry="0" width="250" height="120" />
            <rect x="600" y="405" rx="0" ry="0" width="250" height="15" />
            <rect x="600" y="429" rx="0" ry="0" width="200" height="15" />
        </ContentLoader>
    );
};

export default RecipeBlockLoader;