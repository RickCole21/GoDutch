var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');

// 传输格式解析
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
// app.use(multer()); // for parsing multipart/form-data

// session中间件
var session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}));

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");//告诉客户端可以在HTTP请求中带上Cookie
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By", ' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

var routeLogin = require('./routes/login');
var routeRegister = require('./routes/register');
var routeUser = require('./routes/user');
var routeLogout = require('./routes/logout');

app.all('/api/*', function (req, res, next) {

  if (req.originalUrl === '/api/login' || req.originalUrl === '/api/register') {
    next();
    return;
  }

  if (!req.session.user) {// 未登录或验证失效
    console.log('未登录或认证信息失效');
    res.send({
      errorCode: 1,
      msg: '未登录或认证信息失效!'
    });
    return;
    // res.redirect('/login');
    // return;
  }
  next();
})

app.post('/api/login', routeLogin);
app.post('/api/register', routeRegister);
app.get('/api/user', routeUser);
app.get('/api/logout', routeLogout);

app.listen(3001, () => {
  console.log('app is listening at port 3001');
})