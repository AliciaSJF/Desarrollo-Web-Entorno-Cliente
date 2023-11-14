let listaregistros = [];

let registros = listaDirecciones.split("\n");

const lienzo = document.getElementById("lienzo");

let parrafos = "";

for (let i = 0; i < registros.length; i++) {
  let campos = registros[i].split(",");
  if (campos[0] == "" || campos[1] == "" || campos[2] == "") {
    continue;
  }
  parrafos += `<p name="linea"> Nombre: ${campos[0]} ; Apellido: ${campos[1]} ; Dirección: ${campos[2]} </p>`;
}

lienzo.innerHTML = parrafos;

let lineas = document.getElementsByTagName("p");

for (let i = 0; i < lineas.length; i++) {
  lineas[i].addEventListener("mouseover", () => {
    lineas[i].style.backgroundColor = "yellow";
  });
}

for (let i = 0; i < lineas.length; i++) {
  lineas[i].addEventListener("mouseleave", () => {
    lineas[i].style.backgroundColor = "white";
  });
}
