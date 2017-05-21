/**
 * Created by xiangge on 2017/4/26.
 */
const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const Tools = require('../tools');

exports.getIndex = (req, res) => {
    Article.find()
        .sort({'created':-1})
        .limit(21)
        .exec()
        .then(data => {
            let len = Math.min(data.length - 1, 20),
                resJson = {
                    code: 1,
                    newArticle: data[0],
                    recommendArticle: []
                };
            if (len < 3) {
                resJson.recommendArticle = data
            } else {
                resJson.recommendArticle = Tools.myRandomObject(data, 1, len, 3)
            }
            return res.json(resJson)
        }).catch(err => {
        return res.json(err);
    });
};