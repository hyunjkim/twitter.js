const express = require('express');
const tweeter = express.Router();
const tweetBank = require('../tweetBank');

//add (name, content)
tweeter.get('/:id', function(req,res){
	let id = Number(req.params.id);
	let tweets = tweetBank.find({id:id});
	res.render('index',{tweets : tweets});
});

module.exports = tweeter;