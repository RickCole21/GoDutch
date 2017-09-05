// 本地测试时，需要先打开 mongodb : cd Documents --> mongod --dbpath data/db
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/godutch';

var insertData = function(db, callback) {
  //连接到表 user
  var collection = db.collection('user');
  //插入数据
  var data = [{
<<<<<<< HEAD
    "name": "aaa", "url": "www.aaa.com"
  }, {
    "name": "bbb", "url": "www.bbb.com"
  }, {
    "name": "ccc", "url": "www.ccc.com"
  }, {
    "name": "ddd", "url": "www.ddd.com"
  }, {
    "name": "eee", "url": "www.eee.com"
  }, {
    "name": "fff", "url": "www.fff.com"
  }, {
    "name": "ggg", "url": "www.ggg.com"
  }, {
    "name": "hhh", "url": "www.hhh.com"
  }, {
    "name": "iii", "url": "www.iii.com"
  }, {
    "name": "jjj", "url": "www.jjj.com"
  }, {
    "name": "kkk", "url": "www.kkk.com"
  }, {
    "name": "lll", "url": "www.lll.com"
  }, {
    "name": "mmm", "url": "www.mmm.com"
  }, {
    "name": "nnn", "url": "www.nnn.com"
  }, {
    "name": "ooo", "url": "www.ooo.com"
  }, {
    "name": "ppp", "url": "www.ppp.com"
  }, {
    "name": "qqq", "url": "www.qqq.com"
  }, {
    "name": "rrr", "url": "www.rrr.com"
  }, {
    "name": "sss", "url": "www.sss.com"
  }];
  collection.insert(data, function (err, result) {
=======
    "username": "rickcole",
    "password": "111"
  }, {
    "username": "coco",
    "password": "222"
  }];
  collection.insert(data, function(err, result) {
>>>>>>> a9881feefbe49ffb26d9992f380f35a7a26580b7
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log("连接成功！");
  insertData(db, function(result) {
    console.log(result);
    db.close();
  });
});