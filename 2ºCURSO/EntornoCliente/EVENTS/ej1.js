const cajas = document.getElementById("Checkboxes");
const desplegable = document.getElementById("Desplegable");
const lista = document.getElementById("Lista");
const op1Container = document.getElementById("op1Container");
const op2Container = document.getElementById("op2Container");
const op3Container = document.getElementById("op3Container");
const texto = document.getElementById("texto");
const op1 = document.getElementsByName("op1");
const op2 = document.getElementById("op2");

noMostrar();

cajas.addEventListener("click",showCajas);
desplegable.addEventListener("click",showDesplegable);
lista.addEventListener("click",showLista);

op1.forEach(function(el) {
    el.addEventListener("click",showop1);
});

op2.addEventListener("input",showop2);

opcionesLista.forEach(function(el) {
   el.addEventListener("click",showop3);
});


function showCajas(){
    texto.innerHTML = "";
    op1Container.style.display = "block";
    op2Container.style.display = "none";
    op3Container.style.display = "none";
}
function showDesplegable(){
    texto.innerHTML = "";
    op1Container.style.display = "none";
    op2Container.style.display = "block";
    op3Container.style.display = "none";
}
function showLista(){
    texto.innerHTML = "";
    op1Container.style.display = "none";
    op2Container.style.display = "none";
    op3Container.style.display = "block";
}
function noMostrar(){

    op1Container.style.display = "none";
    op2Container.style.display = "none";
    op3Container.style.display = "none";
}

function showop1(){
    texto.innerHTML = "";
    let txt = "";
    for(let i = 0; i < op1.length ; i++){
        if(op1[i].checked){
            txt += op1[i].value + "<br>"; 
        }
    }
    texto.innerHTML = txt;
}
function showop2(){
  let selectedOption = op2.value;
  texto.innerHTML = selectedOption;
}
function showop3(opcion){
    texto.innerHTML = opcion;
}
