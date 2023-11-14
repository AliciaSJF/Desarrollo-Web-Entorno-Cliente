const dragElement = document.getElementById("bola");
const dragTarget = document.getElementById("papelera");

dragElement.addEventListener("dragstart", hidePapel);
dragTarget.addEventListener("drop", dropPapel);
dragTarget.addEventListener("dragenter", (e) => {
    e.preventDefault();
});
dragTarget.addEventListener("dragover", (e) => {
    e.preventDefault();
});

function hidePapel() {
    setTimeout(() => {
        dragElement.style.visibility = "hidden";
    }, 0);
}
function dropPapel() {
    dragTarget.src = "../Imagenes/papeleraLLena.jpg";
}


