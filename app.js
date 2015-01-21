var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


var port = 8888;
if (process.argv[2]){
	port = process.argv[2];
}
server.listen(port);
console.log("Web server listning on port " + port);
app.use("/", express.static(__dirname + '/resources'));

app.get('*', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});



//socket setup

var tcpServer = require('./tcpServer');

io.on('connection', function (socket) {
	socket.on('newEvent', function(eventName){
		console.log(eventName);
		tcpServer.emit(eventName);
	});
});
