module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['build', '.eslintrc.js'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript'
  ],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        filter: {
          regex: '^__dirname$',
          match: false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',  
      },
    ],
    'no-underscore-dangle': ['error', { allow: ['__dirname'] }],
  },
  overrides: [
    {
      files: ['webpack.config.mjs'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
};
