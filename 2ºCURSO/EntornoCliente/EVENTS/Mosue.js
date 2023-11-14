document.addEventListener('mousemove', function(event) {
    var posX = event.clientX;
    var posY = event.clientY;
  
    var mousePositionElement = document.getElementById('mouse-position');
    mousePositionElement.textContent = 'Posición del ratón: X=' + posX + ', Y=' + posY;
  });