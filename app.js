var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
// app.use(multer()); // for parsing multipart/form-data

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

/* ========== 爬虫demo ========== */
// var superagent = require('superagent');
// var cheerio = require('cheerio');
// app.get('/webCrawler', function (req, res, next) {
//   // 用 superagent 去抓取 https://cnodejs.org/ 的内容
//   superagent.get('https://cnodejs.org/')
//     .end(function (err, sres) {
//       // 常规的错误处理
//       if (err) {
//         return next(err);
//       }
//       // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
//       // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
//       // 剩下就都是 jquery 的内容了
//       var $ = cheerio.load(sres.text);
//       var items = [];
//       $('#topic_list .topic_title').each(function (idx, element) {
//         var $element = $(element);
//         items.push({
//           title: $element.attr('title'),
//           href: $element.attr('href')
//         });
//       });
//
//       res.send(items);
//     });
// });

/* ========== 转md5 demo ========== */
// var utility = require('utility');
// app.get('/md5', (req, res) => {
//   var q = req.query.q;
//   var md5Value = utility.md5(q);
//   res.send(md5Value);
// });

var route_login = require('./routes/login');

app.post('/login', route_login);

// app.post('/login', (req, res) => {
//   console.log('接收到的数据：', req.body);
//   console.log('用户名：', req.body.username)
//   console.log('密码：', req.body.password)
//   res.json(req.body);
// })

app.listen(3001, () => {
  console.log('app is listening at port 3001');
})