var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jade    = require('jade'),ejs= require('ejs');                     //模板引擎
var index = require('./routes/index');
var home = require('./routes/home');   //首页
var profile= require('./routes/profile');   //学校概况页
var team= require('./routes/team');   //资师队伍页
var research= require('./routes/research');   //学术科研页
var foot = require('./routes/foot');   //底部
var talent= require('./routes/talent');        //人才培养接口
var news= require('./routes/news');        //校内新闻接口
var contact= require('./routes/contact');        //联系我们接口
var img = require('./routes/img');             //图片上传
// var imgs = require('./routes/imgDemo');             //图片上传222



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');                          //设置默认模板引擎
app.engine( '.html', ejs.renderFile );                    //注册html模板引擎


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/img',img);
app.use('/home',home);     //首页
app.use('/profile',profile);     //学校概况页
app.use('/team',team);     //资师队伍页
app.use('/research',research);     //学术科研页
app.use('/foot',foot);     //底部
app.use('/talent',talent);      //人才培养
app.use('/news',news);      //校内新闻
app.use('/contact',contact);  //联系我们
// app.use('/ccc',imgs);  //...





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
