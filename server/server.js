var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var livereload = require('connect-livereload');
var livereloadport = 35729;

//Middleware
app.use(express.static(__dirname + './../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Add live reload
app.use(livereload({port: livereload}));

app.use('/api', require('./controllers/controller'));


/*app.get('/', function (req, res) {
  res.render('index');
});*/

var server = app.listen( (process.env.PORT || 3000), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Gulp sass Livereload Express App');
});