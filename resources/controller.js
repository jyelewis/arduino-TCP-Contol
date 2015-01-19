var socket = io.connect();

$(document).ready(function(){
	$("[data-event]").click(function(){
		socket.emit("newEvent", $(this).attr("data-event"));
	});
});
