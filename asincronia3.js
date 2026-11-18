// 1. Crear una promesa (función dividir con Promesa)
function dividirPromesa(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject(new Error('No se puede dividir entre cero'));
      } else {
        resolve(a / b);
      }
    }, 1000);
  });
}

// 2. Consumir la promesa
dividirPromesa(10, 2)
  .then((resultado) => {
    console.log('Resultado:', resultado);
  })
  .catch((err) => {
    console.log('Error:', err.message);
  })
  .finally(() => {
    console.log('Operación terminada\n');
  });


// 3. Ejemplo de múltiples promesas en paralelo con Promise.all
const esperar = (ms, valor) =>
  new Promise((resolve) => setTimeout(() => resolve(valor), ms));

console.time('total');

Promise.all([
  esperar(2000, 'A'),
  esperar(1000, 'B'),
  esperar(1500, 'C')
])
  .then((resultados) => {
    console.log('Resultados Promise.all:', resultados); // ['A', 'B', 'C']
    console.timeEnd('total'); // Tarda unos 2 segundos (el tiempo de la más lenta)
  })
  .catch((err) => {
    console.log('Error en Promise.all:', err.message);
  });