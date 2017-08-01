var express=require('express');
var mysql=require('mysql');
var router=express.Router();


var pool=mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'myweb',
	port:3306
});

var fs=require('fs');   //重新命名
var formidable=require('formidable');   //写入文件


router.post('/pictures',function(req,res){
	res.header("Access-Control-Allow-Origin", "*"); //跨域
	 fs.readFile( file , function(err,data){

     /*
        一参为文件路径
        二参为回调函数
            回调函数的一参为读取错误返回的信息，返回空就没有错误
            二参为读取成功返回的文本内容
    */
            console.log(file);
         if(err){
            res.write('<h1>404</h1>');
            res.end();
        }else{
            res.write(data); //将index.html显示在客户端
            res.end();
        }
            // res.send(files);
            // res.send(newPath);

        // pool.query(`insert into pictures(picURL) values('http://localhost:3000/images/${fName}')`, function(err, rows, fields) {
        //     if (err) throw err;
        //     res.send('上传成功!');
        // });
	});

});

// router.get('/pic',function(req,res) {
//     res.header("Access-Control-Allow-Origin", "*"); //跨域
//     pool.query(`select * from pictures`,function(err,rows){
//         if(err) throw err;
//         res.send(rows);
//     })
// })
module.exports=router;