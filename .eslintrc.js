module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery":true,
        "node":true

    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "func-names": 0,
        "linebreak-style": 0,
        "quotes":"off",
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "no-restricted-syntax": 0,
        "no-underscore-dangle": 0,
        "no-await-in-loop": 0,
        "no-tabs": ["error", { allowIndentationTabs: true }] ,
        "eqeqeq": "off",
        "curly": "error",
        "prefer-arrow-callback": "off",
        "radix": ["error", "as-needed"],
        "one-var":["error", { var: "never" }],
        "indent":"off",
        "prefer-const":"off",
        "comma-spacing": "off",
        "wrap-iife":"off",
        "semi":["error", "always"],
        "no-sequences":"off",
        "space-before-blocks":"error",
        "space-before-function-paren":"error",
        "arrow-parens":"off",
        "no-trailing-spaces":"off",
        "object-curly-spacing":"error",
        "comma-dangle":["error", "never"],
        "no-shadow":"off",
        "eol-last":"off",
        "padded-blocks":["error", { "blocks": "never" }],
        "no-use-before-define":"off",
        "no-unused-expressions":"off",
        "object-curly-newline":["error","always"],
        "no-plusplus":"off",
        "no-console":"off",
        "no-useless-escape":"off",
        "space-infix-ops":"error",
        "no-unused-vars":"off",
        "one-var-declaration-per-line":"off",
        "import/extensions":"off",
        "import/no-mutable-exports":"off",
        "no-var":"off",
        "no-undef":"off",
        "vars-on-top":"error",
        "default-case":"off",
        "brace-style":"error",
        "prefer-template":"off",
        "max-len":"off",
        "consistent-return":"off",
        "object-shorthand":"off"
    }
        
};