const boton = document.getElementsByClassName("boton");
const colores = ["red", "blue", "green", "#F5F6F8"];

for (let index = 0; index < boton.length; index++) {
  const element = boton[index];
  element.addEventListener("click", cambiarFondo);
}

function cambiarFondo(button) {
  const indice = Math.floor(Math.random() * colores.length);
  const contenedor = this.parentNode;
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  //console.log(contenedor);
  contenedor.style.backgroundColor = "#" + randomColor;

  const texto = this.parentNode.childNodes[1];
  texto.innerHTML = "#" + randomColor;

  //console.log(texto)
  //console.log(this);
}
