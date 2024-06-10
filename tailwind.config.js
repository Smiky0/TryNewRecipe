/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            badge: "#e39c58",
            navbtn: "#354b46",
        },
        extend: {},
        screens: {
            sm: "640px",
            // => @media (min-width: 576px) { ... }

            md: "768px",
            // => @media (min-width: 960px) { ... }

            lg: "1160px",
            // => @media (min-width: 1440px) { ... }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    primary: "#bffcfc",
                    secondary: "#ff6d4d",
                },
            },
        ],
    },
};
