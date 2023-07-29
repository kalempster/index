/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        screens: {
            xs: "335px",
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px"
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                primary: "#FF7300"
            },
            height: {
                nav: "var(--nav-height)"
            },
            backgroundImage: {
                moon: "url('/src/assets//moon.avif')"
            }
        }
    },
    plugins: []
};
