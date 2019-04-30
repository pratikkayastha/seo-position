const { check } = require('express-validator/check');

/**
	Validates request params
	Must have keyword and domain
*/
module.exports.validateSeoPositionRequest = () => {
	return [
		check('keyword').not().isEmpty(),
		check('domain').not().isEmpty()
	];
}