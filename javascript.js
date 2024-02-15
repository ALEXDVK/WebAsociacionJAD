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
    var correo = document.getElementById('correo').value
    var contraseña = document.getElementById('contraseña').value
    var Estado_civil= document.getElementById('Estado_civil').value
    var motivacion= document.getElementById('Motivacion').value
    var observaciones= document.getElementById('observaciones').value
    var opcion =confirm("¿Deseas enviar el formulario con estos datos : \nNombre :" + nombre + "\nApellido:" + apellido+ "\nDNI:" + DNI + "\nContraseña :" + clave + "\nTeléfono :" + telefono 
    + "\nCorreo :" + correo + "\nContraseña :" + contraseña + "\nEstado civil :" + Estado_civil + "\nMotivación :" + motivacion
    +  "\nObservaciones :" + observaciones);
  }


  