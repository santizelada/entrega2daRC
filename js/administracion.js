import {peliculas,peliculasSlider,peliculasAccion,peliculasComedia} from './peliculas.js';
const tabla = document.querySelector(".table-group-divider");

tabla.addEventListener("click", (event) => {
  if (event.target.classList.contains("bi-trash3")) {
    const fila = event.target.closest("tr");
    fila.remove();
  }
});

function agregarPeliculasALaTabla(peliculas) {
  const tbody = document.querySelector(".table-group-divider");

  peliculas.forEach((pelicula) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${pelicula.id}</th>
      <td>${pelicula.titulo}</td>
      <td>${pelicula.genero}</td>
      <td>${pelicula.descripcion}</td>
      <td>${pelicula.director}</td>
      <td>${pelicula.fechaEstreno}</td>
      <td class="icons-bootstrap"> 
        <i class="bi bi-trash3"></i>
        <i class="bi bi-pencil-square"></i>
        <i class="bi bi-star"></i>
      </td>
    `;
    tbody.appendChild(row);
  });
}

tabla.addEventListener("click", (event) => {
  if (event.target.classList.contains("bi-trash3")) {
    const fila = event.target.closest("tr");
    const id = fila.querySelector("th").innerText;
    eliminarFilaPorId(id);
    fila.remove();
  }
});

function eliminarFilaPorId(id) {
    const filas = document.querySelectorAll(".table-group-divider tr");
    filas.forEach((fila) => {
        const thElement = fila.querySelector("th");
        if (thElement !== null) {
            const filaId = thElement.textContent;
            if (filaId === id) {
                fila.remove();
            }
        }
    });
}


window.addEventListener("load", () => {
  agregarPeliculasALaTabla(peliculas);
  agregarPeliculasALaTabla(peliculasSlider);
  agregarPeliculasALaTabla(peliculasAccion);
  agregarPeliculasALaTabla(peliculasComedia);

});

