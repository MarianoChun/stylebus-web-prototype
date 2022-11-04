function getExcursiones(){
    return excursiones;
}

function getPasajesIda(){
    return pasajesIda;
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

function filtraPasajesIda(origen, destino, fecha, cantidadPasajeros){
    console.log("filtrosPasaje");
    let pasajes = [];

    

    for(let pasaje of getPasajesIda()) {
        if(pasaje.origen.toLowerCase() === origen.toLowerCase()
        && pasaje.destino.toLowerCase() === destino.toLowerCase()
        && pasaje.fecha === fecha
        && pasaje.cantidadPasajeros === parseInt(cantidadPasajeros)) {
            pasajes.push(pasaje);
        }
    }

    return pasajes;
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