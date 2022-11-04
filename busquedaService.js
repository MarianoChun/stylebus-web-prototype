function getExcursiones(){
    return excursiones;
}


function filtrarExcursionesPorUbicacionYFecha(ubicacion, fecha){
    let excursiones = [];

    for(let excursion of getExcursiones()) {
        if((excursion.ubicacion.toLowerCase() === ubicacion.toLowerCase()) && (excursion.fecha === fecha)) {
            
            excursiones.push(excursion);
        }
    }

    return excursiones;
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