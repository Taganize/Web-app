var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);

var port = process.env.PORT || 8080;
server.listen(port);
console.log("App running on http://localhost:"+port);
app.use("/", express.static(path.join(__dirname, 'site')));
