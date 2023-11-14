let edadA = 0;
let edadL = 0;
do{
     edadL = parseInt(prompt("¿Qué edad tiene Luis"));
     edadA = parseInt(prompt("¿Qué edad tiene Ana?"));
    // comprobarEdad();
    if(!comprobarEdad()){
        alert("Debes introducir una edad adecuada");
    }else{
        document.write("Ana tiene" + edadA + " y Luis tiene  " +edadL + "<br>" ) ;
        compararEdades();
    }
    
}while(!comprobarEdad());

function comprobarEdad(){
    if ( isNaN(edadA) || isNaN(edadL)|| edadA <=0 || edadL <=0 || edadA >140 || edadL > 140){
        return false;
    }else{
        return true;
    }
}
function compararEdades(){
    if(edadA == edadL){
        document.write("Ana y Luis tienen la misma edad");
    }else if(edadA > edadL){
        document.write("Ana es mayor que Luis");
    }else{
        document.write("Luis es mayor que Ana");
    }
}