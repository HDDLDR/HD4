var express=require('express');
var mysql=require('mysql');
var router=express.Router();

var pool=mysql.createPool({
    host:'127.0.0.1',//localhost
    user:'root',   //用户名
    password:'',    //密码
    database:'myweb', //数据库
    port:3306
});




//人才培养_API
router.get('/ttt',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    pool.query('SELECT * from talent', function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports=router;



















