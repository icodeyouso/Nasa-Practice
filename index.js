var express = require('express');

var app = express();

var bodyParser = require('body-parser');


var port = process.env.PORT || 8080

console.log("its lit");

app.listen(port);