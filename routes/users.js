const express = require("express");
const users = express.Router();
const tweetBank = require('../tweetBank');

users.get('/:name',function(req,res){
	let name = req.params.name;
	let tweetList = [tweetBank.find({name : name})];
	res.render('index', {list : tweetList});
});

module.exports = users;