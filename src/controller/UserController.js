const getUser = require('../service/user');

class UserController {
    static getUser(ctx) {
        const {mobile, password} = ctx.request.body;

        return getUser(mobile, password).then((res) => {
            if(res) {
                ctx.status = 200;
                return ctx.body = {status: [{status: 200, username: res.username}]};
            }else {
                ctx.status = 401;
                return ctx.body = {errors: [{title: 'User not found', status: 401}]}
            }
        }).catch((error) => {
            console.log(error)
        });
    }
}

module.exports = UserController;