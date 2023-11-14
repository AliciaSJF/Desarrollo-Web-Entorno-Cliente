const texto = document.getElementById("texto");
const buscar = document.getElementById("buscar");
const reemplazar = document.getElementById("reemplazar");

function activar() {
    let texto1 = texto.value;
    let palabra1 = buscar.value;
    let palabra2 = reemplazar.value;
    let texto2 = texto1.replace(palabra1, palabra2);
    document.write(texto2);
}
function ocurrencias(){
    let texto1 = texto.value;
    let palabra1 = buscar.value;
    let palabra2 = reemplazar.value;
    let texto2 = texto1.replaceAll(palabra1, palabra2);
    document.write(texto2);
}




