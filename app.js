/**
 * Created by xiangge on 2017/4/17.
 */
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const setting = require('./configs/dbset');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${setting.host}/${setting.db}`);

const modelsPath = path.join(__dirname, 'model');
fs.readdirSync(modelsPath).forEach(file => {
    if (/(.*)\.(js$|coffee$)/.test(file)) {
        require(modelsPath + '/' + file);
    }
});

const app = express();

require('./configs/express')(app);
require('./routes')(app);
app.get("/*", function(req, res) {
    return res.sendFile(__dirname + '/public/index.html')
})
// Start server
app.listen(3000, () => {
    console.log('Express server listening on %d, in %s mode', 3000, app.get('env'));
});

exports = module.exports = app;
