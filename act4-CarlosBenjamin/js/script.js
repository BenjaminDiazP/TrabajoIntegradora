function ActualizarFondo() {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "red";
}

function Cambiartexto(){
    var Texto = document.getElementById("miTexto");
    Texto.style.backgroundColor = "azul";
}


var imagenes = ["img/img1.png", "img/img2.jpg", "img/img3.png", "img/img4.jpg", "img/img5.png"]; // Array con las rutas de las imágenes
var indiceImagenActual = 0;

function mostrarImagen() {
  var imagen = document.getElementById("imagen");
  imagen.src = imagenes[indiceImagenActual];
  imagen.alt = "Imagen " + (indiceImagenActual + 1);
}

function imagenAnterior() {
  if (indiceImagenActual === 0) {
    indiceImagenActual = imagenes.length - 1;
  } else {
    indiceImagenActual--;
  }
  mostrarImagen();
}

function imagenSiguiente() {
  if (indiceImagenActual === imagenes.length - 1) {
    indiceImagenActual = 0;
  } else {
    indiceImagenActual++;
  }
  mostrarImagen();
}
mostrarImagen();

window.onload = mostrarImagen; 