/**
 * Created by black.ren on 2017/4/28.
 */

const mongoose = require('mongoose');
const Tab = mongoose.model('Tab');

exports.getTab = (req, res) => {
    Tab.find()
        .exec()
        .then(result => {
            return res.json(result);
        }).catch(err => {
            return res.json(err);
        });
};

exports.createTab = (req, res) => {
    const tab = new Tab(req.body);
    tab.saveAsync().then(tab => {
        return res.json(tab);
    }).catch(err => {
        return res.json(err)
    })
};

/*var tab = new Tab({
    tabName: 'angular2'
})
tab.saveAsync().then(tab => {
    console.log(tab)
}).catch(err => {
    console.log(err)
})*/
