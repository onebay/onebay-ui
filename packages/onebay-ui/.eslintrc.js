module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      tsx: true, // Allows for the parsing of JSX
      jsx: true
    }
  },
  // settings: {
  //   tsx: {
  //     version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
  //   }
  // },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/vue'
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    semi: ['error', 'never'],
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    'vue/attributes-order': 'off',
    'no-reserved-keys': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        trailingComma: 'none',
        jsxSingleQuote: false,
        // "parser": "flow",
        endOfLine: 'auto',
        printWidth: 100
      }
    ]
  },
  ignorePatterns: ['*.d.ts', '*.spec.tsx']
}
