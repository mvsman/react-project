module.exports = {
  env: {
    browser: true,
    es2021: true,
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
  plugins: ['react', '@typescript-eslint', 'i18next'],
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
  },
  globals: {
    __IS_DEV__: true,
  },
};
