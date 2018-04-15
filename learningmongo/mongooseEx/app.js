var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moongose = require('mongoose');
var Book = require('./Book.model');

var db='mongodb://localhost/example';

moongose.connect(db);

var port = 8080;

app.listen(port,function(){
    console.log(`Server started at port ${port}`);
});

