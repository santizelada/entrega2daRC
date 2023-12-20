import { peliculasSlider } from "./peliculas.js";

function createMovieCard(pelicula) {
  const card = document.createElement("div");
  card.classList.add("peliculas-recomendadas", "card");

  const link = document.createElement("a");
  link.href = `../html/detallePelicula.html?id=${pelicula.id}`;

  const image = document.createElement("img");
  image.src = pelicula.imagen;
  image.alt = pelicula.titulo;
  image.classList.add("CarruselImg");
  link.appendChild(image);

  card.appendChild(link);
  return card;
}

const fila = document.querySelector(".contenedor-carousel .carousel");
const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");
const peliculasElements = document.querySelectorAll(".pelicula");

peliculasSlider.forEach((pelicula) => {
  const movieCard = createMovieCard(pelicula);
  fila.appendChild(movieCard);
});

flechaDerecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector(".indicadores .activo");
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});

flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector(".indicadores .activo");
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});

const numeroPaginas = Math.ceil(peliculasSlider.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
  const indicador = document.createElement("button");

  if (i === 0) {
    indicador.classList.add("activo");
  }

  document.querySelector(".indicadores").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector(".indicadores .activo").classList.remove("activo");
    e.target.classList.add("activo");
  });
}

peliculasElements.forEach((pelicula) => {
  pelicula.addEventListener("mouseenter", (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculasElements.forEach((pelicula) =>
        pelicula.classList.remove("hover")
      );
      elemento.classList.add("hover");
    }, 300);
  });
});

fila.addEventListener("mouseleave", () => {
  peliculasElements.forEach((pelicula) => pelicula.classList.remove("hover"));
});
