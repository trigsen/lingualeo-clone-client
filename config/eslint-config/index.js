module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "import",
        "@typescript-eslint",
        "promise"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:promise/recommended",
        'airbnb-base',
        'airbnb-typescript/base',
        "plugin:prettier/recommended"
    ],
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": "./tsconfig.json"
            }
        }
    },
    "rules": {
        "promise/prefer-await-to-then": 2,
        "@typescript-eslint/array-type": [2, {
            "default": "array",
            "readonly": "array"
        }],
        "@typescript-eslint/no-unnecessary-condition": 2,
        "@typescript-eslint/prefer-function-type": 1,
        "@typescript-eslint/promise-function-async": 2,
        "no-return-await": 0,
        "@typescript-eslint/return-await": 1,
        "@typescript-eslint/consistent-generic-constructors": 1,
        "@typescript-eslint/consistent-type-definitions": 2,
        "@typescript-eslint/member-ordering": [
            2,
            {
                "default": {
                    "memberTypes": [
                        "signature",
                        "field",
                        "constructor",
                        "get",
                        "set",
                        "method"
                    ],
                    "order": "alphabetically-case-insensitive"
                }
            }
        ],
        "@typescript-eslint/method-signature-style": 2,
        "import/prefer-default-export": 0,
        "import/named": 0,
        "import/no-unused-modules": [1, {"unusedExports": true}],
        "import/no-cycle": [2, { "ignoreExternal": true }],
        "import/no-self-import": 2,
        "import/no-unresolved": [
            2,
            { "caseSensitive": false }
        ],
        "import/newline-after-import": 2,
        "import/order": [
            2,
            {
                "alphabetize": {
                    "order": "asc"
                },
                "groups": [
                    "builtin",
                    "external",
                    "parent",
                    "internal",
                    "sibling",
                    "index"
                ],
                "newlines-between": "always"
            }
        ]
    }
}


