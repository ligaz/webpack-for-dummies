import { join } from 'path';
import * as webpack from 'webpack';
import webpackMerge = require('webpack-merge');

import commonConfig = require('./webpack.common');

const rootPath = join(__dirname, '..');
const serverPath = join(rootPath, 'server');
const outputPath = join(rootPath, 'dist', 'server');

const config: webpack.Configuration = {
  entry: join(serverPath, 'index.ts'),
  output: {
    path: outputPath,
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  resolve: {
    root: serverPath,
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: [`awesome-typescript-loader?tsconfig=${join(serverPath, 'tsconfig.json')}`],
      },
    ],
  },
  externals: [
    (context, request, callback) => {
      const isExternal =
        request.match(/^[@a-z][a-z\/\.\-0-9]*$/i) &&
        !request.match(/\.(css)$/i);
      callback(null, !!isExternal);
    },
  ],
  plugins: [
    // Do not create separate chunks of the server bundle.
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),

    // Enable source mapped stack traces.
    new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false }),
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
};

export = webpackMerge.smart(commonConfig, config);
