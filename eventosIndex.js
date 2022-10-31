document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("filtro-paquetes").style.display="none";
    document.getElementById("filtro-excursiones").style.display="none";
});

function habilitarFiltroPasajes(){
    document.getElementById("filtro-pasajes").style.display="";
    document.getElementById("filtro-paquetes").style.display="none";
    document.getElementById("filtro-excursiones").style.display="none";
}

function habilitarFiltroPaquetes(){
    document.getElementById("filtro-pasajes").style.display="none";
    document.getElementById("filtro-paquetes").style.display="";
    document.getElementById("filtro-excursiones").style.display="none";
}

function habilitarFiltroExcursiones(){
    document.getElementById("filtro-pasajes").style.display="none";
    document.getElementById("filtro-paquetes").style.display="none";
    document.getElementById("filtro-excursiones").style.display="";
}
