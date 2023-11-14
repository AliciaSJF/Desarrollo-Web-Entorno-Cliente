  let intervalo = null;
// Obtener elementos del DOM
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var empezar = document.getElementById("start");

// Get the <span> element that closes the modal
var cerrar = document.getElementsByClassName("close")[0];
//Boton parar
var parar = document.getElementById("stop");

// When the user clicks the button, open the modal 
empezar.onclick = function() {
  intervalo = setInterval(MostrarModal,2000);

}

function MostrarModal(){
  modal.style.display = "block";
}

parar.onclick = function() {
  clearInterval(intervalo);
  intervalo = null;
  
}

// When the user clicks on <cerrar> (x), close the modal
cerrar.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
