const path = require('path');
const fs = require('fs');
const apiRouter = require('./apiRouter');
const consts = require('../configs/commonConsts');
const isDevelopment = process.env.NODE_ENV === consts.ENVIRONMENT.DEVELOPMENT;

module.exports = function router(app) {
	if (isDevelopment) {
		var webpack = require('webpack');
		var webpackConfig = require('../webpack.dev.js');
		var compiler = webpack(webpackConfig);
		var webpackDevMiddleware = require('webpack-dev-middleware');
		var webpackHotMiddleware = require('webpack-hot-middleware');

		// Setup webpack HMR
		app.use(
			webpackDevMiddleware(compiler, {
				noInfo: true,
				publicPath: webpackConfig.output.publicPath,
				index: path.resolve(__dirname, 'dist', 'index.html')
			})
		);
		app.use(webpackHotMiddleware(compiler));
	}

	// API Router
	app.use('/api', apiRouter);

	// React Catch All Route
	app.use((req, res) => {
		console.log('isDevelopment value: ', isDevelopment);
		if (!isDevelopment) {
			const filePath = path.resolve(__basedir, 'clientDist', 'index.html');

			if (!fs.existsSync(filePath)) {
				const fallback = path.resolve(__basedir, 'public', 'assets', 'fallback.html');
				return res.sendFile(fallback);
			}

			return res.sendFile(filePath);
		}

		const filename = path.resolve(compiler.outputPath, 'index.html');

		compiler.outputFileSystem.readFile(filename, (err, result) => {
			res.set('content-type', 'text/html');
			res.send(result);
			res.end();
		});
	});
};
