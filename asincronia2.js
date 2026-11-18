// 1. Ejemplo asíncrono con callback
function recibirMensaje(callback) {
  console.log('Esperando mensaje en WhatsApp...');
  setTimeout(() => {
    console.log('Mensaje recibido');
    callback(); // se llama solo cuando el mensaje llegó
  }, 3000);
}

function leerMensaje() {
  console.log('Leyendo mensaje...');
}

// Ejecución de la prueba asíncrona:
recibirMensaje(leerMensaje);
console.log('Sigo usando el celular');


// 2. Convención error primero (error-first)
function dividir(a, b, callback) {
  setTimeout(() => {
    if (b === 0) {
      callback(new Error('No se puede dividir entre cero'), null);
      return; // Importante para evitar llamadas dobles
    }
    callback(null, a / b);
  }, 1000);
}

// Probando la función de división con error-first
dividir(10, 2, (err, resultado) => {
  if (err) {
    console.log('Error:', err.message);
    return;
  }
  console.log('Resultado:', resultado);
});