module.exports = {
  root: true,
  env: {
    es6: true,
    es5: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
  },
};
