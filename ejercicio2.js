const prepararPanqueques = (callback) => {
    console.log('Preparando panqueques...');
    setTimeout(() => {
        callback(null, 'Panqueques listos para servir');
    }, 3000);
};

const prepararJugo = (callback) => {
    setTimeout(() => {
        callback(null, 'Jugo de naranja listo');
    }, 1000);
};

prepararPanqueques((err, mensajePanqueques) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(mensajePanqueques);

    prepararJugo((err, mensajeJugo) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(mensajeJugo);
    });
});