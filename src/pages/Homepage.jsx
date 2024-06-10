import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";
import favicon from "../assets/favourite.svg";
import searchicon from "../assets/search.svg";

const APP_ID = import.meta.env.VITE_API_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Homepage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const fetchRecipe = async (searchQuery) => {
        setLoading(true);
        setRecipes([]);
        setNoResults(false);
        try {
            const res = await fetch(
                `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${API_KEY}&q=${searchQuery}&type=public`
            );
            const data = await res.json();
            setRecipes(data.hits);
            setNoResults(recipes.length < 1);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipe("pizza");
    }, []);
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        fetchRecipe(searchQuery);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
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
                {/* search field.. */}
                <div className="flex-1 flex justify-center gap-4 m-2">
                    <div className="flex form-control w-full max-w-lg">
                        <input
                            type="text"
                            placeholder="Search recipes here..."
                            className="input input-bordered w-full rounded-full"
                            value={searchQuery}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <button className="btn rounded-full" onClick={handleSearch}>
                        <img src={searchicon} alt="" />
                    </button>
                </div>
                {/* favourite button.. */}
                <Link to="/favourites" className="flex-none px-2">
                    <button className="btn rounded-lg bg-navbtn">
                        <img src={favicon} alt="favourite icon" />
                        <p className="hidden md:block">Favourites</p>
                    </button>
                </Link>
            </div>
            <div className="flex justify-center">
                {recipes.length < 1 && noResults ? (
                    <div className="text-2xl text-pretty m-10">
                        <span>Sorry, no recipe found.. 😔</span>
                    </div>
                ) : (
                    <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {loading &&
                            Array(4)
                                .fill()
                                .map((_, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-4 w-80"
                                    >
                                        <div className="skeleton h-48 w-full"></div>
                                        <div className="skeleton h-4 w-28"></div>
                                        <div className="skeleton h-4 w-52"></div>
                                        <div className="skeleton h-4 w-full"></div>
                                        <div className="skeleton h-4 w-64"></div>
                                    </div>
                                ))}

                        {!loading &&
                            recipes.map(({ recipe }, index) => (
                                <RecipeCard key={index} recipe={recipe} />
                            ))}
                    </div>
                )}
            </div>
        </>
    );
}
