module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:fsd/all',
    'airbnb-base',
  ],
  plugins: ['fsd'],
  rules: {
    'no-new': 'off',
    'no-underscore-dangle': 'off',
  },
  globals: {
    $: true,
  },
};
