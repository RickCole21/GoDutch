var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://RickCole:.dante2226120@getstarted-shard-00-00-ambre.mongodb.net:27017,getstarted-shard-00-01-ambre.mongodb.net:27017,getstarted-shard-00-02-ambre.mongodb.net:27017/ricktest?ssl=true&replicaSet=GetStarted-shard-0&authSource=admin';

var insertData = function (db, callback) {
  //连接到表 site
  var collection = db.collection('site');
  //插入数据
  var data = [{"name": "rick", "url": "www.rick.com"}, {"name": "morty", "url": "www.morty.com"}];
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