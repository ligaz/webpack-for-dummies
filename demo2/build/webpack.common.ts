/// <reference types="node" />
import { join } from 'path';
import * as webpack from 'webpack';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
import HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = process.env.APP_ROOT_DIR || join(__dirname, '..');
const sourcePath = join(rootPath, 'client');
const outputPath = join(rootPath, 'dist', 'client');

const config: webpack.Configuration = {
  devtool: 'source-map',
  output: {
    path: outputPath,
    filename: 'index.js',
    publicPath: '/cdn/',
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx'],
    root: sourcePath,
  },
  entry: join(sourcePath, 'index.tsx'),
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: [`awesome-typescript-loader?tsconfig=${join(sourcePath, 'tsconfig.json')}`],
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.json$/, loader: 'json' },
      { test: /\.svg$/, loader: 'url' },
    ],
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      template: join(sourcePath, 'index.html'),
    }),
  ],
};

export = config;
