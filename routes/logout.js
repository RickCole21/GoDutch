module.exports = function (req, res) {
  console.log('接收到的数据：', req.body);
  delete req.session.user;
  res.send({
    errorCode: 0,
    msg: '注销成功！'
  });
};