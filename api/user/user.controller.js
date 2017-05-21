/**
 * Created by xiangge on 2017/4/18.
 */

const mongoose = require('mongoose');
const crypto = require('crypto');
const User = mongoose.model('User');

const md5 = crypto.createHash('md5');

//注册新用户
exports.register = (req, res) => {
    let username = req.body.username,
        password = req.body.password,
        passwordRepeat = req.body.passwordRepeat,
        email = req.body.email;

    if (password !== passwordRepeat) {
        return void res.json({code: 0, error: '密码不相等！'})
    }

    const md5 = crypto.createHash('md5');
    password = md5.update(password).digest('hex');

    User.find({username: username})
        .exec()
        .then(user => {
            if (user.length > 0) {
                return res.json({error: '用户名已存在！'})
            } else {
                var user = new User(req.body);
                user.password = password;
                user.saveAsync().then(user => {
                    return res.json({
                        code: 1,
                        message: "注册成功"
                    });
                }).catch(err => {
                    return res.json(err);
                });
            }
        }).catch(err => {
            return res.json(err);
        });
};

//登录
exports.login = (req, res) => {
    let username = req.body.username,
        password = req.body.password;

    const md5 = crypto.createHash('md5');
    password = md5.update(password).digest('hex');

    User.findOne({username: username})
        .exec()
        .then(user => {
            if (!user) {
                return res.json({
                    code: 0,
                    error: '用户不存在！'
                });
            }
            // 检查密码是否匹配
            if (password !== user.password) {
                return res.json({
                    code: 0,
                    error: '用户名或密码错误！'
                });
            }
            res.json({
                code: 1,
                info: user.info
            })
        }).catch(err => {
            return res.json(err);
        })
};
