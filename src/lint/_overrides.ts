module.exports = [
  {
    files: ["*.ts", "*.tsx"],
    rules: {
      "no-unused-expressions": 0,
      "@typescript-eslint/no-unused-expressions": 0,
      "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-parameter-properties": 0,
      "@typescript-eslint/camelcase": 0,
      "@typescript-eslint/no-non-null-assertion": 0,
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-inferrable-types": 0,
      "@typescript-eslint/explicit-member-accessibility": [
        2,
        { accessibility: "no-public" },
      ],

      "@typescript-eslint/explicit-function-return-type": [
        1,
        { allowTypedFunctionExpressions: true },
      ],
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true, typedefs: true },
      ],
    },
  },
  {
    files: ["*.md"],
    globals: {
      React: true,
      ReactDOM: true,
    },
    rules: {
      "no-console": 0,
      "no-plusplus": 0,
      "eol-last": 0,
      "no-script-url": 0,
      "prefer-rest-params": 0,
    },
  },
];
