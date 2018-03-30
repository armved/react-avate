const merge = require('webpack-merge');
const parts = require('./webpack.parts');
require('dotenv').config();

const production = merge(
  parts.buildSetup('production'),
  parts.setMode('production'),
  parts.sourceMaps('source-map'),
);

module.exports = production;
