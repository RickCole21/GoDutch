var express = require('express');
var app = express();

app.use(express.static('public'))

// var routes = require('./routes')(app);

//allow custom header and CORS
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});
/* ==========数据库连接测试========== */
// 本地测试时，需要先打开 mongodb : cd Documents --> mongod --dbpath data/db
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';

var selectData = function (db, q, callback) {
  //连接到表
  var collection = db.collection('site');
  //查询数据
  // var whereStr = {"name": '菜鸟教程'};
  var whereStr = q;
  collection.find(whereStr).toArray(function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
}


app.get("/api/site", (req, res) => {
  // console.log(req)
  const param = req.query.q;

  MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功！");

    // console.log(param);
    const q = {
      "name": param
    }
    selectData(db, q, function (result) {
      console.log(result);
      res.json(result);
      db.close();
    });
  });


});
/* ==========数据库连接测试========== */

// app.get('/index.html', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
//
// app.get('/login.html', (req, res) => {
//   res.sendFile(__dirname + '/view/login.html');
// });
//
// app.get('/about', (req, res) => {
//   res.sendFile(__dirname + '/view/about.html');
// });
//
// app.get('/bills', (req, res) => {
//   res.sendFile(__dirname + '/view/bills.html');
// });
//
// app.get('/bill-list', (req, res) => {
//   res.sendFile(__dirname + '/view/bill-list.html');
// });

var server = app.listen(3001, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});