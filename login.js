document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginform").addEventListener('submit', enviarFormulario);
});

document.getElementById("logueo").click(function(event){
    enviarFormulario(event);
});

var intentos = 3;
function validarUsuario(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = new String(username).toLowerCase();
    
    return (user == ("alvarado@gmail.com") && password == "Hola123!");
}

function enviarFormulario(evento){
    evento.preventDefault();

    if(validarUsuario()){
        alert("Logueo exitoso");
        this.submit();
        window.location.href = "index.html"; 
    }
    else {
        intentos--;
         alert("Usuario invalido. Te quedan " + intentos + " intentos.");
    
        if (intentos == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("logueo").disabled = true;
            alert("Usuario bloqueado.");
            return false;
        }
    }
}