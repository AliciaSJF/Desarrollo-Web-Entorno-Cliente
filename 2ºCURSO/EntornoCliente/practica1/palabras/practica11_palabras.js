const txtausar = `Muy lejos, más allá de las montañas de palabras, 
alejados de los países de las vocales y las consonantes, viven los textos simulados. 
Viven aislados en casas de letras, en la costa de la semántica, un gran océano de lenguas. 
Un riachuelo llamado Pons fluye por su pueblo y los abastece con las normas necesarias. 
Hablamos de un país paraisomático en el que a uno le caen pedazos de frases asadas en la boca. 
Ni siquiera los todopoderosos signos de puntuación dominan a los textos simulados; una vida, se puede decir, 
poco ortográfica. Pero un buen día, una pequeña línea de texto simulado, llamada Lorem Ipsum, 
decidió aventurarse y salir al vasto mundo de la gramática. 
El gran Oxmox le desanconsejó hacerlo, ya que esas tierras estaban llenas de comas malvadas, 
signos de interrogación salvajes y puntos y coma traicioneros, pero el texto simulado no se dejó atemorizar.`;

const txtinicial = document.getElementById("txtinicial");
txtinicial.innerText = txtausar;
const txtrespuesta = document.getElementById("txtrespuesta");

const tofind = document.getElementById("tofind");

function encontrar(){
    let texto1 = txtinicial.value;
    let palabra = tofind.value; 
    if(texto1.includes(palabra)){
        let texto2 = texto1.replaceAll(palabra,"<mark>"+ palabra +"</mark>");

        document.write(texto2);
    }else{
        document.write("La palabra no existe");
    }
}

