const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('.inputData');
formulario.action = "ingresar.html";
formulario.method = "GET"; 

const expresiones = {
    Nombre: /^[a-zA-ZÀ-ÿ]{3,32}$/, // Letras, numeros, guion y guion_bajo
    Usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    Email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,4}$/,
    password: /^.{4,16}$/, // 4 a 12 digitos.
}

const validarformulario = (e) => {
    switch (e.target.name) {
        case "Nombre":
            ValidarCampo(expresiones.Nombre, e.target, 'Nombre');
            break;
        case "Usuario":
            ValidarCampo(expresiones.Usuario, e.target, 'Usuario');
            break;
        case "password":
            ValidarCampo(expresiones.password, e.target, 'password');
            ValidarPassword2();
            break;
        case "password2":
            ValidarPassword2();
            break;
        case "Email":
            ValidarCampo(expresiones.Email, e.target, 'Email');
            break;
    }
}


const ValidarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(campo).className = document.getElementById(campo).className.replace (" inputError","");
        document.getElementById(campo).className = document.getElementById(campo).className + " inputExito";
        document.getElementById(`formulario__input-${campo}`).innerHTML ="Ingreso exitoso";
        document.getElementById(`caracteres-${campo}`).style.display = "none";
        campos[campo] = true;
    } else {
        document.getElementById(campo).className = document.getElementById(campo).className.replace (" inputExito","");
        document.getElementById(campo).className = document.getElementById(campo).className + " inputError";
        document.getElementById(`formulario__input-${campo}`).innerHTML="Ingrese bien el campo";
        document.getElementById(`caracteres-${campo}`).style.display = "block";
        campos[campo] = false;
    }
}

const ValidarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value == inputPassword2.value){
        document.getElementById('formulario__input-password2').innerHTML="";
        inputPassword2.className = inputPassword2.className.replace (" inputError","");
        inputPassword2.className = inputPassword2.className + " inputExito";
        campos['password2'] = true;
    } else {
        document.getElementById('formulario__input-password2').innerHTML="Las contraseñas deben ser iguales";
        inputPassword2.className = inputPassword2.className.replace (" inputExito","");
        inputPassword2.className = inputPassword2.className + " inputError";
        campos['password2'] = false;
    }
}
const campos = {
    Nombre: false,
    Usuario: false,
    password: false,
    password2: false,
    Email: false
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarformulario);
    input.addEventListener('blur', validarformulario);
});

const comprobar = () =>{
    const terminos = document.getElementById('terminos');
    if(campos.Nombre && campos.Usuario && campos.password && campos.password2 && campos.Email && terminos.checked){
        alert("Usuario registrado Exitosamente");
        setTimeout(() => {
            formulario.submit();
        }, 500);
    } else {
        let campo_error = document.getElementsByClassName("btn-enviar");
        if(!campos.Nombre)
            campo_error = document.getElementById("Nombre");
        if(!campos.Usuario)
            campo_error = document.getElementById("Usuario");
        if(!campos.Email)
            campo_error = document.getElementById("Email");
        if(!campos.password)
            campo_error = document.getElementById("password");
        if(!campos.password2)
            campo_error = document.getElementById("password2");
        if(!terminos.checked)
            campo_error = document.getElementById("terminos");
        campo_error.focus();
    }
};