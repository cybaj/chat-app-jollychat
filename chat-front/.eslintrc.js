module.exports = {
    root: true,
    extends: [
        //'standard',
        'plugin:vue/recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    plugins: [
        //'standard',
        'vue'
    ],
    env: {
        browser: true
    },
    rules: {
      'vue/array-bracket-spacing': 'error',
      'vue/eqeqeq': 'error',
      'vue/brace-style': [ 'error', '1tbs' ],
      'semi': [ 'error', 'always' ],
      'no-console': 'error',
      'vue/comma-dangle': [ 'error', {
          'arrays': 'never',
          'objects': 'always-multiline',
          'imports': 'never',
          'exports': 'never',
          'functions': 'never'
      }],
      'no-multiple-empty-lines': [ 'error', { 'max': 2, 'maxBOF': 1 }],
      'space-in-parens': ['error', 'never'],
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'space-before-function-paren': [
          'error',
          'always'
      ],
      'quotes': ['error', 'single'],
      'space-before-blocks': [
          'error',
          'always'
      ],
      'no-empty': 'error',
      'no-duplicate-imports': 'error'
    }
};

