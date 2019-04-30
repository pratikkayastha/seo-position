/**
	Middleware to catch global errors.
	Logs the error to console, returns 500 and error stack
*/
module.exports.handleGlobalError = (err, req, res, next) => {
	console.error(err);
	res.status(500).send(err.stack);
}