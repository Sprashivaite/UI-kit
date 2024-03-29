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
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 'off',
  },
  globals: {
    $: true,
    Chart: true,
  },
};
