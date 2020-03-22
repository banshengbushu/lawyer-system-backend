const mongoose = require('../database');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    _id: mongoose.Schema.Types.ObjectId
});

const User = mongoose.model('User', userSchema);

module.exports = User;

