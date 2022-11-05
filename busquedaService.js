function getExcursiones(){
    return excursiones;
}

function getPasajesIda(){
    return pasajesIda;
}

function getPasajesIdaVuelta(){
    return pasajesIdaVuelta;
}

function getPaquetesIda(){
    return paquetesIda;
}

function getPaquetesIdaVuelta(){
    return paquetesIdaVuelta;
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

function getCantidadExcursiones(excursiones){
    return excursiones.length;
}

function filtrarPaquetes(origen, destino, fechaIda, fechaVuelta, cantidadExcursiones){
    let paquetes = [];
    let paquetesFiltrados = [];

    if(fechaVuelta == ''){
        paquetes = getPaquetesIda();

        for(let paquete of paquetes) {
            if(paquete.origen.toLowerCase() === origen.toLowerCase()
            && paquete.destino.toLowerCase() === destino.toLowerCase()
            && paquete.fechaIda === fechaIda
            && getCantidadExcursiones(paquete['excursiones']) === parseInt(cantidadExcursiones)) {
                paquetesFiltrados.push(paquete);
            }
        }
    } else {
        paquetes = getPaquetesIdaVuelta();
        for(let paquete of paquetes) {
            if(paquete.origen.toLowerCase() === origen.toLowerCase()
            && paquete.destino.toLowerCase() === destino.toLowerCase()
            && paquete.fechaIda === fechaIda
            && paquete.fechaVuelta === fechaVuelta
            && getCantidadExcursiones(paquete['excursiones']) === parseInt(cantidadExcursiones)) {
                paquetesFiltrados.push(paquete);
            }
        }
    }
    
    return paquetesFiltrados;
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