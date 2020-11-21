//Variable para el objeto XMLHttpRequest
var solicitudAsinc;
//Establecer los manejadores de evento para las imágenes 
function registrarManejadores(){
    var img;
    var contentbook;
    //Creando el contenido y borrándolos al producirse los eventos
    //mouseover y mouseout sobre las imágenes capturadas por su id
    //Primera imagen
    img = document.getElementById("spiderman");
    if(img.addEventListener){
    img.addEventListener("mouseover", function(){
    obtenerContenido("spiderman.html");
    }, false);
    }
    else if(img.attachEvent){
    img.attachEvent("onmouseover", function(){
    obtenerContenido("spiderman.html");
    });
    }
    if(img.addEventListener){
    img.addEventListener("mouseout", borrarContenido, false);
    }
    else if(img.attachEvent){
   img.attachEvent("onmouseout", borrarContenido);
    }
    //Segunda imagen
    img = document.getElementById("piratas");
    if(img.addEventListener){
    img.addEventListener("mouseover", function(){
    obtenerContenido("piratas.html");
    }, false);
    }
    else if(img.attachEvent){
   img.attachEvent("mouseover", function(){
    obtenerContenido("piratas.html");
   });
    }
    if(img.addEventListener){
    img.addEventListener("mouseout", borrarContenido, false);
    }
    else if(img.attachEvent){
    img.attachEvent("onmouseout", borrarContenido);
    }
    //Tercera imagen
    img = document.getElementById("dbz");
    if(img.addEventListener){
    img.addEventListener("mouseover", function(){
    obtenerContenido("dbz.html");
    }, false);
    }
    else if(img.attachEvent){
    img.attachEvent("onmouseover", function(){
    obtenerContenido("dbz.html");
    });
    }
    if(img.addEventListener){
    img.addEventListener("mouseout", borrarContenido, false);
    }
    else if(img.attachEvent){
   img.attachEvent("onmouseout", borrarContenido);
    }
    //Cuarta imagen
    img = document.getElementById("harrypo");
    if(img.addEventListener){
    img.addEventListener("mouseover", function(){
    obtenerContenido("harrypotter.html");
    }, false);
    }
    else if(img.attachEvent){
   img.attachEvent("onmouseover", function(){
       obtenerContenido("harrypotter.html");
 });
 }

 if(img.addEventListener){
    img.addEventListener("mouseout", borrarContenido, false);
    }
    else if(img.attachEvent){
    img.attachEvent("onmouseout", borrarContenido);
    }
    //Quinta imagen
    img = document.getElementById("infinity");
    if(img.addEventListener){
    img.addEventListener("mouseover", function(){
    obtenerContenido("infinity_war.html");
    }, false);
    }
    else if(img.attachEvent){
    img.attachEvent("onmouseover", function(){
   obtenerContenido("infinity_war.html");
    });
    }
    if(img.addEventListener){
    img.addEventListener("mouseout", borrarContenido, false);
    }
    else if(img.attachEvent){
   img.attachEvent("onmouseout", borrarContenido);
    }
    //Sexta imagen
    img = document.getElementById("endgame");
    if(img.addEventListener){
    img.addEventListener("mouseover", function(){
    obtenerContenido("endgame.html");
    }, false);
    }
    else if(img.attachEvent){
    img.attachEvent("onmouseover", function(){
    obtenerContenido("endgame.html");
    });
    }
    if(img.addEventListener){
    img.addEventListener("mouseout", borrarContenido, false);
    }
    else if(img.attachEvent){
    img.attachEvent("onmouseout", borrarContenido);
    }
   } //Fin de la función que registra eventos sobre las imágenes
   function obtenerContenido(url){
    //Intentar crear objeto XMLHtttpRequest y realizar la petición
    try {
   //Crear objeto petición XMLHttpRequest
   //Cambiar esto por una función multinavegador para construir el objeto
   XMLHttpRequest
   solicitudAsinc = new XMLHttpRequest();
   //Registrar el manejador de eventos
   if(solicitudAsinc.addEventListener){
   solicitudAsinc.addEventListener("readystatechange", cambiarEstado,
   false);
    }
    else if(solicitudAsinc.attachEvent){
    solicitudAsinc.attachEvent("onreadystatechange", cambiarEstado);
    }
    //Preparar la solicitud
    solicitudAsinc.open("GET", url, true);
    //Enviar la solicitud
    solicitudAsinc.send(null);
    }
    catch(exception){
        alert("No se procesó la petición AJAX");
 }
}
function borrarContenido(){
 var contenido = document.getElementById("descriptions");
 contenido.innerHTML = "";
}
function cambiarEstado(){
 var contenido;
 if(solicitudAsinc.readyState == 4 && solicitudAsinc.status == 200){
 contenido = document.getElementById("descriptions");
 //Coloca el contenido devuelto en la petición en el div descriptions
 contenido.innerHTML = solicitudAsinc.responseText;
 }
}
if(window.addEventListener){
 window.addEventListener("load", registrarManejadores, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", registrarManejadores);
}

