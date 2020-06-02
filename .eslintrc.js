module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'off',
  },
};
