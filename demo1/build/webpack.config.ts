/// <reference types="node" />
import { join } from 'path';
import * as webpack from 'webpack';

import HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = join(__dirname, '..');
const sourcePath = join(rootPath, 'src');
const outputPath = join(rootPath, 'dist');

const config: webpack.Configuration = {
  devtool: 'source-map',
  entry: join(sourcePath, 'index.tsx'),
  output: {
    path: outputPath,
    filename: 'index.js',
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx'],
    root: sourcePath,
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: `awesome-typescript-loader?tsconfig=${join(sourcePath, 'tsconfig.json')}` },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.svg$/, loader: 'url' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(sourcePath, 'index.html'),
    }),
  ],
};

export = config;
