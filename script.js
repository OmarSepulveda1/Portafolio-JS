// Validación de formulario
$('#form-contacto').on('submit', function(e) {
  e.preventDefault();
  const nombre = $('#nombre').val();
  const correo = $('#correo').val();
  const mensaje = $('#mensaje').val();

  if (nombre && correo && mensaje) {
    alert('Mensaje enviado con éxito. ¡Gracias por tu interés!');
    $(this).trigger('reset');
  } else {
    alert('Por favor, completa todos los campos correctamente.');
  }
});

// Evento botón 'Conóceme más'
$('#moreBtn').on('click', function () {
  $('html, body').animate({
    scrollTop: $('#skills').offset().top
  }, 800);
});
