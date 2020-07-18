module.exports = {
  entry: './main.js',
  module: {
    rules: [
      {
        test:/\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                {
                  // "throwIfNamespace": false, // defaults to true
                  // "runtime": "automatic", // defaults to classic
                  // "importSource": "custom-jsx-library", // defaults to react
                  pragma: 'create',
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.vue$/,
        use:{
          loader: require.resolve('./myLoader.js'),
        }
      }
    ]
  },
  mode: "development",
  optimization: {
    minimize: false,
  }
};