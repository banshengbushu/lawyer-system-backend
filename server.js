const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors')

const app = new Koa();
app.use(bodyParser());  // 解析request的body
app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));

const router = require('koa-router')()
router.post('/login', async (ctx, next) => {
    const mobile = ctx.request.body.mobile;

    ctx.body = `<div>${mobile} Login successfully</div>`
});

app.use(router.routes());

app.listen(8080, () => {
    console.log('Server running at http:8080');
});