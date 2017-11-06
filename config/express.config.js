const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const apiRoutes = require('../server/routes/v1');

/**
 * Express instance
 * @public
 */
const app = express();

// Request logging
app.use(morgan('dev'));

// Parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// Mount api v1 routes
app.use('/api/v1', apiRoutes);

module.exports = app;
