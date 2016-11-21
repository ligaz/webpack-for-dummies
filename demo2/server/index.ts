import * as express from 'express';
import { join } from 'path';

if (process.env.NODE_ENV !== 'production') {
  process.env.APP_ROOT_DIR = join(__dirname, '..', '..');
}

import { cdn, home } from './routes';

const app = express();
app.use('/cdn', cdn);
app.use('/', home);

app.listen(8080, () => {
    console.info('🚀 Server is running.');
});