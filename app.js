const chalk = require('chalk');
const express = require('express');
const app = express();
const PORT = 3000;


// I am setting up the server
app.get('/', function(req, res){
  res.end(req.toString().body());
});

// 
app.listen(PORT,function(){
	console.log(chalk.red.bold('IN YOUR FACE XIFENG!'+ PORT));
});

// create logging that will fire for every incoming request
app.use(function(req,res,next){
	console.log(chalk.green('stuff'))
})