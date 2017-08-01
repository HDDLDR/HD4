var express = require('express');
var router = express.Router();


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello  我是主页渲染模板!index.ejs'});
    // 将控制转向下一个符合URL的路由
});


module.exports = router;
