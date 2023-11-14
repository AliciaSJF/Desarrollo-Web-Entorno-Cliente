let sueldo = prompt("¿Cuál es tu sueldo?");
let antiguedad = prompt("Cuántos años de antigüedad tienes?");

if(sueldo<500 && antiguedad >= 10){
    sueldo = sueldo*3;
}else if(sueldo<500 && antiguedad <10){
    sueldo = sueldo * 2;
}
alert("Tu sueldo es " + sueldo);