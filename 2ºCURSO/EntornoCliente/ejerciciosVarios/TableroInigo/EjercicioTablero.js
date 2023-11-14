function validarEntrada() {
    let clave = document.getElementById("clave1").value;
    let inputCheck2 = document.getElementById("chk2");
    let inputCheck3 = document.getElementById("chk3");
    let inputCheck5 = document.getElementById("chk5");
    
    if (clave.length != 8) {
        return;
    }
    if (!clave.startsWith("J")) {
        return;
    }
    if (clave.indexOf("ap") == -1) {
        return;
    }
    if (!inputCheck2.checked) {
        return;
    }
    if (!inputCheck3.checked) {
        return;
    }
    if (!inputCheck5.checked) {
        return;
    }

    crearTabla();

}

const contenido = document.getElementById("tablerodibujo");
const paleta = document.getElementById("controles");
let celdasTablero;
let celdasPaleta;
let colorSeleccionado;

function crearTabla() {
    paleta.style.visibility = "visible";
    contenido.innerHTML = `<p>Este parrafo desaparece y aparece el tablero de dibujo</p>`;
    
    let texto = "<table>";
    for(let i = 0; i < 50; i++) {
        texto += "<tr>"
        for(let j = 0; j < 70; j++) {
            texto += "<td></td>"
        }   
        texto += "</tr>"
    }
    texto += "</table>"
    contenido.innerHTML = texto;

    asignarEventos();
}

function asignarEventos() {
    celdasTablero = contenido.querySelectorAll("td");
    let color1 = document.getElementsByClassName("color1");
    let color2 = document.getElementsByClassName("color2");
    let color3 = document.getElementsByClassName("color3");
    let color4 = document.getElementsByClassName("color4");
    let color5 = document.getElementsByClassName("color5");
    let color6 = document.getElementsByClassName("color6");

    color1[0].addEventListener("click", ponerColor1);
    color2[0].addEventListener("click", ponerColor2);
    color3[0].addEventListener("click", ponerColor3);
    color4[0].addEventListener("click", ponerColor4);
    color5[0].addEventListener("click", ponerColor5);
    color6[0].addEventListener("click", ponerColor6);

    for(let i = 0; i < celdasTablero.length; i++) {
        celdasTablero[i].addEventListener("click", comenzarPintar);
    }
}

function ponerColor1() {
    colorSeleccionado = "#FF0";
}
function ponerColor2() {
    colorSeleccionado = "#0F0";
}
function ponerColor3() {
    colorSeleccionado = "#000";
}
function ponerColor4() {
    colorSeleccionado = "#F00";
}
function ponerColor5() {
    colorSeleccionado = "#06C";
}
function ponerColor6() {
    colorSeleccionado = "#FFF";
}

const pincel = document.getElementById("pincel");

function comenzarPintar() {
    for(let i = 0; i < celdasTablero.length; i++) {
        celdasTablero[i].addEventListener("click", activarPincel);
    }
}

function activarPincel(e) {
    e.target.style.backgroundColor = colorSeleccionado;
    pincel.innerHTML = "Pincel activado";
    for(let i = 0; i < celdasTablero.length; i++) {
        celdasTablero[i].removeEventListener("click", activarPincel);
        celdasTablero[i].addEventListener("mouseenter", pintar);
        celdasTablero[i].addEventListener("click", desactivarPincel);
    }
}
function desactivarPincel() {
    pincel.innerHTML = "Pincel desactivado";
    for(let i = 0; i < celdasTablero.length; i++) {
        celdasTablero[i].removeEventListener("mouseenter", pintar);
        celdasTablero[i].removeEventListener("click", desactivarPincel);
    }
}

function pintar(e) {
    e.target.style.backgroundColor = colorSeleccionado;
}

function activarTablero() {
    crearTabla();
}