

var slideIndex=0;
comenta();

 function comenta(){
        var i;
    var comentario=document.getElementsByClassName("comentarios");
    

    for(i=0;i<comentario.length;i++){
            comentario[i].style.display="none";         
    }
    slideIndex++;
    if (slideIndex > comentario.length) {slideIndex = 1} 
    comentario[slideIndex-1].style.display = "block"; 
  
    setTimeout(comenta, 2000);

    var punto=document.querySelectorAll(".testimonios-comentarios .puntos-testimonios span");
    for(i=0;i<punto.length;i++){
            punto[i].className= punto[i].className.replace(" activo", "");
          
    }
    punto[slideIndex-1].className += " activo";
 }




