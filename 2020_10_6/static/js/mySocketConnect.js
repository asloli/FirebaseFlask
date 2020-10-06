socket = io();
socket.emit('getToken');

function rebackSocket(){
	socket.emit('reback', {"token" : myToken});
}

socket.on('receiveToken', function(data) {
    myToken = data;
	console.log(data);
});

socket.on('reback', function(info) {
	//console.log(info);
	canvasOldStack.remove(info);
	//console.log("length",canvasOldStack.length);
});