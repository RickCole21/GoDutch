// 本地测试时，需要先打开 mongodb : cd Documents --> mongod --dbpath data/db
var MongoClient = require('mongodb').MongoClient;
// var DB_CONN_STR = 'mongodb://RickCole:.dante2226120@getstarted-shard-00-00-ambre.mongodb.net:27017,getstarted-shard-00-01-ambre.mongodb.net:27017,getstarted-shard-00-02-ambre.mongodb.net:27017/godutch?ssl=true&replicaSet=GetStarted-shard-0&authSource=admin';
var DB_CONN_STR = 'mongodb://localhost:27017/godutch';

var insertData = function (db, param, res) {
  //连接到表
  var collection = db.collection('user');
  //查询数据
  var registerInfo = {
    "username": param.username,
    "password": param.password
  };

  collection.insert(registerInfo, (err, result) => {
    if (err) {
      console.log('Error:' + err);
      return;
    }

    console.log(result);

    res.send({
      errorCode: '0',
      msg: '注册成功!'
    });

  })
}


module.exports = function (req, res) {
  console.log('接收到的数据：', req.body);

  MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("数据库连接成功！");
    insertData(db, req.body, res);
    db.close();
  });
}