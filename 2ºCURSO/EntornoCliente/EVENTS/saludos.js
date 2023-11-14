let intervalId;

function showModal() {
  let modalElement = document.getElementById("modal");
  modalElement.style.display = "block";
  modalElement.innerHTML = "Hola";
}

function startGreetings() {
  intervalId = setInterval(showModal, 5000);
}

function stopGreetings() {
  clearInterval(intervalId);
}

var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGreetings);

var stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopGreetings);