// Comando para establecer conexion
var socket = io();
var label = $('#lblNuevoTicket');
socket.on('connect', function () {
  console.log('usuario conectado');

  // client.on('disconnect', () => {
  //   console.log('usuario desconectado');
  // });
});

socket.on('estadoActual', function(data) {
  label.text(data.actual);
});

socket.on('disconnect', function () {
  console.log('usuario desconectado');
});


$('button').on('click', function() {
  socket.emit('siguienteTicket', null, function(siguiente) {
    label.text(siguiente);
  });
});