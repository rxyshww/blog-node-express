/**
 * Created by black.ren on 2017/4/26.
 */

const mongoose = require('mongoose');
const MarkdownIt = require('markdown-it');
const Article = mongoose.model('Article');
const User = mongoose.model('User');


exports.addArticle = (req, res) => {
    Article.find({title: req.body.title})
        .exec()
        .then(data => {
            if (data.length > 0) {
                return res.json({code: 0, error: '文章名称重复！'})
            } else {
                req.body.created = +new Date();
                Article.createAsync(req.body).then(result => {
                    return res.json({code: 1})
                }).catch(err => {
                    return res.json({code: 0, error: '错误！'});
                });
            }
        }).catch(err => {
        return res.json(err);
    });
};

exports.getArticle = (req, res) => {
    let searchdata = {};
    req.query.tabId && (searchdata.tabsId = req.query.tabId);
    Article.where(searchdata)
        .populate('tabsId')
        .sort({'created': -1})
        .exec()
        .then(data => {
            return res.json(data)
        }).catch(err => {
        return res.json(err);
    });
};

exports.getArticleById =(req, res) => {
    const md = new MarkdownIt({
        html:true //启用html标记转换
    });
    const _id = req.query._id;
    Article.findById(_id)
        .populate('tabsId')
        .exec().then(function (article) {
        console.log(article)
        if (!req.query.edit) {
            article.content = md.render(article.content);
            Article.update({_id: _id}, {$inc:{visitCount:1}}, (err) => {
                if (err) console.log(err)
            });
        }
        article.visitCount++;
        return res.json(article.info);
    }).then(null,function (err) {
        return res.status(500).send();
    });
};