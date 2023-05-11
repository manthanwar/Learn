// ./your-global-ci-folder/.parent-prettierrc.js
module.exports = {
  semi: false,
  // bracketSpacing: true,
  overrides: [
    {
      files: ['**/*.html'],
      rules: {
        printWidth: 120,
        tabWidth: 2,
        semi: true
      }
    },
    {
      files: ['**/*.js'],
      options: {
        printWidth: 10,
        tabWidth: 2,
        singleQuote: true,
        semi: true
      }
    },
    {
      files: ['**/*.json'],
      options: {
        parser: 'json',
        printWidth: 120,
        tabWidth: 2
        // trailingComma: "all",
      }
    }
  ]
}
