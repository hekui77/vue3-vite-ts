module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    '@vue/eslint-config-typescript'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'vue'
  ],
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'vue/multi-word-component-names': 'off',
    'no-multi-spaces': 2,
    'no-trailing-spaces': 2,
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': [
      'warn',
      { varsIgnorePattern: '.*', args: 'none' }
    ],
  }
};
