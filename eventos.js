document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("filtro-paquetes").style.display="none";
    document.getElementById("filtro-excursiones").style.display="none";
});

document.querySelector('.mostrar-contrasenia #mostrar').addEventListener('click', e => {
   mostrarContrasenia(e);
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

function mostrarContrasenia(e) {
    const passwordInput = document.querySelector('#contrasenia');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        e.target.textContent = 'Ocultar';
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        e.target.textContent = 'Mostrar';
        passwordInput.type = 'password';
    }
}