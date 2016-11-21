import * as express from 'express';
import { join } from 'path';

export const cdn = express.Router();

if (process.env.NODE_ENV !== 'production') {
  cdn.use(...require('./cdn.dev'));
} else {
  cdn.use(express.static(join(__dirname, '../client')));
}
