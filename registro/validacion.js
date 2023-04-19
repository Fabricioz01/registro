// Obtener los elementos del formulario
const form = document.querySelector('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contraseña');
const confirmarContrasena = document.getElementById('confirmar-contraseña');
const fechaNacimiento = document.getElementById('fecha-de-nacimiento');
const cedula = document.getElementById('cedula');
const numero = document.getElementById('numero');

// sirve para validar los datos y mostrar las notificaciones.
form.addEventListener('submit', (event) => {
  // evita volver a llenar los campos en caso de que se envie con un campo incorrecto.
  event.preventDefault();
  
  // Validar que el nombre no esté vacío
  if (nombre.value === '') {
    alert('Por favor ingrese su nombre');
    nombre.focus();
    return false;
  }

  // Validar que el apellido no esté vacío
  if (apellido.value === '') {
    alert('Por favor ingrese su apellido');
    apellido.focus();
    return false;
  }
  
  // Validar que el correo sea válido 
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo.value)) {
    alert('Por favor ingrese un correo válido');
    correo.focus();
    return false;
  }
  
  // Validar que la contraseña tenga al menos 8 caracteres
  if (contrasena.value.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres');
    contrasena.focus();
    return false;
  }
  
  // Validar que la confirmación de contraseña coincida con la contraseña
  if (contrasena.value !== confirmarContrasena.value) {
    alert('Las contraseñas no coinciden');
    confirmarContrasena.focus();
    return false;
  }
  
  // Validar que la fecha de nacimiento no esté vacía
  if (fechaNacimiento.value === '') {
    alert('Por favor ingrese su fecha de nacimiento');
    fechaNacimiento.focus();
    return false;
  }

  // Validar que la cédula tenga exactamente 10 caracteres
  if (cedula.value.length !== 10) {
    alert('La cédula debe tener exactamente 10 caracteres');
    cedula.focus();
    return false;
  }
  
  // Validar que el número de teléfono sea un número de 10 dígitos
  if (numero.value.toString().length !== 10) {
    alert('El número de teléfono debe tener exactamente 10 dígitos');
    numero.focus();
    return false;
  }
  
  // Si todos los campos son validados se envia el formulario
  alert('Formulario enviado pero no hay base de datos jsjs');
  form.submit();
});
