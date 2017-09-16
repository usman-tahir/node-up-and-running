
(function() {

	'use strict';

	var net = require('net'),
		chatServer = net.createServer(),
		clientList = [];

	chatServer.on('connection', function(client) {
		client.write('Hi!\n');

		clientList.push(client);

		client.on('data', function(data) {
			var i;

			for(i = 0; i < clientList.length; i += 1) {
				// write the data to all clients
				clientList[i].write(data);
			}
		});
	});

	chatServer.listen(8080);

}());