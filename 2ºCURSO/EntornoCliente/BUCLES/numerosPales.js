let clave = "";
let intentos =3;
while(intentos>0){
    if(clave != "puta"){
        clave = prompt("Escriba la clave");
        intentos --;
    }else if(clave == "puta"){
        document.write("Clave correcta");
        break;
    }
}if(intentos == 0){
    document.write("Demasiados intentos");
}
