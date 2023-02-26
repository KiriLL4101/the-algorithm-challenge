module.exports = {
  extends: 'standard-with-typescript',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 0,
  },
}
