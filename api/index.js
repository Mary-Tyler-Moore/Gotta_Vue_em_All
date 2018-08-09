const express = require('express');
const parser = require('body-parser');
const db = require('../database/bin/mainEntry');
const router = require('./router');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(router);

module.exports = {
  path: '/api',
  handler: app
}