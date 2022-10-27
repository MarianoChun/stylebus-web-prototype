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