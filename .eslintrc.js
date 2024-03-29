module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [0, { extensions: ['.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    // usless rule, conflicts with prettier
    'implicit-arrow-linebreak': 'off',
    'import/extensions': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, ignoreAttribute: ['data-testid'] },
    ],
    'linebreak-style': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'object-curly-newline': 'off',
    'no-undef': 'off',
    'operator-linebreak': 'off',
    'react/no-array-index-key': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
    {
      files: ['src/**/model/{slice,slices}/*.ts'],
      rules: {
        'no-param-reassign': ['error', { props: false }],
      },
    },
  ],
};
