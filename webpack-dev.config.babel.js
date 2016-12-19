/* global __dirname */

import path from 'path';
import webpack from 'webpack';

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'build', 'static'),
    filename: 'bundle.js',
    publicPath: '/dev-server/',
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: '"development"',
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
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
        test: /\.s(c|a)ss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
    ],
  },
};
