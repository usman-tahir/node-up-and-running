
(function() {

	'use strict';

	var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		tweets = [];

	app.use(bodyParser.json());
	app.listen(8080);

	app.get('/', function(req, res) {
		res.send('Welcome to Node Twitter');
	});

	app.post('/send', function(req, res) {
		if (req.body && req.body.tweet) {
			tweets.push(req.body.tweet);
			res.send({status: 'ok', message: 'Tweet received!'});
		} else {
			// When no Tweet was sent
			res.send({status: 'nok', message: 'No Tweet received.'});
		}
	});

	app.get('/tweets', function(req, res) {
		res.send(tweets);
	});

}());