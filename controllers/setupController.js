//goes up a level then into todoModel.js
//setting up seed data into a mongodb!
var Todos = require('../models/todoModel');

//express app will pass into this
//if u wanna generate fake json data, use json generator
//just an api endpoint..so make app aware in app,js
//var setupController
module.exports = function(app) {
    app.get('/api/setupTodos', function(req,res) {
        //seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false   
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        //as it's a mongoose created model, can use mongo library
        //outputs results back to screen
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
}