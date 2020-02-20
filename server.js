var express = require('express');
var app = express();

app.use(express.static('/index.html'));

app.get(['/'], function (req, res) {
  console.log("entry url");
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(3000);
