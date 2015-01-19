# arduino-TCP-Contol
Includes a node.js script which proxies a websocket to a TCP socket and a python script which connects to this TCP socket and relays messages via serial

# Usage
Run app.js on a machine you can access with a web browser and remotely from the python script
fill out the server and serial port variables in client/listener.py on the machine connected to the arduino and run with python2
Access the web interface by on the server (default port is 8888) and tap buttons to send messages to the arduino via serial

The buttons and messages can be changed within the HTML document /resources/index.html
