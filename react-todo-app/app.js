// Set Base Directory
global.__basedir = __dirname;

const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const config = require('./configs/config');
const consts = require('./configs/commonConsts');

const app = express();

// Set Node process environment
process.env.NODE_ENV = config.ENVIRONMENT.HOST_ENV;

// Enable compression at top
app.use(compression());

// Use helmet for our beloved app <3
app.use(helmet({}));

// Handle uncaught exception safely
process.on('uncaughtException', err => {
	console.log(err);
});

// set static directory
app.use(express.static(path.join(__dirname, 'clientDist')));
app.use(express.static(path.join(__dirname, 'public')));

// setup basics of express middlewares
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));

// Use main controller module as router init
require('./apiControllers/router')(app);

// ERROR Handlers

// Development error handler: Will print stacktrace
if (app.get('env') === consts.ENVIRONMENT.DEVELOPMENT) {
	app.use((err, req, res) => {
		res.status(err.status || 500);
		res.json({
			message: err.message,
			error: err,
			stacktrace: err.stack
		});
	});
	process.on('uncaughtException', error => console.log(error.stack));
}

// Production error handler: No stacktraces leaked to user
app.use((err, req, res) => {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

// Serve the files on port 3000.
app.listen(config.ENVIRONMENT.HOST_PORT, () => {
	console.log(`Example app listening on port ${config.ENVIRONMENT.HOST_PORT}!\n`);
});
