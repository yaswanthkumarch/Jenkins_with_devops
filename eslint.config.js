export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
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
    plugins: [
      react,
      'react-hooks',
      'react-refresh',
    ],
    rules: {
      // Your ESLint rules
    },
  },
];
