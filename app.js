var express = require('express');
var app = express();

/*
==================
    config
==================
*/
var morgan = require('morgan');
app.use(morgan('combined'))

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


/*
==================
    router
==================
*/
var user = require('./routes/user');
app.use('/user', user);

//start the program
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});