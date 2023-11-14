let infoNavegador = navigator.userAgent; 
let Navegador;
if(infoNavegador.includes("Chrome")){
    Navegador = "Chrome";
}else if(infoNavegador.includes("Opr")){
    Navegador = "Opera"
}else if(infoNavegador.includes("Safari")){
    Navegador = "Safari"
}else if(infoNavegador.includes("Firefox")){
    Navegador = "Firefox"
}
    document.write("Tú navegador es " + Navegador);