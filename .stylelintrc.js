module.exports = {
  extends: [
    "stylelint-config-standard",
    'stylelint-plugin-stylus/standard',
  ],
  rules: {
    "rule-empty-line-before": "never",
    "stylus/at-rule-empty-line-before": "never",
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": [
      true,
      {
        ignoreFontFamilies: ["Material Icons"]
      }
    ]
  },
};
