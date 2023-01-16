module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
    ],
    plugins: [
        'react'
    ],
    "rules": {
        "react/function-component-definition": [2, {
            "namedComponents": "arrow-function",
            "unnamedComponents": "arrow-function"
        }],
        "react/jsx-handler-names": [1, { checkLocalVariables: true }],
        "react/jsx-key": 1,
        "react/jsx-props-no-spreading": 0,
        "react/jsx-sort-props": 2,
        "react/no-direct-mutation-state": 2,
    }
}