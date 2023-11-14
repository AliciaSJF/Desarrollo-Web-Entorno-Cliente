const literal = "Final del Campeonato <br> 14 noviembre";
const starcolor = "gold";
const defaultcolor = "rgb(212, 212, 208)";
const empezar = document.getElementById("start");
const carrusel = document.getElementById("carrusel");
const keycolor = document.getElementById("keycolor");
const scolor = document.getElementById("scolor");
const avisos = document.getElementById("avisos");
const dia1 = document.getElementById("dia1");
const dia2 = document.getElementById("dia2");
const dia3 = document.getElementById("dia3");
let intervalo1;
let intervalo2;

asignarEventos();

function asignarEventos(){
    empezar.addEventListener("click",mostrarKeyColor);
    scolor.addEventListener("input",validarColor);

}

function mostrarKeyColor(){
    keycolor.style.visibility = "visible";
}

function validarColor(){
    let color = document.getElementById("scolor").value;
    if(color == "dorado"){
        correcto();
    }else{
        avisos.innerHTML="OPCIÓN NO VÁLIDA";
    }

}
function correcto(){
    carrusel.style.visibility = "visible";
    empezar.innerHTML = "Parar anuncios";
    empezar.removeEventListener("click",mostrarKeyColor);
    empezar.addEventListener("click", pararAnuncios);
    avisos.style.visibility = "hidden";
    keycolor.style.visibility = "hidden";
    dia1.innerHTML = "";
    intervalo1 = setInterval(cambiarAnuncio2,500)
    intervalo2 = setInterval(cambiarAnuncio1,1000)
}

function pararAnuncios(){
    dia1.innerHTML = "Final del Campeonato <br> 14 noviembre"
    dia2.style.backgroundColor = defaultcolor;
    dia2.innerHTML = "";
    dia3.innerHTML = "";
    dia3.style.backgroundColor = defaultcolor;
    clearInterval(intervalo1);
    clearInterval(intervalo2);
    intervalo1 = null;
    intervalo2 = null;
}
function cambiarAnuncio1(){
    dia3.innerHTML = "Final del Campeonato <br> 14 noviembre"
    dia3.style.backgroundColor = starcolor;
    dia2.innerHTML = "";
    dia2.style.backgroundColor = defaultcolor;
    
}
function cambiarAnuncio2(){

    dia2.innerHTML = "Final del Campeonato <br> 14 noviembre"
    dia2.style.backgroundColor = starcolor;
    dia3.innerHTML = "";
    dia3.style.backgroundColor = defaultcolor;
 
}
