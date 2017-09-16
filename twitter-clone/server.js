
(function() {

	'use strict';

	var express = require('express'),
		app = express.createServer();

	app.get('/', function(req, res) {
		res.send('Welcome to Node Twitter');
	});

	app.listen(8080);

}());