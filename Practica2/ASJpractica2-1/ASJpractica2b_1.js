const usuario = document.getElementById("colu");
const empresa = document.getElementById("cole");
const ciudad = document.getElementById("colc");
const lienzo = document.getElementById("lienzo");


usuario.addEventListener("click",listarUsuarios);
empresa.addEventListener("click",listarEmpresas);
ciudad.addEventListener("click",listarCiudades);


let listaregistros = [];
listaregistros = listaUsuarios.split('\n'); 
let  lista = [];

asignarEventos();
crearObjetosUsuarios();

function crearObjetosUsuarios() {
    for(let i = 0; i< listaregistros.length;i++){
       let registro =listaregistros[i].split(','); 
        let objeto = {
                usuario: registro[0],
                empresa: registro[1],
                direccion: registro[2]
        }
        lista [i]= objeto;
    }
}



function listarUsuarios() {
    lienzo.innerHTML = "";
    let text= `<table border = "1"><tr><th>Nombre</th></tr>`;
    for(let i = 0; i<lista.length;i++){
        if(lista[i].usuario == ""){
            continue;
        }else{
            text += `<tr><td> ${lista[i].usuario}</td></tr>`;
        }

    }
    text += `</table>`
    lienzo.innerHTML = text;
 
 

  
}

function listarEmpresas() {
    lienzo.innerHTML="";
        
    let text= `<table border = "1"><tr><th>Nombre</th></tr>`;
    for(let i = 0; i<lista.length;i++){
        if(lista[i].empresa == ""){
            continue;
        }else{
            text += `<tr><td> ${lista[i].empresa}</td></tr>`;
        }

    }
    text += `</table>`
    lienzo.innerHTML = text;
 
}

function listarCiudades() {
   lienzo.innerHTML = "";
            
    let text= `<table border = "1"><tr><th>Nombre</th></tr>`;
    for(let i = 0; i<lista.length;i++){
        if(lista[i].ciudad == ""){
            continue;
        }else{
            text += `<tr><td> ${lista[i].direccion}</td></tr>`;
        }

    }
    text += `</table>`
    lienzo.innerHTML = text;
}

function listarUsuariosEmpresas() {   
}
function listarUsuariosCiudades() {}

function listarTodo() {

}

function asignarEventos() {
    usuario.addEventListener("click",comprobarCheck);
    ciudad.addEventListener("click",comprobarCheck);
    empresa.addEventListener("click",comprobarCheck);
    

}
function comprobarCheck(){

   if(usuario.checked){
     listarUsuarios();
   }else if (usuario.checked == false){
    lienzo.innerHTML = ""; 
   }else if(ciudad.checked){
        listarCiudades();
   }else if(ciudad.checked == false){
    lienzo.innerHTML ="";
   }else if (empresa.checked){
        listarEmpresas();
   }else if (usuario.checked && ciudad.checked){
        listarUsuariosCiudades();
   }else if(usuario.checked && empresa.checked){
         listarUsuariosEmpresas();
   }else{
    innerHTML ="";
   }

}
