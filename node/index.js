var express = require('express');
var os = require('os');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    next();
  });

app.get('/', function (req, res) {
  res.json({ hostname: os.hostname() });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
