 let clave = "" ;
 let claveReal = "puta";
 let intentos = 3;
 do{
    clave = prompt("Introduzca la clave");
    intentos --;
 }while(clave != claveReal && intentos >0);
 if(intentos >=0){
    alert("respuesta correcta");
 }else{
    alert("Demasiados intentos");
 }

