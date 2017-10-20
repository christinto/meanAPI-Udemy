//sets up a simple server
// how to run once nodemon app.js is run.. :) http://localhost:3000/api/setupTodos
var express = require('express');
var app = express();
var mongoose = require('mongoose');
// this will run what's in index under module.exports
var config = require('./config');
var setupController = require('./controllers/setupController');


var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//this gets the username and password via config.json and mongo will connect
//mongoose stays open
mongoose.connect(config.getDbConnectionString());
setupController(app);

//app.listen(port);  <Standard.. but wanna see in console
app.listen(port);
/*
app.listen(port,function() {
    console.log('app listening on port')
    */

