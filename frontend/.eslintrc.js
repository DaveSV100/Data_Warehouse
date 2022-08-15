module.exports = {
  parser: '@babel/eslint-parser',
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/babel',
    'next/core-web-vitals',
  ],
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': 0,
  },
};
