var express = require('express');
var app = express();

app.use(express.static('/index.html'));

app.get(['/'], function (req, res) {
  console.log("entry url");
  res.sendFile(__dirname + '/index.html');
});

app.get(['/resume'], function (req, res) {
  console.log("resume url");
  res.sendFile(__dirname + '/devResume.pdf');
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
