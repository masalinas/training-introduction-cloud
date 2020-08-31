var express = require('express');
var logger = require('morgan');

var port = process.env.PORT || 4200;

var app = express();
app.use(logger('combined'));
app.use('/', express.static(__dirname));

app.listen(port, function() {
  console.log('Server started on ' + port);
});