/**
 * Created by xiangge on 2017/4/26.
 */

const express = require('express');
const router = express.Router();
const controller = require('./index.controller');

router.get('/getIndex', controller.getIndex);

module.exports = router;