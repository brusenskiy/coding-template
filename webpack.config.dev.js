var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({ 'NODE_ENV': JSON.stringify('development') }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
