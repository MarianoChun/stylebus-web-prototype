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

/*no está mal la logica, pero haria un pequeño cambio:
en datosStyleBus, pondria la cantidad de PASAJES disponibles y no pasajeros,
y que a la hora filtrar la cantidad de pasajeros no supere la cantidad de pasajes disponibles,
si los supera y/o no existe la busqueda estaria bueno mostrar un mensajito diciendo que no hay coincidencias*/

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