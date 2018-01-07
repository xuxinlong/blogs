// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
    'eslint-plugin-html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    "no-nested-ternary": 0,
    "no-extend-native": 0,
    "no-cond-assign": 0,
    "guard-for-in": 0,
    "import/prefer-default-export": 0,
    "object-shorthand": 0,
    "func-names": 0,
    "no-restricted-syntax": 0,
    "no-restricted-properties": 0,
    "prefer-rest-params": 0,
    "prefer-spread": 0,
    "no-multi-assign": 0,
    "no-unused-expressions": 0,
    "no-mixed-operators": 0,
    "consistent-return": 0,
    "camelcase": 0,
    "eqeqeq": 0,
    "no-bitwise": 0,
    "no-mixed-operators": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "global-require": 0,
    "max-len": 0,
    "no-plusplus": 0,
    "import/no-unresolved": 0,
    "import/no-dynamic-import": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    'no-shadow': 0,                  // disallow declaration of variables already declared in the outer scope
    'no-shadow-restricted-names': 0, // disallow shadowing of names such as arguments
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
