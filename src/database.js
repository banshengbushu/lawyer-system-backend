// db/database.js
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost/lawyer-system';

mongoose.connect(DB_URL);

mongoose.connection.on('connected',function() {
    console.log('***Mongoose connection open to '+DB_URL+'***');
});

mongoose.connection.on('error',function(err) {
    console.log('---Mongoose connection error: '+ err + '---');
});

mongoose.connection.on('disconnected',function() {
    console.log('***Mongoose connection disconnected***');
});

module.exports = mongoose;