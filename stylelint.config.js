module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'no-duplicate-selectors': null,
    'no-descending-specificity': null,
    'string-quotes': 'single',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'extend',
          'if',
          'each',
          'include',
          'mixin',
          'for'
        ]
      }
    ]
  }
}
