const lint = Object.assign(
  {},
  require('@remy/eslint/next'),
  require('./eslintrc.giulia')
);

module.exports = lint;
