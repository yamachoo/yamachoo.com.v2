module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  // TODO: Prettierをv3に上げたら削除する
  // See: https://github.com/tats-u/prettier-plugin-md-nocjsp#target-versions
  overrides: [
    {
      files: '*.md',
      options: {
        parser: 'markdown-nocjsp'
      }
    },
    {
      files: '*.mdx',
      options: {
        parser: 'mdx-nocjsp'
      }
    }
  ]
}
