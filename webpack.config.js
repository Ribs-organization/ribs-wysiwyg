const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'js/index': './source/js/index.js',
    'js/inline': './source/js/inline.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'source/'),
          path.join(__dirname, 'node_modules/ribs-core/'),
          path.join(__dirname, 'node_modules/ribs-popup/')
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.min.css',
      chunkFilename:'css/style.min.css',
    }),
    new ProgressBarPlugin()
  ],
};
