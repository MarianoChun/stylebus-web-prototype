function getExcursiones(){
    return excursiones;
}

function getPasajes(){
    return pasajes;
}

function getPaquetes(){
    return paquetes;
}


function filtrarExcursionesPorUbicacionYFecha(ubicacion, fecha){
    let excursiones = [];

    for(let excursion of getExcursiones()) { 
        if(excursion.ubicacion.toLowerCase() === ubicacion.toLowerCase() || excursion.fecha === fecha) {    
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
    let pasajes = getPasajes();
    let pasajesFiltrados = [];
    if(fechaVuelta == ''){
        console.log("fecha vuelta vacia");

        for(let pasaje of pasajes) {
            if(pasaje.origen.toLowerCase() === origen.toLowerCase()
            && pasaje.destino.toLowerCase() === destino.toLowerCase()
            && pasaje.fechaIda === fechaIda
            && pasaje.cantidadPasajes >= parseInt(cantidadPasajeros)) {
                pasaje.cantidadPasajes -= cantidadPasajeros;
                console.log(pasaje.cantidadPasajes);
                pasajesFiltrados.push(pasaje);
            }
        }
    } else {
        console.log("fecha vuelta no vacia");
        for(let pasaje of pasajes) {
            if(pasaje.origen.toLowerCase() === origen.toLowerCase()
            && pasaje.destino.toLowerCase() === destino.toLowerCase()
            && pasaje.fechaIda === fechaIda
            && pasaje.fechaVuelta === fechaVuelta
            && pasaje.cantidadPasajes >=  parseInt(cantidadPasajeros)) {
                pasaje.cantidadPasajes -= cantidadPasajeros;
                console.log(pasaje.cantidadPasajes);
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
    let paquetes = getPaquetes();
    let paquetesFiltrados = [];

    if(fechaVuelta == ''){
        console.log(paquetes);
        for(let paquete of paquetes) {
            console.log(paquete['excursiones']);
            console.log(cantidadExcursiones);
            console.log(getCantidadExcursiones(paquete['excursiones']) + " " + parseInt(cantidadExcursiones));
            if(paquete.origen.toLowerCase() === origen.toLowerCase()
            && paquete.destino.toLowerCase() === destino.toLowerCase()
            && paquete.fechaIda === fechaIda
            && getCantidadExcursiones(paquete['excursiones']) === parseInt(cantidadExcursiones)) {
                paquetesFiltrados.push(paquete);
            }
        }
    } else {
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
