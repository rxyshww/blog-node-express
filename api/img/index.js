/**
 * Created by black.ren on 2017/4/27.
 */

const express = require('express');
const router = express.Router();
const controller = require('./img.controller');

router.use('/postImg', controller.postImg);

module.exports = router;