module.exports = {
  root: true,

  ignorePatterns: ["node_modules/", "**/*.mjs"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
  },

  extends: ["standard-with-typescript", "./eslint/index.json", "prettier"],
  rules: {
    eqeqeq: ["error", "smart"],
    "object-shorthand": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "*" },
      { blankLine: "any", prev: "expression", next: "expression" },
      { blankLine: "always", prev: "iife", next: "iife" },
      { blankLine: "any", prev: "*", next: ["case"] },
      { blankLine: "any", prev: "directive", next: "directive" },
      { blankLine: "any", prev: "const", next: "const" },
      { blankLine: "any", prev: "let", next: "let" },
      { blankLine: "any", prev: "var", next: "var" },
      { blankLine: "any", prev: "import", next: "import" },
      { blankLine: "any", prev: "export", next: "export" },
      {
        blankLine: "always",
        prev: "*",
        next: ["cjs-import", "cjs-export"],
      },
      {
        blankLine: "always",
        prev: ["cjs-import", "cjs-export"],
        next: "*",
      },
      { blankLine: "any", prev: "cjs-import", next: "cjs-import" },
      { blankLine: "any", prev: "cjs-export", next: "cjs-export" },
    ],
  },
}
