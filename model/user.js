/**
 * Created by xiangge on 2017/4/17.
 */
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

userSchema
    .virtual('info')
    .get(function() {
        return {
            'username': this.username,
            'email': this.email
        };
    });


var User = mongoose.model('User', userSchema);
var Promise = require('bluebird');
Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);

module.exports = User;