/**
 * Created by xiangge on 2017/4/20.
 */

const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.post('/register', controller.register);
router.post('/login', controller.login);


module.exports = router;