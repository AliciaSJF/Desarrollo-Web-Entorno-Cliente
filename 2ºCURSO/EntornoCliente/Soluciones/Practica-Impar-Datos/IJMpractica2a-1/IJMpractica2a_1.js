// Iñigo Samuel Jiménez Montoro
let listaregistros = [];
let listaObjetos = [];

const radioNombre = document.getElementById("coln");
const radioApellidos = document.getElementById("cola");
const radioDireccion = document.getElementById("cold");
const radioTodos = document.getElementById("colt");
const output = document.getElementById("lienzo");

crearObjetosDirecciones();
asignarEventos();

function crearObjetosDirecciones() {
    listaregistros = listaDirecciones.split("\n");
    for(reg of listaregistros) {
        let registro = reg.split(",");
        // si no hay un valor nulo, se añade el objeto al listado
        if(!registro.includes("")) {
            listaObjetos.push({
                nombre: registro[0],
                apellidos: registro[1],
                direccion: registro[2]
            });
        }
    }
}

function listarNombres() {
    output.innerHTML = "";
    let txt = `<table border="1"><tr><th>Nombre</th></tr>`;
    for(obj of listaObjetos) {
        txt += `<tr><td>${obj.nombre}</td></tr>`
    }
    txt += `</table>`
    output.innerHTML = txt;
}

function listarApellidos() {
    output.innerHTML = "";
    let txt = `<table border="1"><tr><th>Apellidos</th></tr>`;
    for(obj of listaObjetos) {
        txt += `<tr><td>${obj.apellidos}</td></tr>`
    }
    txt += `</table>`
    output.innerHTML = txt;
}

function listarDirecciones() {
    output.innerHTML = "";
    let txt = `<table border="1"><tr><th>Dirección</th></tr>`;
    for(obj of listaObjetos) {
        txt += `<tr><td>${obj.direccion}</td></tr>`
    }
    txt += `</table>`
    output.innerHTML = txt;
}

function listarTodo() {
    output.innerHTML = "";
    let txt = `<table border="1"><tr><th>Nombre</th><th>Apellidos</th><th>Dirección</th></tr>`;
    for(obj of listaObjetos) {
        txt += `<tr><td>${obj.nombre}</td><td>${obj.apellidos}</td><td>${obj.direccion}</td></tr>`
    }
    txt += `</table>`
    output.innerHTML = txt;
}

function asignarEventos() {
    radioNombre.addEventListener("input", listarNombres);
    radioApellidos.addEventListener("input", listarApellidos);
    radioDireccion.addEventListener("input", listarDirecciones);
    radioTodos.addEventListener("input", listarTodo);
}
