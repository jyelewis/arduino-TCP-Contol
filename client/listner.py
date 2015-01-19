import socket
import sys

# Create a TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect the socket to the port where the server is listening
server_address = ('arduino.jyelewis.com', 6969)
print(sys.stderr, 'connecting to %s port %s' % server_address)
sock.connect(server_address)

while True:
	response = sock.recv(1024)
	print(response)
	#do something with it here