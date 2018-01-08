// 本地测试时，需要先打开 mongodb : cd Documents --> mongod --dbpath data/db
var MongoClient = require('mongodb').MongoClient;
// var DB_CONN_STR = 'mongodb://RickCole:.dante2226120@getstarted-shard-00-00-ambre.mongodb.net:27017,getstarted-shard-00-01-ambre.mongodb.net:27017,getstarted-shard-00-02-ambre.mongodb.net:27017/godutch?ssl=true&replicaSet=GetStarted-shard-0&authSource=admin';
var DB_CONN_STR = 'mongodb://localhost:27017/godutch';

var selectData = function (db, param, res) {
  //连接到表
  var collection = db.collection('user');
  //查询数据
  var userIsExisted = {
    "username": param.username
  };

  collection.find(userIsExisted).toArray(function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }

    if (!result.length) {
      console.log('查询成功，' + '用户:' + param.username + ' 不存在!');
      res.send({
        errorCode: '0',
        msg: '用户:' + param.username + ' 不存在'
      });
      return;
    }

    res.send({
      errorCode: 0,
      msg: '用户信息查询成功!',
      data: result[0]
    });
  });
}

module.exports = function (req, res) {
  console.log('接收到的数据：', req.body);

  console.log('req.session.user:', req.session.user);

  MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("数据库连接成功！");
    selectData(db, req.session.user, res);
    db.close();
  });
};