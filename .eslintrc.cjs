module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
  },

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  extends: ["eslint:recommended", "plugin:react/recommended"],

  rules: {
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "warn",
    "react/prop-types": "off",
  },
};
