/**
 * Created by black.ren on 2017/4/26.
 */

const express = require('express');
const router = express.Router();
const controller = require('./article.controller');

router.post('/addArticle', controller.addArticle);
router.get('/getArticle', controller.getArticle);
router.get('/getArticleById', controller.getArticleById);


module.exports = router;