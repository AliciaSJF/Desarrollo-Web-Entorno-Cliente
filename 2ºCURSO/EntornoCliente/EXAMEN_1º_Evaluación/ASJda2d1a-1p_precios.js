const avisos = document.getElementById("avisos");
const consola = document.getElementById("consola");
const pricemin = document.getElementById("pricemin");
const pricemax = document.getElementById("pricemax");
const boton = document.getElementById("btnbuscar");
let producto = productos.split("\n");
let tiempoespera;


cogerDatos();
asignarEventos();

function asignarEventos(){
    boton.addEventListener("click", darAvisos)

}

function cogerDatos(){
    for(let i = 0; i <producto.length; i++){
        let campos = producto[i].split(",");
        document.write(campos[i]);
       // document.write(campos[1]);
    }
    document.write(producto[0]);
}
function darAvisos(){
    console.log("HOLA");
    let precioMin = parseFloat(pricemin.value);
    let precioMax = parseFloat(pricemax.value);
    console.log(precioMin);

    if(isNaN(precioMax)|| isNaN(precioMin) ){
        avisos.innerHTML = "DEBES INTRODUCIR UN RANGO CORRECTO DE PRECIOS"
    }else {
        tiempoespera = setTimeout(buscar(),2000);
    }
}

function buscar (){
    /*if(no existen){
        avisos.innerhtml = "NO existen productos"
    }else{
        mostrar 
    }
    */
}



