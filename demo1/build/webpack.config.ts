/// <reference types="node" />
import { join } from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = join(__dirname, '..');
const sourcePath = join(rootPath, 'src');
const outputPath = join(rootPath, 'dist');

const config: webpack.Configuration = {
};

export = config;
