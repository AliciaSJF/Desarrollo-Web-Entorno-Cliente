/*for(let i = 0; i<=3000; i++){
    let potencia = 2**i;
    document.write(potencia + "<br>");
}*/

aux=1;
for (i=2;i<=3000;i*=2) {
document.write ("<BR> 2 elevado a "+aux+" es igual a "+i);
aux++;
}
document.write("<BR> Ya se han escrito las potencias de 2 menores de 3000");

