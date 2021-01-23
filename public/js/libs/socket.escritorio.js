// Comando para establecer conexion
var socket = io();
var label = $('small');

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
  window.location = 'index.html';
  throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
$('h1').text(`Escritorio ${escritorio}`);
label.text()

$('button').on('click', function() {
  socket.emit('atenderTicket', {escritorio: escritorio}, function(resp) {
    label.text((resp === 'No hay Tickets') ? resp :  `Ticket ${resp.numero}`)
  });
});
