// 本地测试时，需要先打开 mongodb : cd Documents --> mongod --dbpath data/db
var MongoClient = require('mongodb').MongoClient;
//var DB_CONN_STR = 'mongodb://RickCole:.dante2226120@getstarted-shard-00-00-ambre.mongodb.net:27017,getstarted-shard-00-01-ambre.mongodb.net:27017,getstarted-shard-00-02-ambre.mongodb.net:27017/ricktest?ssl=true&replicaSet=GetStarted-shard-0&authSource=admin';
var DB_CONN_STR = 'mongodb://localhost:27017/godutch';

var insertData = function (db, callback) {
  //连接到表 user
  var collection = db.collection('user');
  //插入数据
  var data = [{
    "username": "rickcole",
    "password": "111"
  }, {
    "username": "coco",
    "password": "222"
  }];
  collection.insert(data, function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
}

MongoClient.connect(DB_CONN_STR, function (err, db) {
  console.log("连接成功！");
  insertData(db, function (result) {
    console.log(result);
    db.close();
  });
});