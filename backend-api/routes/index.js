const router = require('express').Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

// Route for GET /
router.get('/', (req, res) => {
	res.json({
		status: 'ok'
	});
});

module.exports = router;