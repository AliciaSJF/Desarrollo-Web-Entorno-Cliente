function enviarFormulario() {

    // Obtener los valores de los campos del formulario
    var productoId = document.getElementById("productoId").value;
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var clave = document.getElementById("clave").value;
    var fechaEnvio = document.getElementById("fechaEnvio").value;
    var categoria = document.getElementById("categoria").value;
    var tienda = document.querySelector('input[name="tienda"]:checked').value;
    var direccion = "Dirección de la tienda";
    var codigoPostal = "Código Postal de la tienda";
    var accesorios = document.querySelectorAll('input[name="accesorios"]:checked');
   
    var color = document.getElementById("color").value;
    var correo = document.getElementById("correo").value;
    var precio = document.getElementById("precio").value;
    var telefono = document.getElementById("telefono").value;
    var fechaDevolucion = document.getElementById("fechaDevolucion").value;

    // Mostrar los valores en el div de resultado
    var resultadoDiv = document.getElementById("resultado");
    document.write("<h3>Valores del Formulario:</h3>");
    document.write("<p>Identificador de Producto: " + productoId + "</p>");
    document.write("<p>Nombre del Producto: " + nombre + "</p>");
    document.write("<p>Nombre del Producto: " + nombre + "</p>");
    document.write("<p>Clave: " + clave + "</p>");
    document.write("<p>Fecha de Envío: " + fechaEnvio + "</p>");
    document.write("<p>Categoría: " + categoria + "</p>");
    document.write( "<p>Tienda: " + tienda + "</p>");
    document.write("<p>Dirección de la Tienda: " + direccion + "</p>");
    document.write("<p>Código Postal de la Tienda: " + codigoPostal + "</p>");
    document.write("<p>Accesorios Adicionales: " + accesoriosValores.join(", ") + "</p>");
    document.write("<p>Color: " + color + "</p>");
    document.write("<p>Correo Electrónico: " + correo + "</p>");
    document.write("<p>Precio: " + precio + "€</p>");
    document.write("<p>Teléfono de Contacto: " + telefono + "</p>");
    document.write("<p>Fecha Máxima de Devolución: " + fechaDevolucion + "</p>");
    
  
}