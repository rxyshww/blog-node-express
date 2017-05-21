/**
 * Created by xiangge on 2017/4/26.
 */

//取随机数，myRandomObject(myObject, 0, 20, 10)表示从0到20随机取10个元素，乱序
exports.myRandomObject = (myObject, start, end, number) => {
    var a = [];
    var b = [];
    var i = 0;
    while(true) {
        var t = parseInt(Math.random() * (end - start + 1) + start);
        if(!a[t]) {
            a[t] = 1;
            b.push(myObject[t]);
            i++;
            if(i === number) {
                break;
            }
        }
    }
    return b;
};