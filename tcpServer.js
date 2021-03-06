var net = require('net');

var HOST = '127.0.0.1';
var PORT = 9900;

var clients = [];

exports.emit = function(eventName){
    for (clientID in clients) {
        try {
            clients[clientID].write(eventName);
        } catch(e) {
            console.log("Unable to send message to client");
        }
    }
};

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {
    
    clients.push(sock);

    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
        var index = clients.indexOf(sock);
        if (index > -1) {
            clients = clients.splice(index, 1);
        }
    });
    
}).listen(PORT);

console.log('TCP Server listening on ' + HOST +':'+ PORT);