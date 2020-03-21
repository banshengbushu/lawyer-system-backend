const router = require('koa-router')()

module.exports = function (app) {
    router.get('/test', async (req, res) => {
        res.send('Hello world');
    });
};