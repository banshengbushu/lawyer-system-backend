const router = require('koa-router')();
const userController = require('../controller/UserController');

router.post('/login', userController.getUser);

module.exports = router;