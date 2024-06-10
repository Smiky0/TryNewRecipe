import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";
import homeicon from "../assets/home.svg";

export default function FavouritePage() {
    const [forceUpdate, setForceUpdate] = useState(false);
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const fav = favourites.length > 0 ? true : false;
    const removeFavourites = () => {
        localStorage.removeItem("favourites");
        setForceUpdate(!forceUpdate);
    };

    return (
        <>
            <div className="navbar bg-base-100 cursor-default">
                {/*logo*/}
                <div className="flex-none">
                    <Link
                        to="/"
                        className="btn btn-ghost text-xl hidden sm:block"
                    >
                        NewRecipe
                    </Link>
                </div>
                <div className="text-2xl flex-1 justify-center items-center gap-4 m-2">
                    <span>My Favourites</span>
                    <button
                        className="btn rounded-full"
                        onClick={removeFavourites}
                    >
                        Remove All
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="red"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                {/*Home button */}
                <Link to="/" className="flex-right px-2">
                    <button className="btn rounded-lg bg-navbtn">
                        <img src={homeicon} alt="home icon" />
                        <p className="hidden md:block">Home</p>
                    </button>
                </Link>
            </div>
            <div className="flex justify-center">
                {!fav && (
                    <h3 className="text-2xl text-pretty m-10">
                        You haven't added anything as your favourites yet.😪😪
                    </h3>
                )}
                {fav && (
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {favourites.map((recipe) => (
                                <RecipeCard
                                    key={recipe.label}
                                    recipe={recipe}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
