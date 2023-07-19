module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  // TODO:
  // update to disable-type-checked when eslint-config-standard-with-typescript is ready
  // https://typescript-eslint.io/linting/troubleshooting/#fixing-the-error
  ignorePatterns: [".eslintrc.cjs"],
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
    project: true,
    tsconfigRootDir: __dirname,
  },
};
