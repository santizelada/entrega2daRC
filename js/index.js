import { peliculas, peliculasComedia, peliculasAccion,peliculasDestacadas } from "./peliculas.js";

document.addEventListener("DOMContentLoaded", function () {
  const carrusel = document.querySelector(".carousel-inner");

  peliculas.forEach((pelicula, index) => {
    const divCarouselItem = document.createElement("div");
    divCarouselItem.classList.add("carousel-item");
    if (index === 0) {
      divCarouselItem.classList.add("active");
    }

    const img = document.createElement("img");
    img.src = pelicula.imagen;
    img.classList.add("d-block", "w-100");
    img.alt = pelicula.titulo;

    const divCarouselCaption = document.createElement("div");
    divCarouselCaption.classList.add(
      "carousel-caption",
      "d-none",
      "d-md-block"
    );

    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.titulo;

    const descripcion = document.createElement("p");
    descripcion.textContent = pelicula.descripcion;

    const link = document.createElement("a");
    link.classList.add("btn", "btn-ver");
    link.href = `../html/detallePelicula.html?id=${pelicula.id}`;
    link.textContent = "Ver Película";

    divCarouselCaption.appendChild(titulo);
    divCarouselCaption.appendChild(descripcion);
    divCarouselCaption.appendChild(link);

    divCarouselItem.appendChild(img);
    divCarouselItem.appendChild(divCarouselCaption);

    carrusel.appendChild(divCarouselItem);
  });

  const contenedorComedia = document.querySelector(
    ".CardsPelisComedia .fila-comedia"
  );
  peliculasComedia.forEach((pelicula) => {
    const divPelicula = document.createElement("div");
    divPelicula.classList.add("col-md-2");

    const card = document.createElement("div");
    card.classList.add("card");

    const enlace = document.createElement("a");
    enlace.href = `../html/detallePelicula.html?id=${pelicula.id}`;

    const imagen = document.createElement("img");
    imagen.src = pelicula.imagen;
    imagen.alt = pelicula.titulo;
    imagen.classList.add("img-fluid");

    enlace.appendChild(imagen);
    card.appendChild(enlace);
    divPelicula.appendChild(card);
    contenedorComedia.appendChild(divPelicula);
  });

  const contenedorAccion = document.querySelector(
    ".cardsPelisAccion .fila-accion"
  );
  peliculasAccion.forEach((pelicula) => {
    const divPelicula = document.createElement("div");
    divPelicula.classList.add("col-md-2");

    const card = document.createElement("div");
    card.classList.add("card");

    const enlace = document.createElement("a");
    enlace.href = `../html/detallePelicula.html?id=${pelicula.id}`;

    const imagen = document.createElement("img");
    imagen.src = pelicula.imagen;
    imagen.alt = pelicula.titulo;
    imagen.classList.add("img-fluid");

    enlace.appendChild(imagen);
    card.appendChild(enlace);
    divPelicula.appendChild(card);
    contenedorAccion.appendChild(divPelicula);
  });
  const contenedorDestacadas = document.querySelector(
    ".CardsPelisDestacadas .fila-destacada"
  );
  peliculasDestacadas.forEach((pelicula) => {
    const divPelicula = document.createElement("div");
    divPelicula.classList.add("col-md-2");

    const card = document.createElement("div");
    card.classList.add("card");

    const enlace = document.createElement("a");
    enlace.href = `../html/detallePelicula.html?id=${pelicula.id}`;

    const imagen = document.createElement("img");
    imagen.src = pelicula.imagen;
    imagen.alt = pelicula.titulo;
    imagen.classList.add("img-fluid");

    enlace.appendChild(imagen);
    card.appendChild(enlace);
    divPelicula.appendChild(card);
    contenedorDestacadas.appendChild(divPelicula);
  });
});
