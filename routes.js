/**
 * Created by xiangge on 2017/4/20.
 */

module.exports = app => {
    app.use('/blog/userData', require('./api/user'));
    app.use('/blog/articleData', require('./api/article'));
    app.use('/blog/indexData', require('./api/index'));
    app.use('/blog/imgData', require('./api/img'));
    app.use('/blog/tabData', require('./api/tab'));
};