/**
 * Created by black.ren on 2017/4/27.
 */

const formidable = require('formidable');
const imgSet = require('../../configs/imgset');

const tinify = require("tinify");
tinify.key = "UqrZF9eIKqwCl06d5xtNfA6wZ3IJkI2o";

const uploadDir = imgSet.imgUrl;
const imgHost = imgSet.imgHost;
exports.postImg = (req, res) => {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = uploadDir;
    form.parse(req, (error, fields, files) => {
        if (error) {
            return res.json({code: 1, error: '上传图片出错！'})
        }
        let path = files.file.path,
            path2,
            source = tinify.fromFile(path);
        path2 = path.replace(/\\/g, '/');
        path2 = path2.replace('public/', '');
        res.json({code: 1, imgUrl: imgHost + path2});
        return void source.toFile(
            path
           /* , err => {
            console.log(`进度: ${err ? '失败' : '成功'}: ${path}`)}*/
        );
    })

};
