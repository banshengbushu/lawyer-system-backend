const router = require('koa-router')();

router.post('/login', async (ctx, next) => {
    const mobile = ctx.request.body.mobile;

    ctx.body = `<div>${mobile} Login successfully</div>`
});

module.exports = router;