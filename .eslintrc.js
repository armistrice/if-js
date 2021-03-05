module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'max-classes-per-file': ['error', 10],
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': ['error', "BinaryExpression[operator='in']"],
  },
};
