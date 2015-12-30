//var extractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom', 'axios', 'classnames', 'immutable']
  },
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({ 'NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.js'),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false }})
    //new extractTextPlugin('app.css')
  ],
  //resolve: {
  //  extensions: ['', '.js', '.jsx']
  //},
  //externals: {
  //  google: 'const google'
  //},
  module: {
    loaders: [
      { test: /\.(png|jpe?g|gif)$/, loader: 'url?limit=5000' },
      { test: /\.(eot|ttf|svg|woff|woff2)$/, loader: 'file' },
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.s(c|a)ss$/,
        loaders: [
          'style',
          //extractTextPlugin.extract(),
          'css',
          'sass'
        ]
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
