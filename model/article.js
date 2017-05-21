/**
 * Created by black.ren on 2017/4/26.
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tabsId: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Tab'
    }],
    title: {
        type: String,
        unique: true
    },
    imgUrl: {
        type: String,
        default: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=290436183,2517608234&fm=23&gp=0.jpg'
    },
    contentDesc: String,
    content: String,
    visitCount: {
        type: Number,
        default: 0
    },
    commentCount: {
        type: Number,
        default: 0
    },
    created: {
        type: Number,
        default: 0
    }
});

ArticleSchema
    .virtual('info')
    .get(function() {
        return {
            '_id': this._id,
            'title': this.title,
            'tabsId': this.tabsId,
            'imgUrl': this.imgUrl,
            'contentDesc': this.contentDesc,
            'content': this.content,
            'visitCount': this.visitCount,
            'commentCount':this.commentCount,
            'created': this.created
        };
    });

const Article = mongoose.model('Article',ArticleSchema);

const Promise = require('bluebird');
Promise.promisifyAll(Article);
Promise.promisifyAll(Article.prototype);

module.exports = Article;