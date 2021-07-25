module.exports = {
  extends: [
    "stylelint-config-standard",
    'stylelint-plugin-stylus/standard',
  ],
  rules: {
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": [
      true,
      {
        ignoreFontFamilies: ["Material Icons"]
      }
    ],
    "stylus/no-eol-whitespace": null,
    "indentation": 2,
    "string-quotes": "single",
  },
};
