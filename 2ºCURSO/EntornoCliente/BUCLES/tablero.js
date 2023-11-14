document.addEventListener("DOMContentLoaded", function() {
    const chessboard = document.getElementById("chessboard");
  
    for(let i = 0; i < 8; i++) {
      for(let j = 0; j < 8; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add((i + j) % 2 === 0 ? "white" : "black");
        chessboard.appendChild(square);
      }
    }
  });