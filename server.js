var express = require('express');
var app = express();

app.use(express.static('public'))

// var routes = require('./routes')(app);

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login.html', (req, res) => {
  res.sendFile(__dirname + '/view/login.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/view/about.html');
});

app.get('/bills', (req, res) => {
  res.sendFile(__dirname + '/view/bills.html');
});

app.get('/bill-list', (req, res) => {
  res.sendFile(__dirname + '/view/bill-list.html');
});

var server = app.listen(3001, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});