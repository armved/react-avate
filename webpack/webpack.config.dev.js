const merge = require('webpack-merge');
const PATHS = require('./PATHS');
const parts = require('./webpack.parts');

const development = merge(
  {
    devServer: {
      contentBase: PATHS.DIST,
      compress: true,
      historyApiFallback: true,
      hot: true,
    },
  },
  parts.buildSetup('development'),
  parts.setMode('development'),
  parts.sourceMaps('eval-source-map'),
);

module.exports = development;
