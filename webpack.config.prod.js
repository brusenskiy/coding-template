var extractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  vendor: [
    'react',
    'react/addons',
    'reflux',
    'axios',
    'classnames'
  ],
  entry: {
    app: './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/static/',
    filename: '[name].js'
  },
  //resolve: {
  //  extensions: ['', '.js', '.jsx']
  //},
  module: {
    loaders: [
      { test: /\.(png|jpe?g|gif)$/, loader: 'url?prefix=img/&limit=5000' },
      { test: /\.(eot|ttf|svg|woff|woff2)$/, loader: 'file' },
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.styl$/,
        loaders: [
          'style',
          extractTextPlugin.extract(),
          'css',
          'stylus?paths=node_modules'
        ]
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.js'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    //new webpack.optimize.DedupePlugin(),
    new extractTextPlugin('app.css')
  ]
};
