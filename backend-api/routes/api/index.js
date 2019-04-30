const apiRouter = require('express').Router();
const seoPositionRouter = require('./seoPosition');

apiRouter.use('/seoposition', seoPositionRouter);

module.exports = apiRouter;