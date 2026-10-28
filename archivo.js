const esperar = (ms, mensaje) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(mensaje);
            resolve("Ya terminé");
        }, ms);
    });
};

const main = async () => {
    try {
        console.log('Inicio del programa');
        
        await esperar(3000, "Primer timeout");
        await esperar(5, "Segundo timeout");
        await esperar(0, "Tercer timeout");
        
        console.log('Fin del programa');
    } catch (error) {
        console.error(error);
    }
};

main();