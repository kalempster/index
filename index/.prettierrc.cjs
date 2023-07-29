module.exports = {
    "tabWidth": 4,
    "useTabs": false,
    "bracketSameLine": true,
    "trailingComma": "none",
    "semi": true,
    "quoteProps": "as-needed",
    "plugins": [
        require.resolve("prettier-plugin-astro")
    ],
    "overrides": [
        {
            "files": "*.astro",
            "options": {
                "parser": "astro"
            }
        }
    ]
}