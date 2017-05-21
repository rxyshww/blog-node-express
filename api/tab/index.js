/**
 * Created by black.ren on 2017/4/28.
 */

const express = require('express');
const router = express.Router();
const controller = require('./tab.controller');

router.use('/getTab', controller.getTab);

module.exports = router;