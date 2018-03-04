const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

const PATHS = {
  SRC: path.resolve(__dirname, 'src'),
  DIST: path.resolve(__dirname, 'dist'),
};

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(PATHS.SRC, 'index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: path.join(PATHS.SRC, 'index.js'),
  output: {
    path: PATHS.DIST,
    filename: 'app.bundle.js',
  },
  mode: process.env.ENV === 'DEV' ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [PATHS.SRC],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css?$/,
        include: [PATHS.SRC],
        exclude: /node_modules/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
};
