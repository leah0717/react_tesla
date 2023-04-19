module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jasmine: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
    // jsxPragma: 'React',
    // ecmaFeatures: {
    //   jsx: true
    // }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'react/display-name': 'off'
  }
}
