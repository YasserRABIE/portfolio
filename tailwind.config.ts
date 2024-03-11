import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "light-1": "#efefeb",
                "light-2": "#DEDED7",
                "dark-1": "#3A3733",
                "dark-2": "#6E6860",
                "dark-primary": "#202020",
                "dark-secondry": "#020617",
            },
            fontFamily: {
                madimi: ["Madimi One", "sans-serif"],
                bebas: ["Bebas Neue", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                japanese: ["Slackside One", "cursive"],
                chinese: ["Zhi Mang Xing", "cursive"],
                archivo: ["Archivo Black", "sans-serif"],
            },
            screens: {
                "2xl": { max: "1400px" },

                xl: { max: "1279px" },

                lg: { max: "1023px" },

                md: { max: "767px" },

                sm: { max: "639px" },
            },
        },
    },
    plugins: [],
};
export default config;
