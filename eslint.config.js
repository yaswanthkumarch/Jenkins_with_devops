import globals from 'globals'; // Import globals package
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Spread the browser globals
        test: 'readonly',  // Add Jest globals here
        expect: 'readonly', // Add Jest globals here
        module: 'readonly'  // Add Jest globals here
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: '18.3' // Specify React version
      },
    },
    plugins: [
      react,
      'react-hooks',
      'react-refresh',
    ],
    rules: {
      // Your custom ESLint rules can be added here, or you can spread rules from plugins
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off', // Example rule customization
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
    },
  },
];
