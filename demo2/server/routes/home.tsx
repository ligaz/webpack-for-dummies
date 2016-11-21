import { RequestHandler } from 'express';
import { readFileSync } from 'fs';
import { template } from 'lodash';
import { join } from 'path';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../../client/App';

export const home: RequestHandler = (req, res, next) => {
    const app = renderToString(
        <App />
    );
    res.send(renderIndex(app));
};

// Use mustache like templates {{ }} because HtmlWebpackPlugin uses lodash
// for templates thus trying to interpolate our template values.
const indexTemplate = template(readFileSync(join(__dirname, 'index.html')).toString(), {
  interpolate: /{{([\s\S]+?)}}/g,
});

const renderIndex = (app: string) => (
  indexTemplate({
    app,
  })
);