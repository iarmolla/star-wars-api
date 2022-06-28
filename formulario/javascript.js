
const formulario=document.getElementById('formulario');
const input=document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,30}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
let validarUser=false;
let validarPass=false;

const validarFormulario=(e)=>{
    switch(e.target.name){
        case "user":
            if(e.target.value=='juanperez@gmail.com'){
                validarUser=true;
            }
            else{
                validarUser=false;
            }     
            validarCampo(expresiones.correo,e.target,'usuario');
        break;
        case "password":
            if(e.target.value==1787742836863899){
                validarPass=true;
            }
            else{
                validarPass=false;
            }
            validarCampo(expresiones.password,e.target,'password')
        break;
    }
}

const validarCampo=(expresion,input,campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-exclamation-triangle');
        document.querySelector(`#grupo__${campo}  i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    }
    else{        
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-exclamation-triangle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    }
    if(campo=='usuario' && input.value!='juanperez@gmail.com'){
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-exclamation-triangle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    }
    else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-exclamation-triangle');
        document.querySelector(`#grupo__${campo}  i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    }
    if(campo=='password'){
        if(input.value!=1787742836863899){
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-exclamation-triangle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        }
        else{
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-exclamation-triangle');
            document.querySelector(`#grupo__${campo}  i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        }
    }
}
input.forEach((input) =>{
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

function redireccionar(e){  
    e.preventDefault();
    if(validarUser && validarPass){
        location.href="file:///C:/Users/ivan/Desktop/parcial 2/starwars/index.html"; 
        //cambiar la ruta para que haga la redireccion a la pagina de star wars y tiene que ser sin el live server
    }
}


