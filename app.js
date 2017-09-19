const chalk = require('chalk');
const nunjucks = require('nunjucks');
const indexRoute = require('./routes');
const userRoute = require('./routes/users');
const tweetRoute = require('./routes/tweets');
const express = require('express');
const bodyParser = require('body-parser')
const twitterApp = express();
const PORT = 3000;

//setting views, view engine
twitterApp.set('view engine','html')
twitterApp.engine('html', nunjucks.render);
nunjucks.configure('views',{noCache:true}); 

// Express
twitterApp.use(express.static("public"))
twitterApp.use(bodyParser.urlencoded({extended: true}));
twitterApp.use(bodyParser.json());
twitterApp.use('/', indexRoute);
twitterApp.use('/users', userRoute);
twitterApp.use('/tweets', tweetRoute);

// Start server 
let server = twitterApp.listen(PORT,function(){
	console.log(chalk.red.bold('IN YOUR FACE XIFENG!'+ PORT));
});


