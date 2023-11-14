let listaregistros = [];

let registros = listaDirecciones.split("\n");

function crearObjetosDirecciones() {
  for (let i = 0; i < registros.length; i++) {
    let campos = registros[i].split(",");

  }
}

function listarNombres() {
  let texto = "<table>";
  for (let i = 0; i < listaregistros.length; i++) {
    if (listaregistros[i].nombre == "") {
      continue;
    } else {
      texto += `<tr><td>${listaregistros[i].nombre}</td></tr>`;
    }
  }
  texto += "</table>";
  document.getElementById("lienzo").innerHTML = texto;
}

function listarApellidos() {
  let texto = "<table>";
  for (let i = 0; i < listaregistros.length; i++) {
    if (listaregistros[i].apellidos == "") {
      continue;
    } else {
      texto += `<tr><td>${listaregistros[i].apellidos}</td></tr>`;
    }
  }
  texto += "</table>";
  document.getElementById("lienzo").innerHTML = texto;
}

function listarDirecciones() {
  let texto = "<table>";
  for (let i = 0; i < listaregistros.length; i++) {
    if (listaregistros[i].direccion == "") {
      continue;
    } else {
      texto += `<tr><td>${listaregistros[i].direccion}</td></tr>`;
    }
  }
  texto += "</table>";
  document.getElementById("lienzo").innerHTML = texto;
}

function listarTodo() {
  let texto = "<table>";
  for (let i = 0; i < listaregistros.length; i++) {
    if (
      listaregistros[i].nombre == "" ||
      listaregistros[i].apellidos == "" ||
      listaregistros[i].direccion == ""
    ) {
      continue;
    } else {
      texto += `<tr><td>${listaregistros[i].nombre}</td><td>${listaregistros[i].apellidos}</td><td>${listaregistros[i].direccion}</td></tr>`;
    }
  }
  texto += "</table>";
  document.getElementById("lienzo").innerHTML = texto;
}

function asignarEventos() {
  document.getElementById("coln").addEventListener("click", listarNombres);
  document.getElementById("cola").addEventListener("click", listarApellidos);
  document.getElementById("cold").addEventListener("click", listarDirecciones);
  document.getElementById("colt").addEventListener("change", listarTodo);
}

crearObjetosDirecciones();
asignarEventos();
