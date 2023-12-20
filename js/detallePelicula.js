import {
    peliculas,
    peliculasSlider,
    peliculasAccion,
    peliculasComedia,
  } from "./peliculas.js";
  
  document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("id");
  
    // Busca la película en los arrays peliculas y peliculasSlider
    const selectedMovie =
      peliculas.find((movie) => movie.id === movieId) ||
      peliculasSlider.find((movie) => movie.id === movieId) ||
      peliculasAccion.find((movie) => movie.id === movieId) ||
      peliculasComedia.find((movie) => movie.id === movieId);
  
    if (selectedMovie) {
      document.getElementById("movieTitle").innerText = selectedMovie.titulo;
      document.getElementById("movieDescription").innerText =
        selectedMovie.descripcion;
      document.getElementById("duracion").innerText = selectedMovie.duracion;
      document.getElementById("genero").innerText = selectedMovie.genero;
      document.getElementById("clasificacion").innerText =
        selectedMovie.clasificacion;
      document.getElementById("director").innerText = selectedMovie.director;
      document.getElementById("fechaEstreno").innerText =
        selectedMovie.fechaEstreno;
      document.getElementById("movieImage").src = selectedMovie.imagen;
    }
  });
  