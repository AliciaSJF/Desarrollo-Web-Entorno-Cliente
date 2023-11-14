
function getColor(){
     var inputColor = document.getElementById("color").value;  
     return inputColor;
}
function cambiarFondo (){
    inputColor = getColor();
    document.body.style.background = inputColor;
}

document.body.addEventListener("dblclick",cambiarFondo);
