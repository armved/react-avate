const path = require('webpack');

const PATHS = {
  SRC: path.resolve(__dirname, 'src'),
  DIST: path.resolve(__dirname, 'dist'),
}

module.exports = {
  entry: path.join(PATHS.SRC, 'index.js'),
  output: {
    path: PATHS.DIST,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
