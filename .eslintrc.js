module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/prefer-default-export": "off",
  },
};
