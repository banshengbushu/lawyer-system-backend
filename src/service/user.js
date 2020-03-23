const User = require('../model/User');

const getUser = async (username, password) => {
    const user = await User.findOne({username: username});
    const isPasswordCorrect = user && user.password === password;

    if (isPasswordCorrect) {
        return user;
    }
};

module.exports = getUser;