let nextId = 1;

function generarId() {
  return nextId++;
}

const peliculas = [
  {
    id: generarId().toString(),
    titulo: "The equalizer 3",
    descripcion:
      "Desde que renunció a su vida como asesino del gobierno, Robert McCall ha luchado para reconciliarse con las cosas horribles que ha hecho en el pasado y encuentra un extraño consuelo en hacer justicia en nombre de los oprimidos. Mientras se encuentra en su casa en el sur de Italia, descubre que sus nuevos amigos están bajo el control de los jefes del crimen local. A medida que los acontecimientos comienzan a complicarse, McCall entiende lo que tiene que hacer: convertirse en el protector de sus amigos enfrentándose a la mafia.",
    duracion: "1:40hs",
    genero: "Comedia",
    clasificacion: "+14",
    director: "Director 1",
    fechaEstreno: "2022",
    imagen: "../img/backgrounds/1329227.jpeg",
  },
  {
    id: generarId().toString(),
    titulo: "Blue Beetle",
    descripcion:
      "Jaime Reyes, recién licenciado, regresa a casa lleno de aspiraciones para su futuro, pero descubre que su hogar no es exactamente como lo dejó. En su búsqueda por encontrar su propósito en el mundo, el destino interviene cuando Jaime se encuentra inesperadamente en posesión de una antigua reliquia de biotecnología alienígena: el Escarabajo. Cuando el escarabajo elige a Jaime como huésped simbiótico, éste recibe una increíble armadura con poderes extraordinarios e impredecibles que cambiarán para siempre su destino y le convertirán en el superhéroe BLUE BEETLE.",
    duracion: "2:00hs",
    genero: "Accion",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/backgrounds/bluebeetle.avif",
  },
  {
    id: generarId().toString(),
    titulo: "Creed 3",
    descripcion:
      "Después de dominar el mundo del boxeo, Adonis Creed ha progresado tanto en su carrera como en su vida familiar. Cuando Damian (Jonathan Majors), un amigo de la infancia y antiguo prodigio del boxeo, reaparece después de cumplir una larga condena en prisión, Adonis Creed quiere demostrar que merece una oportunidad en el ring. El enfrentamiento entre estos antiguos amigos es algo más que una simple pelea. Para ajustar cuentas, Adonis debe arriesgar su futuro para enfrentarse a Damian, un boxeador que no tiene nada que perder. Tercera entrega de la revitalizada franquicia 'Rocky' para MGM, en la que Jordan retoma su papel de Adonis Creed.",
    duracion: "2:00hs",
    genero: "Accion",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/backgrounds/fastx.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Accion",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/backgrounds/creed3.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/comedia/2tNR2zjJZ4jiM71ucqG2zyfJ8Tp.jpg",
  },
];

const peliculasSlider = [
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/6StdSKn9ej4rwtQjcl1XMk5E0iE.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/83sGKvCv2T2CulYbd40Aeduc7n2.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/apxaWDCqjPrVc1v5HiKW2r10yiL.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/epN0x9JTf3esk1FO8DWkhlE4Ax5.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/gp31EwMH5D2bftOjscwkgTmoLAB.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/rS8fjd6dYcf64v3ZhAE6fKrxoaF.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/t6RSJ1z8bDEYpk4fLwxfkXciUak.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/tVj5dn15iwkMhjU2wIih1yMy5LK.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/vpuuFM032yiX8tox4L84Wl9MGjG.jpg",
  },
];

const peliculasAccion = [
  {
    id: generarId().toString(),
    titulo: "Spider-man: Cruzando el universo",
    descripcion:
      "Segunda entrega de la trilogía del universo Spider-Man centrada en Miles Morales. Tras reunirse con Gwen Stacy, el amistoso vecino de Brooklyn Spider-Man es catapultado a través del multiverso. Ahí se encuentra con la Spider Sociedad, un equipo de Spider-Personas encargadas de proteger la propia existencia del multiverso. Pero cuando los héroes chocan entre sí sobre cómo lidiar con una nueva amenaza, Miles se enfrenta a los otros Spiders y deberá redefinir lo que significa ser un héroe para poder salvar a las personas que más quiere. Cualquier persona puede ponerse una máscara, pero es la forma en la que la llevas lo que te convierte en un héroe.",
    duracion: "2 : 20 hs",
    genero: "Accion",
    clasificacion: "ATP",
    director: "Joaquim Dos Santos",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/37WcNMgNOMxdhT87MFl7tq7FM1.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Guardianes de la galaxia",
    descripcion:
      "Aventura espacial de proporciones épicas y repleta de acción que amplía el Universo Cinematográfico de Marvel. En esta ocasión, el temerario aventurero Peter Quill es objeto de un implacable cazarrecompensas después de robar una misteriosa esfera codiciada por Ronan, un poderoso villano cuya ambición amenaza todo el universo. Para poder escapar del incansable Ronan, Quill se ve obligado a pactar una complicada tregua con un cuartero de disparatados inadaptados: Rocket, un mapache armado con un rifle, Groot, un humanoide con forma de árbol, la letal y enigmática Gamora y el vengativo Drax the Destroyer. Pero cuando Quill descubre el verdadero poder de la esfera, deberá hacer todo lo posible para derrotar a sus extravagantes rivales en un intento desesperado de salvar el destino de la galaxia",
    duracion: "2 : 30 hs",
    genero: "Accion",
    clasificacion: "ATP",
    director: "James Gunn",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/6GkKzdNosVAL7UGgwTtCHSxLQ67.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "John Wick: Capítulo 3 - Parabellum",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Accion",
    clasificacion: "+18",
    director: "Chad Stahelski",
    fechaEstreno: "2019",
    imagen: "../img/pelisaccion/aKw7oqYdfn4pkKYvp18Gd1YhK6m.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/eJKmexmCLwuxOxlAURSMnBVkfmY.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/hAmuzFUmdrKmRnCHcrN3imWpbTt.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/iQUgtRY5qzwn2eyum1wckzRhWmj.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/lfj709InbmljVqAXgUk2qjnujNN.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/mBgynPDplmo5JTY9VfGqY35OjDu.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/nq7NbZtNfIHyL1NXPV1EiG4XQ7u.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/qDRrP4NATGTWH8ORJV6T0BeoIhQ.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen:
      "../img/pelisaccion/the-hunger-games-the-ballad-of-songbirds-and-snakes.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/wYejOZfJpza6nQDOhLpji7IK80o.jpg",
  },
];
const peliculasComedia = [
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/comedia/2tNR2zjJZ4jiM71ucqG2zyfJ8Tp.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2:00hs",
    genero: "Comedia",
    clasificacion: "+18",
    director: "Director 2",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/83sGKvCv2T2CulYbd40Aeduc7n2.jpg",
  },
];

export { peliculas, peliculasSlider, peliculasAccion, peliculasComedia };