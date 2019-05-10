module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ]
};
