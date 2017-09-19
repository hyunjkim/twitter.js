//Express Router - just routing stuff
const express = require('express');
const twitterApp = express();
const router = express.Router();  // apply routes to it, and then tell our application to use those routes


twitterApp.use('/',router);

router.param('name', function(req,res,next,name){

	//log each request to the console
	console.log('doing name validations on',name)
    // continue doing what we were doing and go to the route
    req.name = name;
	next();
});

// Route
router.get('/tweets/:name', function(req,res){
	res.send('Hello ' + req.name);
})
// router.get('/', function(req,res){
// 	res.send('im home');
// })

router.post(function(req,res){
	console.log('processing');
	res.send('processing post!!!')
})
/*Route middleware in Express is a way to do something before a request is processed. 
This could be things like checking if a user is authenticated, 
logging data for analytics, or anything 
else we'd like to do before we actually spit out information to our user.*/



//Return router
module.exports = router;
