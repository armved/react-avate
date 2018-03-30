const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const production = require('./webpack.config.prod');
const development = require('./webpack.config.dev');
const PATHS = require('./PATHS');
require('dotenv').config();

const pathsToClean = ['dist'];

const cleanOptions = {
  root: path.resolve(),
  verbose: true,
  dry: false,
};

const common = {
  entry: PATHS.APP,
  output: {
    path: PATHS.DIST,
    filename: 'app.bundle.[hash].js',
  },
  resolve: {
    modules: ['node_modules', PATHS.SRC],
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
module.exports = () => {
  const config = merge(common, process.env.ENV === 'DEV' ? development : production);
  return config;
};
