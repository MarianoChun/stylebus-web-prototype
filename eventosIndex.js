document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("filtro-paquetes").style.display = "none";
    document.getElementById("filtro-excursiones").style.display = "none";
});

document.getElementById("radio-pasaje-ida-vuelta").addEventListener("click", function () {
    habilitarCampoPasajeVuelta();
});

document.getElementById("radio-pasaje-ida").addEventListener("click", function () {
    deshabilitarCampoPasajeVuelta();
});

document.getElementById("radio-paquete-ida-vuelta").addEventListener("click", function () {
    habilitarCampoPaqueteVuelta();
});

document.getElementById("radio-paquete-ida").addEventListener("click", function () {
    deshabilitarCampoPaqueteVuelta();
});

function habilitarCampoPasajeVuelta() {
    var checkFecha = document.getElementById("pasaje-fecha-vuelta");
    checkFecha.disabled = false;
    checkFecha.style.backgroundColor = "rgb(255, 255, 255)";
}

function deshabilitarCampoPasajeVuelta() {
    document.getElementById("pasaje-fecha-vuelta").value = "";
    var checkFecha = document.getElementById("pasaje-fecha-vuelta");
    checkFecha.disabled = true;
    checkFecha.style.backgroundColor = "rgb(171, 171, 171)";
}

function habilitarCampoPaqueteVuelta() {
    var checkFecha = document.getElementById("paquete-fecha-vuelta");
    checkFecha.disabled = false;
    checkFecha.style.backgroundColor = "rgb(255, 255, 255)";
}

function deshabilitarCampoPaqueteVuelta() {
    document.getElementById("paquete-fecha-vuelta").value = "";
    var checkFecha = document.getElementById("paquete-fecha-vuelta");
    checkFecha.disabled = true;
    checkFecha.style.backgroundColor = "rgb(171, 171, 171)";
}

function crearDivListaProductos(){
    eliminarDiv("lista-excursiones");

    var div = document.createElement('div');
    div.id = "lista-excursiones";
    div.style.cssText =
        `
        color: #ffffff;
        width: 100%;
        max-width: 800px;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;    
        padding: 30px 20px;
        box-shadow: 10px 5px 5px 5px rgba(0, 0, 0, 0.221);
        background-color: #494cf8;
    `;

    return div;
}

function mostrarExcursiones(ubicacion, fecha) {
    var divLista = crearDivListaProductos();

    var ul = document.createElement('ul');
    var excursiones = filtrarExcursionesPorUbicacionYFecha(ubicacion, fecha);

    if (excursiones.length != 0) {
        for (let excursion of excursiones) {
            var li = document.createElement('li');
            var button = document.createElement('button');
            button.textContent = 'Agregar a carrito';

            li.innerHTML = 
            "Ubicación: " + excursion.ubicacion + "<br>" + 
            "Descripción: " + excursion.descripcion + "<br>" + 
            "Fecha: " + excursion.fecha + "<br>";
            li.appendChild(button);
            ul.appendChild(li);
        }

        divLista.appendChild(ul);
        document.getElementById('container-filtros').appendChild(divLista);

    } else {
        eliminarDiv("lista-excursiones");
    }
}

function mostrarPasajes(origen, destino, fechaIda, fechaVuelta, cantidadPasajeros) {
    var divLista = crearDivListaProductos();

    var ul = document.createElement('ul');
    var pasajes = filtrarPasajes(origen, destino, fechaIda, fechaVuelta, cantidadPasajeros);
    console.log("entra mostrar pasajes");
    if (pasajes.length != 0) {

        console.log("pasajes no son vacios");
        for (let pasaje of pasajes) {
            var li = document.createElement('li');
            var button = document.createElement('button');
            button.textContent = 'Agregar a carrito';

            if(fechaVuelta === '') {
                li.innerHTML = 
                "Origen: " + pasaje.origen + "<br>" + 
                "Destino: " + pasaje.destino + "<br>" + 
                "Fecha ida: " + pasaje.fechaIda + "<br>" +
                "Cantidad de pasajeros: " + pasaje.cantidadPasajeros + "<br>";
            } else {
                li.innerHTML = 
                "Origen: " + pasaje.origen + "<br>" + 
                "Destino: " + pasaje.destino + "<br>" + 
                "Fecha ida: " + pasaje.fechaIda + "<br>" +
                "Fecha vuelta: " + pasaje.fechaVuelta + "<br>" + 
                "Cantidad de pasajeros: " + pasaje.cantidadPasajeros + "<br>";
            }

            li.appendChild(button);
            ul.appendChild(li);
        }

        divLista.appendChild(ul);
        document.getElementById('container-filtros').appendChild(divLista);

    } else {
        eliminarDiv("lista-excursiones");
    }
}

function mostrarPaquetes(origen, destino, fechaIda, fechaVuelta, cantidadExcursiones) {
    var divLista = crearDivListaProductos();

    var ul = document.createElement('ul');
    var paquetes = filtrarPaquetes(origen, destino, fechaIda, fechaVuelta, cantidadExcursiones);
    if (paquetes.length != 0) {

        console.log("pasajes no son vacios");
        for (let paquete of paquetes) {
            var li = document.createElement('li');
            var button = document.createElement('button');
            button.textContent = 'Agregar a carrito';

            if(fechaVuelta === '') {
                li.innerHTML = 
                "Origen: " + paquete.origen + "<br>" + 
                "Destino: " + paquete.destino + "<br>" + 
                "Fecha ida: " + paquete.fechaIda + "<br>" +
                getExcursionesString(paquete.excursiones);
            } else {
                li.innerHTML = 
                "Origen: " + paquete.origen + "<br>" + 
                "Destino: " + paquete.destino + "<br>" + 
                "Fecha ida: " + paquete.fechaIda + "<br>" +
                "Fecha vuelta: " + paquete.fechaVuelta + "<br>" + 
                getExcursionesString(paquete.excursiones);
            }

            li.appendChild(button);
            ul.appendChild(li);
        }

        divLista.appendChild(ul);
        document.getElementById('container-filtros').appendChild(divLista);

    } else {
        eliminarDiv("lista-excursiones");
    }
}

function getExcursionesString(excursiones){
    let excursionesString = "<pre>Excursiones: <br>";

    for(let excursion of excursiones){
        excursionesString += "    " + excursion.descripcion + " <br>";
    }

    excursionesString += "<pre>";
    return excursionesString;
}
function eliminarDiv(nombreDiv) {
    var div = document.getElementById(nombreDiv);
    if (div != null) {
        div.remove();
    }
}

function habilitarFiltroPasajes() {
    document.getElementById("filtro-pasajes").style.display = "";
    document.getElementById("filtro-paquetes").style.display = "none";
    document.getElementById("filtro-excursiones").style.display = "none";
}

function habilitarFiltroPaquetes() {
    document.getElementById("filtro-pasajes").style.display = "none";
    document.getElementById("filtro-paquetes").style.display = "";
    document.getElementById("filtro-excursiones").style.display = "none";
}

function habilitarFiltroExcursiones() {
    document.getElementById("filtro-pasajes").style.display = "none";
    document.getElementById("filtro-paquetes").style.display = "none";
    document.getElementById("filtro-excursiones").style.display = "";
}
