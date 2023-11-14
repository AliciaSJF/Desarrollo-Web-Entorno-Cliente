var x,y,ejecutar;
ejecutar=confirm("¿Desea ejecutar el programa?");
if (ejecutar){
alert("Practica de la estructura if");
x=prompt("Introduce un número ","");
x=parseInt(x);
y=x%2;
if (y==0){
alert("El número "+x+" es par ");
}
else{
alert("El número "+x+" es impar");
}
}
else{
alert("Perdiste una oportunidad");
}
