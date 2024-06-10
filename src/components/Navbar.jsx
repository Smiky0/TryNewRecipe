import React from "react";
import { Link } from "react-router-dom";
import homeicon from "../assets/home.svg";
import favicon from "../assets/favourite.svg";

export default function Navbar() {
    return (
        <div>
            <Link to="/" className="navbar bg-base-100">
                {/*logo*/}
                <div className="flex-none">
                    <a className="btn btn-ghost text-xl hidden sm:block">
                        NewRecipe
                    </a>
                </div>
                {/* search field.. */}
                <div className="flex-1 flex justify-center gap-4 m-2">
                    <div className="form-control w-full max-w-lg">
                        <input
                            type="text"
                            placeholder="Search recipes here..."
                            className="input input-bordered w-full rounded-full"
                        />
                    </div>
                    {/*Home button */}
                    <Link to="/" className="flex-none">
                        <button className="btn rounded-lg">
                            <img src={homeicon} alt="home icon" />
                            <p className="hidden sm:block">Home</p>
                        </button>
                    </Link>
                    {/* favourite button.. */}
                    <Link to="/favourites" className="flex-none">
                        <button className="btn rounded-lg">
                            <img src={favicon} alt="favourite icon" />
                            <p className="hidden sm:block">Favourites</p>
                        </button>
                    </Link>
                </div>
            </Link>
        </div>
    );
}
