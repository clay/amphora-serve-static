module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      forOf: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandProperties: true,
      objectLiteralShorthandMethods: true,
      octalLiterals: true,
      binaryLiterals: true,
      templateStrings: true,
      generators: true,
      modules: false
    }
  },
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  }
};
