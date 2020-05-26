// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    // parser moved to parser options to fix 'use the latest vue-eslint-parser' error
    parser: "babel-eslint",
    sourceType: "module",
  },
  env: {
    browser: true,
    jest: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    "standard",
    "plugin:vue/recommended", // required to lint *.vue files
    "plugin:prettier/recommended",
    "eslint:recommended",
    "prettier",
    "prettier/vue",
  ],
  plugins: [],
  rules: {
    // add your custom rules here
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0, // allow debugger during development
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "arrow-parens": 0, // allow paren-less arrow functions
    "generator-star-spacing": 0,
    indent: [2, 4, { SwitchCase: 1 }], // Indentation set to 2
    "no-tabs": 0, // Give you possibility to use tabs not only on the beginning of line.
    semi: [2, "always"], // Semicolon at the end of each statement
    "space-before-function-paren": [2, "never"], // No space between name of the function and brackets.
    "vue/html-indent": ["error", 4],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always",
      },
    ],
    "vue/name-property-casing": ["error", "kebab-case"],
  },
  overrides: [
    {
      files: [
        "*.vue",
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
      rules: {
        indent: "off",
        "vue/script-indent": ["error", 4],
      },
    },
  ],
};
