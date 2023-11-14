const min = document.getElementById("min");
const max = document.getElementById("max");


/*function validar(){
    let cont =0;
    let min1 = min.value; 
    let max1 = max.value;
    if( isNaN(min1) || isNaN(max2)){
        alert("Por favor, ")
    }else if (isNaN(max1)){
        cont --;
    }else if min

}*/
function start() {
    let minimo = min.value;
    let maximo = max.value;
    if (minimo < 10 || maximo > 1000) {
        alert("Número fuera de los límites");
    } else {
        let num = aleatorio(maximo, minimo);
        let guess = -1;
        let intentos = 10;
        //Bucle que para cuando la persona acierta o se queda sin intentos
        do {
            guess = prompt("Adivina el número");

            if (guess < num) {
                alert("Prueba con un número mayor, te quedan " + (intentos - 1) + " intentos.");
                intentos--;
            } else if (guess > num) {
                alert("Prueba con un número menor, te quedan " + (intentos - 1) + " intentos.")
                intentos--;
            } else if (isNaN(guess)) {
                alert("Por favor, intoduzca un número");
            }
        } while (guess != num && intentos != 0);
        if (intentos == 0) {
            alert("Demasiados intentos, has perdido, el numero era " + num);
        } else if (guess == num) {
            alert("Enhorabuena, número correcto");
        }
    }

}
//Genera un número aleatorio
function aleatorio(maximo, minimo) {
    let numero = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
    console.log(numero);
    return numero;
}