const fecha = document.getElementById("fecha")
function start(){
    let date = fecha.value;
    let num = date.split('/');
    let dia = num[0];
    let mes = num[1];
    let anio = num [2];

    document.write(dia + "<br>" + mes +"<br>" +anio);
}