const User = require('../model/User');

const getUser = async (username) => {
    const user = await User.findOne({username: username});

    return user;
};

module.exports = getUser;