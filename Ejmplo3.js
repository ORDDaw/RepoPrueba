// Seleccionamos todos los enlaces del nav
const enlaces = document.querySelectorAll('nav a');

// Seleccionamos el main para cambiar su contenido
const main = document.querySelector('main');

// Función que maneja el clic en los enlaces
function manejarClick(event) {
  event.preventDefault(); // Evita que el enlace recargue la página

  const texto = event.target.textContent; // Obtiene el texto del enlace clickeado

  // Cambiamos el contenido del main
  main.innerHTML = `
    <h2>${texto}</h2>
    <p>Has seleccionado la sección <strong>${texto}</strong>.</p>
    <p>Este contenido fue generado con JavaScript al hacer clic en el menú.</p>
  `;
}

// Asignamos el evento click a cada enlace
enlaces.forEach(enlace => {
  enlace.addEventListener('click', manejarClick);
});
