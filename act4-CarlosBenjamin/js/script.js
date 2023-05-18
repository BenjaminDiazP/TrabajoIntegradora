function ActualizarFondo() {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "red";
}

function Cambiartexto(){
    var Texto = document.getElementById("miTexto");
    Texto.style.backgroundColor = "azul";
}

function cambiarImagen() {
    var imagen = document.getElementById("imagen");
    var rutaImagenActual = imagen.src;
    var nombreImagenActual = rutaImagenActual.substring(rutaImagenActual.lastIndexOf("/") + 1);
  
    if (nombreImagenActual === "porscheimg1.png") {
      imagen.src = "img/porschemg2.png";
      imagen.alt = "Imagen 2";
    } else {
      imagen.src = "img/porscheimg1.png";
      imagen.alt = "Imagen 1";
    }
  }
  