import React from "react";

export default function RecipeCard() {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-2 p-1">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Chicken Briyani
                        <div className="badge badge-info bg-badge">
                            Indian Cuisine
                        </div>
                    </h2>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">Non-veg</div>
                        <div className="badge badge-outline">250kcals</div>
                    </div>
                    <p className="capitalize">
                        balanced, high-fiber, high-protein, low-carb, low-fat,
                        low-sodium
                    </p>
                    <div className="card-actions justify-center">
                        <button className="flex-1 btn btn-secondary">
                            Watch on YT
                        </button>
                        <button className="btn btn-primary ">
                            <p className="hidden sm:block">Add to Favourite</p>
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
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
