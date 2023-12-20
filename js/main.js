import {peliculas} from './peliculas.js';

document.addEventListener("DOMContentLoaded", function () {
  const movieCards = document.getElementById("movieCards");

  peliculas.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("col-md-3");
    movieCard.innerHTML = `
      <div class="movie-card" data-movie-id="${movie.id}">
        <a href="../html/detallePelicula.html?id=${movie.id}">
          <img src="${movie.imagen}" alt="${movie.titulo}" />
          <h5>${movie.titulo}</h5>
        </a>
      </div>
    `;
    movieCards.appendChild(movieCard);
  });
});
