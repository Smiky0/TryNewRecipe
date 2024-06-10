import React, { useState } from "react";

export default function RecipeCard({ recipe }) {
    const healthLabels = recipe.healthLabels.slice(0, 6);
    // checking if set to favourite
    const [isFavourite, setIsFavourite] = useState(
        localStorage.getItem("favourites")?.includes(recipe.label)
    );
    const addRecipeToFavourites = () => {
        // store favourites that is present in localstorage..
        let favourites = JSON.parse(localStorage.getItem("favourites")) || []; // empty array if nothing found
        const isRecipeAlreadyInFavourites = favourites.some(
            (fav) => fav.label === recipe.label
        );
        if (isRecipeAlreadyInFavourites) {
            favourites = favourites.filter((fav) => fav.label !== recipe.label);
            setIsFavourite(false);
        } else {
            favourites.push(recipe);
            setIsFavourite(true);
        }
        localStorage.setItem("favourites", JSON.stringify(favourites));
    };
    return (
        <div>
            <div className="card card-compact w-96 bg-base-200 shadow-xl m-2 p-1">
                <figure>
                    <img
                        src={recipe.image}
                        alt="recipe food"
                        className="object-cover cursor-pointer w-96 h-48 rounded-xl opacity-0 transition-opacity duration-300"
                        onClick={() => window.open(`${recipe.url}`, "_blank")}
                        onLoad={(e) => {
                            e.currentTarget.style.opacity = 1;
                        }}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title capitalize">{recipe.label}</h2>
                    <div className="badge badge-info bg-badge capitalize">
                        {recipe.cuisineType[0]} Cuisine
                    </div>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline capitalize">
                            {recipe.mealType[0]}
                        </div>
                        <div className="badge badge-outline">
                            {Math.round(recipe.calories)}kcals
                        </div>
                    </div>
                    <div className="text-pretty">
                        {healthLabels.map((label, index) => (
                            <span key={index} className="capitalize">
                                {label + ", "}
                            </span>
                        ))}
                    </div>

                    <div className="card-actions justify-center">
                        <button
                            className="flex-1 btn btn-secondary"
                            onClick={() =>
                                window.open(
                                    `https://www.youtube.com/results?search_query=${recipe.label}`,
                                    "_blank"
                                )
                            }
                        >
                            Watch on YouTube
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={addRecipeToFavourites}
                        >
                            {!isFavourite ? (
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                </div>
                            ) : (
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
