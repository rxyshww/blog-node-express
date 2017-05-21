/**
 * Created by xiangge on 2017/4/20.
 */
'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

module.exports = app => {
    
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(cors());
};
