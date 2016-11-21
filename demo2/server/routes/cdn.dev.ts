import * as webpack from 'webpack';
import config = require('../../build/webpack.client');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);

export = [
  devMiddleware(compiler, {
    stats: {
      colors: true,
      chunks: false,
    },
  }),
  hotMiddleware(compiler),
];
