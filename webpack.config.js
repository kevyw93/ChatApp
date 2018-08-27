const path = require('path');

module.exports = {
  entry: './frontend/entry.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'javascripts'),
    filename: 'bundle.js'
  },

};
