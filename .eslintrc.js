module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    "no-duplicate-imports": "error",
    "no-console": 1,
    "no-unused-vars": [
      "error",
      { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
    ],
    // "no-empty-function": ["error", { "allow": ["functions"] }],
    "no-extra-semi": "error",
    "no-extra-label": "error"
    }
}
