//our base schema is in the Todos variable. Same drill as setupController
var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

//easy to get data out of mongo into http response..

//parses out json from the http request body
module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));


    //we get json coming back. This is endpont for all todos for a particular person
    //eg. localhost:3000/api/todos/test     (test is mlab acc uname)
    app.get('/api/todos/:uname', function(req, res) {
        //deines params we're looking for :p
        Todos.find({ username: req.params.uname},
        function(err, todos) {
            if (err) throw err;

            res.send(todos);
        });
    });


//anoter api.... id is auto generated by mongo
 //easy to get data out of mongo into http node response
 //eg
 // http://localhost:3000/api/todo/59e9d97cc468a03c54325c4a
 //response data that comes back from mongo
app.get('/api/todo/:id', function(req, res) {
    Todos.findById({ _id: req.params.id }, function(err, todo) {
        if (err) throw err;

        res.send(todo);
    });
 });

 //request will be converted to body json
 //updating via mongoose too. Posting todo inside http request
 // if there's an id on the body object, will post, if not then creates
 //looks http requet object json 
 //run in postman, make new + post unction, click body, raw and json app.. write there
 /* to post new data for example.. try this in postman json object style
 {
	"todo": "Buy steak",
	"isDone": "false",
	"hasAttachment": "false"
}
or to update by id, just add id of doc u want at top o object and it find document u wanna update
 {
     "id": "59eee6f9522817453c118a9d",
     "todo": "Buy tunes",
	 "isDone": "false",
	 "hasAttachment": "false"

 }
*/   //http response is res.send

  app.post('/api/todo', function(req, res) {
    
    if (req.body.id) {
        Todos.findByIdAndUpdate(req.body.id, { todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }, function(err, todo) {
            if (err) throw err;
            
            res.send('Success');
        });
    }
     //creating new model object, if there is no id.. creates username test
    else {
       
       var newTodo = Todos({
           username: 'test',
           todo: req.body.todo,
           isDone: req.body.isDone,
           hasAttachment: req.body.hasAttachment
       });
        //If it saves, sends success as a http response
       newTodo.save(function(err) {
           if (err) throw err;
           res.send('Success');
       });
        
    }
    
});
    
    //express will call this function if we wanna delete. Mongoose func
    app.delete('/api/todo', function(req, res) {
        
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
        
    });
    
}