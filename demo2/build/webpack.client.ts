import * as webpack from 'webpack';
import webpackMerge = require('webpack-merge');
import commonConfig = require('./webpack.common');

const config: webpack.Configuration = {
  debug: true,
  entry: [
    'webpack-hot-middleware/client?dynamicPublicPath=true',
    'react-hot-loader/patch',
    commonConfig.entry as string,
  ],
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['react-hot-loader/webpack'] },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export = webpackMerge.smart(commonConfig, config);
