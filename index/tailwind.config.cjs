/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#FF7300",
            },
            height: {
                nav: "var(--nav-height)",
            },
        },
    },
    plugins: [],
};
