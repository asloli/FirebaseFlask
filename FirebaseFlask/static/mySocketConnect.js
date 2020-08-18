socket = io();
socket.emit('getToken');

socket.on('receiveToken', function(data) {
    myToken = data;
	console.log(data);
});