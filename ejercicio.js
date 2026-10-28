const saludarDespuesDe = (nombre, segundos, callback) => {
    if (segundos < 0) {
        return callback(new Error("El tiempo no puede ser negativo"));
    }

    setTimeout(() => {
        callback(null, nombre);
    }, segundos);
};

const mostrarSaludo = (err, nombre) => {
    if (err) {
        console.log("Error:", err.message);
        return;
    }
    console.log(`¡Hola, ${nombre}! ¿Cómo estás?`);
};

console.log('Esto se imprime primero');

saludarDespuesDe('Ana', 2000, mostrarSaludo);

console.log('Esto se imprime antes del saludo porque el temporizador es asíncrono');