import express from 'express';
import parser from 'body-parser';
import router from './router';
import db from '../database/index';

const app = express();
const port = 3001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use('/api', router);

app.listen(port, () => console.log('server is listing on port: ', port));