module.exports = {
  extends: ["react-app"],
  rules: {},
  overrides: [
    {
      files: ["**/*.js?(x)"],
      rules: {
        // ******** add ignore rules here *********
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
};
