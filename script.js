// Obtener elementos
const imagen = document.getElementById("imagen");
const panel = document.getElementById("panel");
const cerrar = document.getElementById("cerrar");

// Mostrar información al hacer clic en la imagen
imagen.addEventListener("click", () => {
  panel.style.display = "block";
});

// Cerrar panel al hacer clic en el botón
cerrar.addEventListener("click", () => {
  panel.style.display = "none";
});
