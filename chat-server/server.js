
(function() {

	'use strict';

	var net = require('net'),
		chatServer = net.createServer();

	chatServer.on('connection', function(client) {
		client.write('Hi!\n');

		client.on('data', function(data) {
			console.log(data);
		});
	});

	chatServer.listen(8080);

}());