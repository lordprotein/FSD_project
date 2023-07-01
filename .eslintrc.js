module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:boundaries/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
    'react-hooks',
    'unused-imports',
    'sort-destructure-keys',
    'better-styled-components'
  ],
  rules: {
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      { caseSensitive: false }
    ],
    'react/require-default-props': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandLast: true,
        reservedFirst: true
      }
    ],
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-unused-modules': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        pathGroups: [
          { group: 'internal', position: 'after', pattern: 'pages/**' },
          { group: 'internal', position: 'after', pattern: 'widgets/**' },
          { group: 'internal', position: 'after', pattern: 'features/**' },
          { group: 'internal', position: 'after', pattern: 'entities/**' },
          { group: 'internal', position: 'after', pattern: 'shared/**' }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['app/**']
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['pages/*/**']
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['widgets/*/**']
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['features/*/**']
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['entities/*/**']
          },
          {
            message:
              'Private imports are prohibited, use public imports instead',
            group: ['shared/*/*/**']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/app']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/pages']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/widgets']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/features']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/entities']
          },
          {
            message:
              'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/shared']
          }
        ]
      }
    ],
    'boundaries/element-types': [
      'warn',
      {
        default: 'disallow',
        rules: [
          {
            from: 'app',
            allow: ['pages', 'widgets', 'features', 'entities', 'shared']
          },
          {
            from: 'pages',
            allow: ['widgets', 'features', 'entities', 'shared']
          },
          { from: 'widgets', allow: ['features', 'entities', 'shared'] },
          { from: 'features', allow: ['entities', 'shared'] },
          { from: 'entities', allow: ['shared'] },
          { from: 'shared', allow: ['shared'] }
        ]
      }
    ],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-shadow': 'off',
    'import/no-commonjs': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-param-reassign': 'off',
    // 'no-param-reassign': ['error', { props: true }],
    'react/jsx-key': 'error',
    'react/display-name': 'off',
    'no-return-assign': ['error', 'always'],
    'import/no-cycle': 'off',
    'better-styled-components/sort-declarations-alphabetically': 2
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': { typescript: {} },
    'boundaries/elements': [
      { type: 'app', pattern: 'app/*' },
      { type: 'pages', pattern: 'pages/*' },
      { type: 'widgets', pattern: 'widgets/*' },
      { type: 'features', pattern: 'features/*' },
      { type: 'entities', pattern: 'entities/*' },
      { type: 'shared', pattern: 'shared/*' }
    ],
    'boundaries/ignore': ['**/*.test.*']
  },
  overrides: [
    { files: ['**/*.test.*'], rules: { 'boundaries/element-types': 'off' } },
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
}
