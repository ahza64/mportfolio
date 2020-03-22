var express = require('express');
var path = require('path');
var app = express();


var dir = path.join(__dirname, '/');
app.use(express.static(dir));


app.get(['/'], function (req, res) {
  console.log("entry url");
  res.sendFile(__dirname + '/index.html');
});

app.get(['/resume'], function (req, res) {
  console.log("resume url");
  res.sendFile(__dirname + '/FullStack.pdf');
});

app.get(['/*'], function (req, res) {
  console.log("base url redirect");
  res.redirect(req.baseUrl + '/');
});

var port = process.env.PORT || 3001 || 3000;
app.listen(port, function () {
  console.log('node express frontend up on port ' + port);
});
//
