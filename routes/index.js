const express = require('express');
const router = express.Router();  // apply routes to it, and then tell our application to use those routes
const tweetBank = require('../tweetBank');


// Route
router.get('/', function (req, res) {
  let nameOfParams = req.params;
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

//Return router
module.exports = router;
