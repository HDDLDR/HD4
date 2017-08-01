var express = require('express');
var app = express();
//应用添加处理静态文件的功能
app.use(express.static('public'));
// app.use('/static', express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(6066, function () {

    var host = server.address().address;
    var port = server.address().port;
;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})