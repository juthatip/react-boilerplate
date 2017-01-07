var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test : /\.scss$/,
        exclude: /node_modules/,
        include: APP_DIR,
        loaders: [
          'style',
          'css',
          'sass',
          'postcss'
        ]
      }
    ]
  },
  postcss: () => {
    return [
      require('autoprefixer')
    ];
  }
};

module.exports = config;