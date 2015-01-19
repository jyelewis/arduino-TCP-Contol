server_address = "example.com";
port = 9900;
serial_port = "COM8";


import socket
import sys
import serial

# Create a TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect the socket to the port where the server is listening
server_address = (server_address, port)
print(sys.stderr, 'connecting to %s port %s' % server_address)
sock.connect(server_address)

ser = serial.Serial(serial_port, 9600)


while True:
	response = sock.recv(1024)
	print(response)
	ser.write(response)
	
