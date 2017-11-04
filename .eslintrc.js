module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  rules: {
    'linebreak-style': 0,
    'comma-dangle': [2, 'always-multiline'],
    'no-console': 1
  }
};
