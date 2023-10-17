module.exports = {
   root: true,
   env: { browser: true, es2020: true },
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
   ],
   ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js'],
   parser: '@typescript-eslint/parser',
   plugins: ['react-refresh'],
   rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': [
         'warn',
         {
            endOfLine: 'auto',
            singleQuote: true,
            trailingComma: 'all',
            tabWidth: 3,
            semi: true,
            printWidth: 130,
            bracketSpacing: true,
         },
      ],
      'no-unused-vars': 'warn',
   },
};
