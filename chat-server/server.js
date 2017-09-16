
(function() {

	'use strict';

	var net = require('net'),
		chatServer = net.createServer(),
		clientList = [];

	chatServer.on('connection', function(client) {
		client.name = client.remoteAddress + ':' + client.remotePort;
		client.write(client.name + ' has joined.\n');

		clientList.push(client);

		client.on('data', function(data) {
			broadcast(data, client);
		});

		client.on('end', function() {
			clientList.splice(clientList.indexOf(client), 1);
		});
	});

	function broadcast(message, client) {
		var cleanup = [],
			i;

		for (i = 0; i < clientList.length; i += 1) {
			if (client !== clientList[i]) {
				if (clientList[i].writable) {
					clientList[i].write(client.name + ': ' + message);
				} else {
					cleanup.push(clientList[i]);
					clientList[i].destroy();
				}
			}
		}

		// Remove the dead Nodes out of the write loop
		for(i = 0; i < cleanup.length; i += 1) {
			clientList.splice(clientList.indexOf(cleanup[i]), 1);
		}
	}

	chatServer.listen(8080);

}());