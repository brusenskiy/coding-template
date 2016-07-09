/* global __dirname */

import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import WebpackShellPlugin from 'webpack-shell-plugin';

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
    vendor: [
      'react', 'react-dom', 'react-router', 'react-loader',
      'react-redux', 'redux',
      'axios', 'classnames', 'moment', 'numeral',
      'email-validator',
      'raven-js',
    ],
  },
  output: {
    path: path.join(__dirname, 'build', 'static', '[hash]'),
    publicPath: '/static/[hash]/',
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: '"production"',
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.js'),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    new CopyWebpackPlugin([
      { from: './src/index.html', to: '../../' },
      { from: './src/index.php', to: '../../' },
      { from: './src/robots.txt', to: '../../' },
    ]),
    new AssetsPlugin({ prettyPrint: true }),
    // new ExtractTextPlugin('app.css'),
    // new WebpackShellPlugin({
    //   verbose: true,
    //   onBuildEnd: ['node ./static-assets-replace.js']
    // })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
//  externals: {
//    google: 'const google',
//    jquery: 'const jQuery',
//  },
  module: {
    loaders: [
      { test: /\.(png|jpe?g|gif)$/, loader: 'url?limit=5000' },
      { test: /\.(eot|ttf|svg|woff|woff2)$/, loader: 'file' },
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.s(a|c)ss$/,
        loaders: [
          // ExtractTextPlugin.extract('style-loader'),
          'style',
          'css',
          'sass',
        ],
      },
      {
        test: /\.js(x)?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
    ],
  },
};
