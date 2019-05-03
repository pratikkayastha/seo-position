const seoPositionRouter = require('express').Router();
const { resolvePosition, resolvePositionParallelly } = require('../../services/positionResolverService');
const { validateSeoPositionRequest } = require('../../lib/validator');
const { validationResult } = require('express-validator/check');

// Route for GET /api/seoposition
seoPositionRouter.get('/', validateSeoPositionRequest(), async (req, res, next) => {
	if (!validationResult(req).isEmpty()) {
		console.log("Validation failed!");
		return res.status(400).send({message: 'Validation Failed'});
	}

	try {
		const { keyword, domain } = req.query;
		res.json({
			keyword: keyword,
			domain: domain,
			positions: await resolvePositionParallelly(keyword, domain)
		});
	} catch(err) {
		next(err);
	}
});

module.exports = seoPositionRouter;