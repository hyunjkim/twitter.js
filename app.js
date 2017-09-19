const chalk = require('chalk');
// const morgan = require('morgan'); // Morgan logs only upon response, merging in request info.
const nunjucks = require('nunjucks');
const express = require('express');
const bodyParser = require('body-parser')
const twitterApp = express();
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
const PORT = 3000;

//setting views, view engine
twitterApp.set('view engine','index.html')
twitterApp.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views',{noCache:true}); // point nunjucks to the proper directory for templates
//Caching a view saves the rendered document and 
//only re-renders it if the data has actually changed. 
//This is important in the production site, 
//but during development it gets in the way as we are constantly changing code. 


// Express
twitterApp.use(bodyParser.urlencoded({extended: true}));
twitterApp.use(bodyParser.json());
twitterApp.use('/',require('./routes/index'));
twitterApp.get('/', function(req, res) {
    res.render( 'index.html', {title: 'Hall of Fame', people: people});
});

// Start server 
let server = twitterApp.listen(PORT,function(){
	console.log(chalk.red.bold('IN YOUR FACE XIFENG!'+ PORT));
});


// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// nunjucks.render('index.html', people, function (err, output) {
//     console.log(output);
// });
