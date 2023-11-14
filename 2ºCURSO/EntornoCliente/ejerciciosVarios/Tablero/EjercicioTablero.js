const chk1 = document.getElementById("chk1");
const chk2 = document.getElementById("chk2");
const chk3 = document.getElementById("chk3");
const chk4 = document.getElementById("chk4");
const chk5 = document.getElementById("chk5");
const chk6 = document.getElementById("chk6");
const clave = document.getElementById("clave1");
let pintar = false;
let colorActivo ="";


function validarEntrada(){
    let passwd = document.getElementById("clave1").value;

    if(passwd.startsWith("J") && passwd.length == 8 && passwd.includes("ap")){
     //si todo se cumple llamas a validar checkboxes
        validarCheckboxes();
    }else{
        alert("Clave incorrecta");
    }
}
function validarCheckboxes(){
    let cajas = document.querySelectorAll('input[type="checkbox"]');
    if(cajas[1].checked && cajas[2].checked && cajas[4].checked 
        && !cajas[0].checked && !cajas[3].checked && !cajas[5].checked){
            alert("Ya puedes dibujar");
            pintar = true;
            crearTabla()
        }else{
            alert("Incorrecto");
        }
}
function ponerPincel() {
    const pincel = document.getElementById("pincel");
    if (colorActivo === "") {
        pincel.innerHTML = "Pincel Desactivado";
        pincel.style.backgroundColor = ""; // o cualquier otro color que desees
    } else {
        pincel.innerHTML = "Pincel Activado";
        pincel.style.backgroundColor = colorActivo;
    }

   


}

function colorAmarillo(){
    colorActivo = "#FF0";
    ponerPincel();
}
function colorVerde(){
    colorActivo = "#0F0";
    ponerPincel();

}
function colorNegro(){
    colorActivo = "#000";
    ponerPincel();

}
function colorRojo(){
    colorActivo = "#F00";
    ponerPincel();

}
function colorAzul(){
    colorActivo = "#06C";
    ponerPincel();

}
function colorBlanco(){
    colorActivo = "#FFF";
    ponerPincel();

}
function pintarCelda(){

}

function crearTabla() {
    //if (validarEntrada == true){
  
    const contenido = document.getElementById("zonadibujo");
    const paleta = document.getElementById("paleta");
    const amarillo = document.querySelector(".color1");
    const verde = document.querySelector(".color2");
    const negro = document.querySelector(".color3");
    const rojo = document.querySelector(".color4");
    const azul = document.querySelector(".color5");
    const blanco = document.querySelector(".color6");
    
    amarillo.addEventListener("click", colorAmarillo);
    verde.addEventListener("click", colorVerde);
    negro.addEventListener("click", colorNegro);
    rojo.addEventListener("click", colorRojo);
    azul.addEventListener("click", colorAzul);
    blanco.addEventListener("click", colorBlanco);
 
 

    let tabla = `<table >`;
        for(let i = 0; i<41 ;i++){
            tabla += `<tr>`;
            for(let j = 0; j<71;j++){
                tabla +=`<td ></td>`;
            }
            tabla += `</tr>`;
        }
        tabla += `</table>`

        

   // }else{
   
    if(pintar == true){
        paleta.style.visibility = "visible";
        contenido.innerHTML = tabla; 
        const celdas = tabla.querySelectorAll("td");
        tabla.addEventListener("mouseover", pintarCelda);
        celdas.forEach(celda => {
            celda.addEventListener("mouseover", pintarCelda);
        });
    }else{
        contenido.innerHTML = `<p>Este parrafo desaparece y aparece el tablero de dibujo</p>` ;
    }
 
}


function activarTablero() {

    crearTabla();
    
}