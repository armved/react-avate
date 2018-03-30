/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
/* eslint-enable */

const PATHS = require('./PATHS');

exports.setMode = mode => ({
  mode,
});

exports.sourceMaps = method => ({
  devtool: method,
});

exports.buildSetup = env => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.TEMPLATE,
      filename: 'index.html',
      inject: 'body',
      minify:
        env === 'development'
          ? false
          : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            html5: true,
            minifyCSS: true,
            removeComments: true,
            removeEmptyAttributes: true,
          },
    }),
  ],
});

exports.extractLess = new ExtractTextPlugin({
  filename: 'style.[hash].css',
});

exports.styleLoader = options => ({
  module: {
    rules: [
      {
        test: /\.less$/,
        use: options.use,
      },
    ],
  },
});
