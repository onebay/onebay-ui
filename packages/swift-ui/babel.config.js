module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env'],
  plugins: ['@vue/babel-plugin-jsx'],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime']
    }
  }
}
