// Creamos un objeto para almacenar la información de los dispositivos
let devices = {};

// Función para obtener el ID del dispositivo actual
function getDeviceId() {
  // Generamos un ID aleatorio para el dispositivo
  return Math.random().toString(36).substr(2, 9);
}

// Función para comprobar si el usuario está intentando acceder desde más de un dispositivo
function checkMultipleDevices() {
  // Obtenemos la información del dispositivo actual
  let deviceId = getDeviceId();

  // Comprobamos si el dispositivo ya está en la lista de dispositivos
  if (devices[deviceId]) {
    // Si el dispositivo ya está en la lista, mostramos el mensaje de error
    showMessage("Puedes ver contenido en 1 dispositivo compatible a la vez.");
  } else {
    // Si el dispositivo no está en la lista, lo agregamos
    devices[deviceId] = true;
  }
}

// Función para mostrar el mensaje de error
function showMessage(message) {
  // Mostramos el mensaje de error en un elemento HTML
  document.getElementById("message").innerHTML = message;
}

// Llamamos a la función checkMultipleDevices cada vez que el usuario intenta acceder al contenido
checkMultipleDevices();