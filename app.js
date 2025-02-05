// Selecciona el contenedor
let contenedor = document.getElementById("info-perfil");

// Crea elementos
let nombre = document.createElement("h1");
nombre.textContent = "Fanático del Fútbol";

let descripcion = document.createElement("p");
descripcion.textContent = "Amante del deporte rey. ¡Sígueme para más contenido!";

// Inserta los elementos en el contenedor
contenedor.appendChild(nombre);
contenedor.appendChild(descripcion);
