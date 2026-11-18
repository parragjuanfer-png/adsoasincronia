// Simulación de funciones que retornan promesas
const obtenerUsuario = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: 'Miguel' });
      } else {
        reject(new Error(`El usuario con id ${id} no existe`));
      }
    }, 500);
  });
};

const obtenerPedidos = (usuario) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Pedido 1', 'Pedido 2']);
    }, 500);
  });
};

// Función asíncrona usando async/await y try/catch
async function mostrarInformacionUsuario(id) {
  try {
    const usuario = await obtenerUsuario(id);
    console.log('Usuario:', usuario.nombre);

    const pedidos = await obtenerPedidos(usuario);
    console.log('Pedidos del usuario:', pedidos);
  } catch (err) {
    console.log('Error capturado:', err.message);
  }
}

// Probando con un usuario existente y uno que no existe
console.log('--- Buscando usuario 1 ---');
mostrarInformacionUsuario(1);

setTimeout(() => {
  console.log('\n--- Buscando usuario 99 (Error) ---');
  mostrarInformacionUsuario(99);
}, 1500);