module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
          },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-key': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unsafe': 'error',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-stateless-function': 'error',
        'react/self-closing-comp': 'error',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
      },
    },
  ],
};
