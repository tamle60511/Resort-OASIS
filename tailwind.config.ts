import type { Config } from 'tailwindcss';
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./templates/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'hover-hover': {'raw': '(hover: hover)'},
            // => @media (hover: hover) { ... }
            "3xl": { max: "1719px" },
            // => @media (max-width: 1719px) { ... }
            "2xl": { max: "1419px" },
            // => @media (max-width: 1419px) { ... }
            xl: { max: "1179px" },
            // => @media (max-width: 1179px) { ... }
            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }
            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }
            sm: { max: "480px" },
            // => @media (max-width: 480px) { ... }
        },
        extend: {
            colors: {
                primary: {
                    50: "#edf1ee",
                    100: "#c6d3ca",
                    200: "#abbeb0",
                    300: "#84a18c",
                    400: "#6d8e76",
                    500: "#487254",
                    600: "#42684c",
                    700: "#33513c",
                    800: "#283f2e",
                    900: "#1e3023",
                },
                secondary: {
                    50: "#fefefd",
                    100: "#fcfbf8",
                    200: "#fbf9f5",
                    300: "#f9f7f0",
                    400: "#f8f5ed",
                    500: "#f6f3e9",
                    600: "#e0ddd4",
                    700: "#afada5",
                    800: "#878680",
                    900: "#676662",
                },
                n: {
                    100: "#e2e6e4",
                    200: "#c4cdc9",
                    300: "#a7b4ae",
                    400: "#8a9b93",
                    500: "#6e8177",
                    600: "#55645c",
                    700: "#3c4641",
                    800: "#232926",
                },
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
            },
            spacing: {
                0.25: "0.0625rem",
                0.75: "0.1875rem",
                4.5: "1.125rem",
                5.5: "1.375rem",
                6.5: "1.75rem",
                7.5: "1.875rem",
                8.5: "2.125rem",
                9.5: "2.375rem",
                13: "3.25rem",
                13.5: "3.375rem",
                15: "3.75rem",
                17: "4.25rem",
                18: "4.5rem",
                19: "4.75rem",
                21: "5.25rem",
                22: "5.5rem",
                23: "5.75rem",
                25: "6.25rem",
                26: "6.5rem",
                30: "7.5rem",
                34: "8.5rem",
                38: "9.5rem",
                42: "10.5rem",
                54: "13.5rem",
                58: "14.5rem",
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
            transitionTimingFunction: {
                DEFAULT: "linear",
            },
            borderWidth: {
                DEFAULT: "0.0625rem",
                0: "0",
                2: "0.125rem",
                3: "0.1875rem",
                4: "0.25rem",
                8: "0.5rem",
            },
            fontFamily: {
                sans: ["var(--font-dm-sans)"],
                "dm-serif": ["var(--font-dm-serif)"],
                "libre-bodoni": ["var(--font-libre-bodoni)"],
            },
            fontSize: {
                0: ["0", "0"],
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
        require("@headlessui/tailwindcss")({ prefix: "ui" }),
        plugin(function ({ addBase, addComponents, addUtilities }) {
            addBase({
                html: {
                    "@apply text-[1rem]": {},
                },
            });
            addComponents({
                ".container": {
                    "@apply max-w-[93.5rem] mx-auto px-8 md:px-5":
                        {},
                },
                ".container-lg": {
                    "@apply container max-w-[75.375rem]":
                        {},
                },
                ".btn": {
                    "@apply inline-flex items-center justify-center h-11 px-6 space-x-2 border border-primary-500 font-sans text-button font-semibold transition-colors":
                        {},
                },
                ".btn-primary": {
                    "@apply btn bg-primary-500 text-white hover:bg-primary-700":
                        {},
                },
                ".btn-secondary": {
                    "@apply btn text-primary-500 hover:bg-primary-500 hover:text-white":
                        {},
                },
                ".btn-lg": {
                    "@apply btn h-16 px-8":
                        {},
                },
                ".play": {
                    "@apply inline-flex items-center justify-center w-28 h-28 pl-1 rounded-full bg-primary-500 transition-colors hover:bg-primary-600 xl:w-24 xl:h-24":
                        {},
                },
                ".text-h1": {
                    "@apply font-dm-serif text-[3.75rem] leading-[4.5rem] font-normal text-primary-500":
                        {},
                },
                ".text-h2": {
                    "@apply font-dm-serif text-[2.5rem] leading-[3rem] font-normal text-primary-500":
                        {},
                },
                ".text-h3": {
                    "@apply font-dm-serif text-[2rem] leading-[2.4rem] font-normal text-primary-500":
                        {},
                },
                ".text-h4": {
                    "@apply text-[1.5rem] leading-[1.8rem] font-bold italic text-primary-500":
                        {},
                },
                ".text-h4-libre": {
                    "@apply font-libre-bodoni text-[1.5rem] leading-[1.8rem] font-bold":
                        {},
                },
                ".text-h5": {
                    "@apply font-dm-serif text-[1.25rem] leading-[1.5rem] font-normal tracking-normal text-primary-500":
                        {},
                },
                ".text-h6": {
                    "@apply font-dm-serif text-[1rem] leading-[1.2rem] font-normal text-primary-500":
                        {},
                },
                ".text-h6-sans": {
                    "@apply text-[1rem] leading-[1.2rem] font-bold italic":
                        {},
                },
                ".text-h7": {
                    "@apply text-[0.875rem] leading-[1.125rem] tracking-normal":
                        {},
                },
                ".text-16r": {
                    "@apply text-[1rem] leading-[1.5rem] tracking-normal":
                        {},
                },
                ".text-16m": {
                    "@apply text-[1rem] leading-[1.5rem] font-medium tracking-normal":
                        {},
                },
                ".text-14r": {
                    "@apply text-[0.875rem] leading-[1.5rem] tracking-[.03rem]":
                        {},
                },
                ".text-14m": {
                    "@apply text-[0.875rem] leading-[1.5rem] font-medium tracking-normal":
                        {},
                },
                ".text-14b": {
                    "@apply text-[0.875rem] leading-[1.375rem] font-bold tracking-normal":
                        {},
                },
                ".text-subtitle": {
                    "@apply text-[0.75rem] leading-[1.125rem] font-medium tracking-[.24em]":
                        {},
                },
                ".text-button": {
                    "@apply text-[0.9375rem] leading-[1.3125rem] font-bold tracking-normal":
                        {},
                },
                ".subtitle": {
                    "@apply mb-6 text-subtitle uppercase text-n-500":
                        {},
                },
            });
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                },
            });
        }),
    ],
}
export default config
