module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  rules: {
    curly: 'error',
    'comma-dangle': 0, // RS
    'comma-spacing': 'error',
    'dot-location': ['error', 'property'],
    'eol-last': 'error',
    eqeqeq: ['error', 'allow-null'],
    'key-spacing': ['error', { beforeColon: false }],
    'no-dupe-keys': 'error',
    'no-redeclare': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'prefer-template': 'warn',
    semi: ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'jsx-quotes': 'error',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'es5', // RS change ¯\_(ツ)_/¯
        bracketSpacing: true,
        jsxBracketSameLine: false,
        tabWidth: 2,
      },
    ],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
};
