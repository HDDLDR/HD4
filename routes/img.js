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


router.post('/',function(req,res){
	res.header("Access-Control-Allow-Origin", "*"); //跨域
	var form = new formidable.IncomingForm();
	form.uploadDir='public/images';  //上传图片存放的路径

	form.parse(req,function(error,fields,files){
        console.log(files);
		for(var i in files){
			var file = files[i];  //保存图片属性
            if (!Date.now) {
              var fName = (new Date()).getTime();  //用一时间戳作为图片的名字
            }else{
               var fName=Date.now();
            }

            //检测图片的格式
            switch(file.type){
				case "image/jpeg":
				fName=fName+".jpg";
				break;
				case "image/png":
				fName=fName+".png";
				break;
				case "image/gif":
				fName=fName+".gif";
				break;
			}
			var newPath='public/images/'+fName;   //要返回的图片的路径
			fs.renameSync(file.path,newPath);
            console.log(newPath);
            // res.send(files);
            // res.send(newPath);
		}

        pool.query(`insert into pictures(picURL) values('http://localhost:3000/images/${fName}')`, function(err, rows, fields) {
            if (err) throw err;
            res.send('上传成功!');
        });
	});

	});

router.get('/pic',function(req,res) {
    res.header("Access-Control-Allow-Origin", "*"); //跨域
    pool.query(`select * from pictures`,function(err,rows){
        if(err) throw err;
        res.send(rows);
    })
})
module.exports=router;