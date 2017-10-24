//sets up a simple server. This api app can do everything, update, post new, delete 
// how to run once nodemon app.js is run.. :) http://localhost:3000/api/setupTodos
var express = require('express');
var app = express();
var mongoose = require('mongoose');
// this will run what's in index under module.exports
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

//sets up public folder as assets
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//this gets the username and password via config.json and mongo will connect
//mongoose stays open.. controller folder connects to mongo!
mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

//app.listen(port);  <Standard.. but wanna see in console
app.listen(port);
/*
app.listen(port,function() {
    console.log('app listening on port')
    */

