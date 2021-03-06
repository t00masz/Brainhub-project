const webpack = require('webpack');
const path = require('path');
    
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        //use: {
          
          // options: {
          //   presets: ['env', 'react', 'stage-1']
          // }
      },
    ]
  },
  watch: true
}