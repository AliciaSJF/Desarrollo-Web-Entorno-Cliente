// Iñigo Samuel Jiménez Montoro
let listaRegistros = [];

const output = document.getElementById("lienzo");

pintarRegistros();

function pintarRegistros() {
    listaRegistros = listaDirecciones.split("\n");
    let txt = "";
    for(reg of listaRegistros) {
        let registro = reg.split(",");
        // si no hay un valor nulo, se añade el objeto al listado
        if(!registro.includes("")) {
            txt += `<p>Nombre: ${registro[0]} | Apellidos: ${registro[1]} | Dirección: ${registro[2]}</p>`;
        }
    }
    output.innerHTML = txt;
    // una vez generados todos los <p> les asignamos los EventListeners
    asignarEventos();
}

function asignarEventos() {
    let parrafos = output.querySelectorAll("p");
    parrafos.forEach((parrafo) => {
        parrafo.addEventListener("mouseenter", function() {
            parrafo.style.backgroundColor = "red";
        });
        parrafo.addEventListener("mouseleave", function() {
            parrafo.style.backgroundColor = "white";
        });
    });
}