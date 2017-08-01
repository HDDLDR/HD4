

//底部

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


//get
router.get('/footer',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    //查找表中所有的数据
    pool.query(`SELECT * from footlist`, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });
    //查找符合条件的数据
    // pool.query(`SELECT * from studentMessages where uid>${uid}`, function(err, rows, fields) {
    //     if (err) throw err;
    //     res.send(rows);
    // });

});

module.exports=router;



















