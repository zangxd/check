const rules = require("./_rules");
const overrides = require("./_overrides");
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  globals: {
    require: true,
    Promise: true,
    process: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"] },
    },
  },
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "markdown", "react", "react-hooks"],
  rules,
  overrides,
};
