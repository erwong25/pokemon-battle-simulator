module.exports = {
  root: true,
  parser: "hermes-eslint",
  plugins: ["ft-flow", "@stylexjs"],
  extends: ["eslint:recommended", "plugin:ft-flow/recommended"],
  rules: {
    "@stylexjs/valid-styles": "error",
  },
};
