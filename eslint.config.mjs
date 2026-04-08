import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,
  ignores: [
    '**/dist/**',
    '**/node_modules/**',
    'server/generated/**',
  ],
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
}, {
  rules: {
    'node/prefer-global/process': 'off',
    'node/prefer-global/buffer': 'off',
    'e18e/prefer-static-regex': 'off',
    'react-refresh/only-export-components': 'off',
    'style/max-statements-per-line': 'off',
    'ts/no-use-before-define': 'off',
    'react-dom/no-dangerously-set-innerhtml': 'off',
  },
}, {
  files: ['server/**/*.ts'],
  rules: {
    'ts/no-explicit-any': 'off',
    'ts/no-unsafe-argument': 'off',
    'ts/no-unsafe-assignment': 'off',
    'ts/no-unsafe-member-access': 'off',
    'ts/no-unsafe-call': 'off',
    'ts/no-empty-object-type': 'off',
    'ts/require-await': 'off',
    'ts/consistent-type-imports': 'off',
  },
}, {
  files: ['src/**/*.{ts,tsx}'],
  rules: {
    'ts/no-explicit-any': 'off',
    'ts/no-empty-object-type': 'off',
  },
})
