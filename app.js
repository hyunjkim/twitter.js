const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser')
const twitterApp = express();
const PORT = 3000;

//setting views, view engine
// twitterApp.set('view engine','index.html')


// Express
twitterApp.use(bodyParser.urlencoded({extended: true}));
twitterApp.use(bodyParser.json());
twitterApp.use('/',require('./routes/index'));


// Start server 
let server = twitterApp.listen(PORT,function(){
	console.log(chalk.red.bold('IN YOUR FACE XIFENG!'+ PORT));
});

