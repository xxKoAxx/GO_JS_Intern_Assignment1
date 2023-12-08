const siteRouter = require('./siteRouter');
const apiRouter = require('./apiRouter');

function route(app) {
    app.use('/api', apiRouter)
    app.use('/', siteRouter);
}

module.exports = route;
