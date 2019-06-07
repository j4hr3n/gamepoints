module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'off', // using webpack/ts aliases, so turning this off,
    'import/prefer-default-export': 'off', // default exports could be considered bad https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
  env: {
    browser: true,
  },
};
