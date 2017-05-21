/**
 * Created by black.ren on 2017/4/28.
 */
const mongoose = require('mongoose');

const tabSchema = new mongoose.Schema({
    tabName: String
});

const Tab = mongoose.model('Tab', tabSchema);
const Promise = require('bluebird');
Promise.promisifyAll(Tab);
Promise.promisifyAll(Tab.prototype);

module.exports = Tab;