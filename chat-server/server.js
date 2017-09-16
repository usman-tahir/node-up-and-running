
(function() {

	'use strict';

	var net = require('net'),
		chatServer = net.createServer();

	chatServer.on('connection', function(client) {
		client.write('Hi!\n');
		client.write('Bye!\n');

		client.end();
	});

	chatServer.listen(8080);

}());