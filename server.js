var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

//Connecting to the database
var dbLocation = process.env.DBLOCATION || 'localhost/ports';
mongoose.connect('mongodb://' + dbLocation);
var db = mongoose.connection;
db.on('error', function(){
	console.log("Database connection error");
});
db.once('open', function () {
	console.log("Database connection was succesful");
});

//	Body parser
app.use(bodyParser.json());

//	Static folders
app.use('/views',express.static('views'));
app.use('/css',express.static('css'));
app.use('/angular',express.static('angular'));

require('./routes')(app);	//	Adding routes
var port = process.env.PORT || 8888;
app.listen(port);
console.log("Server running at port " + port);
