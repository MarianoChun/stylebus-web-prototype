document.querySelector('.mostrar-contrasenia #mostrar').addEventListener('click', e => {
    mostrarContrasenia(e);
});

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

function fechaMaximaNacimiento() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = (yyyy - 18) + '-' + mm + '-' + dd;

    var fecha_nacimiento = document.getElementById('fecha-nacimiento');
    fecha_nacimiento.max = today;
}