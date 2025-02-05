// Selecciona el contenedor
let contenedor = document.getElementById("info-perfil");

// Crea elementos
let nombre = document.createElement("h1");
nombre.textContent = "ADRITOMYDEPORTES"; // Nombre del perfil

let descripcion = document.createElement("p");
descripcion.textContent = "Amante del deporte más grande del mundo. ¡Sígueme para más contenido!"; // Descripción

// Inserta los elementos en el contenedor
contenedor.appendChild(nombre);
contenedor.appendChild(descripcion);
