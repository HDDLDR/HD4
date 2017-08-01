
//模板引擎

var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('respond with a resource');
// });
router.get('/', function(req, res, next) {
    res.render('Datas', { title: 'Hey', message: 'Hello world!'});
});

module.exports = router;


// res.render  的功能是调用模板引擎，并将其产生的页面直接返回给客户端。它接受
// 两个参数，
// 第一个是模板的名称，即 views  目录下的模板文件名，不包含文件的扩展名；
// 第二个参数是传递给模板的数据，用于模板翻译。



/*/
 // 注册指定扩展名的模板引擎：
app.engine( '.html', require('ejs').renderFile );  // 注册html模板引擎
app.set('view engine', 'html');        // 将模板引擎换成html

app.set('views', './views');  // 指定模板文件存放位置
app.set('view engine', 'jade')  // 设置默认的模板引擎

 //注意： _express函数是许多模板引擎提供的回调函数。但是这个函数只能在默认的文件扩展名上工作。
         但是，有种情况我们使用的不是对应模板引擎的扩展名的怎么办呢？这时不能再调用_express函数。
         在这种情况下我们可以使用一个替代的函数，
         例如： 在EJS中提供了renderFile函数来完成相同的功能。
*/






















