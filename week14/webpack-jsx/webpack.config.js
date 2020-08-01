const path = require('path');

module.exports = {
  entry: './main1.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
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
      // {
      //   test:/\.css$/,
      //   use: {
      //     loader: 'css-loader',
          
      //   }
      // },
      {
        test: /\.css$/,
        use:{
          loader: require.resolve('./loader/cssLoader.js'),
        }
      }
    ]
  },
  mode: "development",
  optimization: {
    minimize: false,
  }
};