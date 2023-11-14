const chk1 = document.getElementById("chk1");
const chk2 = document.getElementById("chk2");
const chk3 = document.getElementById("chk3");
const chk4 = document.getElementById("chk4");
const chk5 = document.getElementById("chk5");
const chk6 = document.getElementById("chk6");
const clave = document.getElementById("clave1");

let

function validarEntrada(){
    if(clave.charAt(0) == "J"){


    }
//si todo se cumple llamas a validar checkboxes
    validarCheckboxes();

}
function validarCheckboxes(){
    //array con checkboxes

    //si array[1], arra[2], array[4] is checked array[0] array[3] [5] isnotcheked
        //devuelve true;


}

function crearTabla() {
    //if (validarcheckboxes == true){
    const contenido = document.getElementById("zonadibujo");
   // }else{
    contenido.innerHTML = `<p>Este parrafo desaparece y aparece el tablero de dibujo</p>` ;
    //}
}

function activarTablero() {
        crearTabla();
    
}