import { RequestHandler } from 'express';
import { readFileSync } from 'fs';
import { template } from 'lodash';
import { join } from 'path';
import { cdn } from './cdn';

export const home: RequestHandler = (req, res, next) => {
  req.url = '/index.html';
  cdn(req, res, next);
};
















































// Use mustache like templates {{ }} because HtmlWebpackPlugin uses lodash
// for templates thus trying to interpolate our template values.

// const indexTemplate = template(readFileSync(join(__dirname, 'index.html')).toString(), {
//   interpolate: /{{([\s\S]+?)}}/g,
// });

// const renderIndex = (app: string) => (
//   indexTemplate({
//     app,
//   })
// );