var express=require("express");
var path=require('path');
var bodyParser=require('body-Parser');
var app=express();
var db=require('../database')
var request = require('request')
app.use(express.static(path.join(__dirname, "../client")));

app.set('view engine', 'ejs');

//var urlencodedParser = bodyparser.urlencoded({ extended: false })
// app.use(bodyparser.json())
app.use(bodyParser.urlencoded({ extended: false }));


// app.post('/signup',function(req,res){
	
// })
//waiting for any request on /add
app.post('/add', function(req, res){
var insa = new db ({
	user_name:req.body.name,
  task:req.body.newtodo
}).save(function(err,dasd){
	if(err){ console.log(err)}

})
res.redirect('/')
});
app.post('/show',function(req,res){
	console.log(req.body.nameee)
	db.find({user_name: req.body.nameee},function(err,data){
		console.log(data)
		//tasks array of obj
		var tasks=data;
        //'tasks' file inside views folder'
        //todos variable iside ejs file
		res.render('show', {todos: tasks})
	})
})

// var insa = new db ({
// 	user_name:'Mazen',
//   password:"147147"
// }).save(function(err,dasd){
// 	if(err){ console.log(err)}
// })


var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);

});