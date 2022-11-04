function getExcursiones(){
    return excursiones;
}

function getPasajesIda(){
    return pasajesIda;
}

function getPasajesIdaVuelta(){
    return pasajesIdaVuelta;
}


function filtrarExcursionesPorUbicacionYFecha(ubicacion, fecha){
    let excursiones = [];

    for(let excursion of getExcursiones()) {
        if(excursion.ubicacion.toLowerCase() === ubicacion.toLowerCase() && excursion.fecha === fecha) {
            
            excursiones.push(excursion);
        }
    }

    return excursiones;
}

function filtrarPasajes(origen, destino, fechaIda, fechaVuelta, cantidadPasajeros){
    let pasajes = [];
    let pasajesFiltrados = [];

    if(fechaVuelta == ''){
        console.log("fecha vuelta vacia");
        pasajes = getPasajesIda();

        for(let pasaje of pasajes) {
            if(pasaje.origen.toLowerCase() === origen.toLowerCase()
            && pasaje.destino.toLowerCase() === destino.toLowerCase()
            && pasaje.fechaIda === fechaIda
            && pasaje.cantidadPasajeros === parseInt(cantidadPasajeros)) {
                pasajesFiltrados.push(pasaje);
            }
        }
    } else {
        pasajes = getPasajesIdaVuelta();
        console.log("fecha vuelta no vacia");
        for(let pasaje of pasajes) {
            if(pasaje.origen.toLowerCase() === origen.toLowerCase()
            && pasaje.destino.toLowerCase() === destino.toLowerCase()
            && pasaje.fechaIda === fechaIda
            && pasaje.fechaVuelta === fechaVuelta
            && pasaje.cantidadPasajeros === parseInt(cantidadPasajeros)) {
                pasajesFiltrados.push(pasaje);
                console.log("pasa ida vuelta push");
            }
        }
    }
    
    return pasajesFiltrados;
}


// function getExcursionPorUbicacionFecha(ubicacion, fecha) {
//     let excursiones = getExcursiones();

//     for(let excursion of excursiones) {
//         if(excursion.ubicacion.toLowerCase === ubicacion.toLowerCase && excursion.fecha === fecha) {
//             return excursion;
//         }
//     }

//     return {};
// }