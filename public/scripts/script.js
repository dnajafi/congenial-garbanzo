// YOUR JS CODE FOR ALL PAGES GOES HERE

var socket = io();

$('form').submit(function(){
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
});

socket.on('chat message', function(message){
  $('#messages').append($('<li>').text(message));
});
