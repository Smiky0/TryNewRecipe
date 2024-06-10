import React from "react";
import RecipeCard from "../components/RecipeCard";
const fav = false;

export default function FavouritePage() {
    return (
        <div className="flex justify-center">
            {!fav && (
                <h3 className="text-xl text-pretty m-10">
                    You haven't added anything as your favourites yet..
                </h3>
            )}
            {fav && (
                <div>
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            )}
        </div>
    );
}
