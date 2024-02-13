document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('usuario').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
      alert('No has escrito nada en el apellido');
      return;
    }
    var DNI = document.getElementById('DNI').value;
    if(DNI.length < 9) {
      alert('No es un DNI válido');
      return;
    }
    var clave = document.getElementById('contraseña').value;
    if (clave.length  < 5 ) {
      alert('La contraseña debe tener un mínimo de 5 caracteres');
      return;
    }
    var telefono = document.getElementById('tel').value;
    if(telefono.length < 9) {
      alert('No es un teléfono válido');
      return;
    }
    this.submit();
  }