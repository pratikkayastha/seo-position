// Module dependencies.
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const expressValidator = require('express-validator');
const chalk = require('chalk');
const router = require('./routes');
const { handleGlobalError } = require('./middlewares/errorHandler');

// Create Express server.
const app = express();

// Express configuration.
app.set('host', '0.0.0.0');
app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// Setting up routes
app.use(router);
// Global error handler
app.use(handleGlobalError);


// Start Express server.
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
