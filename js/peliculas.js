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
    genero: "Accion",
    clasificacion: "+16",
    director: "Antoine Fuqua",
    fechaEstreno: "2022",
    imagen: "../img/backgrounds/1329227.jpeg",
  },
  {
    id: generarId().toString(),
    titulo: "Blue Beetle",
    descripcion:
      "Jaime Reyes, recién licenciado, regresa a casa lleno de aspiraciones para su futuro, pero descubre que su hogar no es exactamente como lo dejó. En su búsqueda por encontrar su propósito en el mundo, el destino interviene cuando Jaime se encuentra inesperadamente en posesión de una antigua reliquia de biotecnología alienígena: el Escarabajo. Cuando el escarabajo elige a Jaime como huésped simbiótico, éste recibe una increíble armadura con poderes extraordinarios e impredecibles que cambiarán para siempre su destino y le convertirán en el superhéroe BLUE BEETLE.",
    duracion: "2h 7m",
    genero: "Accion",
    clasificacion: "+12",
    director: "Angel Manuel Soto",
    fechaEstreno: "2023",
    imagen: "../img/backgrounds/bluebittle.jpeg",
  },
  {
    id: generarId().toString(),
    titulo: "Creed 3",
    descripcion:
      "Después de dominar el mundo del boxeo, Adonis Creed ha progresado tanto en su carrera como en su vida familiar. Cuando Damian (Jonathan Majors), un amigo de la infancia y antiguo prodigio del boxeo, reaparece después de cumplir una larga condena en prisión, Adonis Creed quiere demostrar que merece una oportunidad en el ring. El enfrentamiento entre estos antiguos amigos es algo más que una simple pelea. Para ajustar cuentas, Adonis debe arriesgar su futuro para enfrentarse a Damian, un boxeador que no tiene nada que perder. Tercera entrega de la revitalizada franquicia 'Rocky' para MGM, en la que Jordan retoma su papel de Adonis Creed.",
    duracion: "1h 56m",
    genero: "Accion",
    clasificacion: "+12",
    director: "Michael B. Jordan",
    fechaEstreno: "2023",
    imagen: "../img/backgrounds/creed3.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Rapidos y Furiosos X",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "2h 21m",
    genero: "Accion",
    clasificacion: "+12",
    director: "Louis Leterrier",
    fechaEstreno: "2023",
    imagen: "../img/backgrounds/fastx.jpg",
  },

  {
    id: generarId().toString(),
    titulo: "Sonido de libertad",
    descripcion:
      "Sonido de libertad, cuyo título original es Sound of Freedom, es una película de drama y acción dirigida por Alejandro Monteverde. Uno de sus grandes ganchos es que tiene a Jim Caviezel como protagonista. Presenta la historia de Tim Ballard, un exagente del gobierno que decide emprender una cruzada para salvar a niños de las redes de tráfico sexual. El filme apunta a una problemática que arruina vidas y sociedades en todas las regiones del mundo, pero, principalmente, en América Latina.",
    duracion: "2h",
    genero: "Accion",
    clasificacion: "+16",
    director: " Alejandro Monteverde",
    fechaEstreno: "2023",
    imagen: "../img/backgrounds/sound of freedom.webp",
  },
];

const peliculasSlider = [
  {
    id: generarId().toString(),
    titulo: "El exorcista: creyentes",
    descripcion:
      "Desde que falleció su esposa embarazada en el terremoto de Haití hace doce años, Victor Fielding (interpretado por LESLIE ODOM JR, ganador de un Tony y nominado a un Oscar; Una noche en Miami, Hamilton) se ha encargado de cuidar de Angela (LIDYA JEWETT, la serie “Chicas buenas”), la hija de ambos.Pero cuando Angela y su amiga Katherine (la recién llegada OLIVIA O’NEILL) desaparecen en un bosque durante tres días y a su regreso no recuerdan nada de lo que les pasó, se desata una serie de acontecimientos que obligarán a Victor a enfrentarse a la cúspide del mal. Desesperado y aterrado, decide pedir ayuda a Chris MacNeil, la única persona que ha sido testigo de algo parecido.",
    duracion: "2h",
    genero: "Terror",
    clasificacion: "+18",
    director: "David Gordon Green",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/6StdSKn9ej4rwtQjcl1XMk5E0iE.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Misión imposible: sentencia mortal",
    descripcion:
      "Ethan Hunt y su equipo de la Fuerza de Misión Imposible (FMI) se embarcan en su misión más peligrosa hasta el momento; para rastrear un arma aterradora que amenaza a la humanidad antes de que caiga en las manos equivocadas. Con el control del futuro y el destino del mundo en juego, y las fuerzas oscuras del pasado de Ethan acercándose, comienza una carrera mortal alrededor del mundo. Enfrentado a un némesis misterioso y poderoso llamado Gabriel, Ethan se ve obligado a considerar que nada puede importar más que su misión, ni siquiera las vidas de sus seres queridos",
    duracion: "2h 43m",
    genero: "Accion",
    clasificacion: "+18",
    director: "Christopher McQuarrie",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/83sGKvCv2T2CulYbd40Aeduc7n2.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Sonido de libertad",
    descripcion:
      "Sonido de libertad, cuyo título original es Sound of Freedom, es una película de drama y acción dirigida por Alejandro Monteverde. Uno de sus grandes ganchos es que tiene a Jim Caviezel como protagonista. Presenta la historia de Tim Ballard, un exagente del gobierno que decide emprender una cruzada para salvar a niños de las redes de tráfico sexual. El filme apunta a una problemática que arruina vidas y sociedades en todas las regiones del mundo, pero, principalmente, en América Latina.",
    duracion: "2h",
    genero: "Accion",
    clasificacion: "+16",
    director: " Alejandro Monteverde",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/apxaWDCqjPrVc1v5HiKW2r10yiL.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Saw X",
    descripcion:
      "Persiguiendo un procedimiento que supuestamente curaría su cáncer, John Kramer viaja a México para someterse a este tratamiento, sólo para descubrir que era estafa. Ahora, el estafador se convierte en la presa del nuevo juego de Jigsaw.",
    duracion: "1h 58m",
    genero: "Accion",
    clasificacion: "+18",
    director: "Kevin Greutert",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/epN0x9JTf3esk1FO8DWkhlE4Ax5.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Drama",
    descripcion:
      "Noah tiene que dejar atrás su pueblo, su novio, sus amigos y mudarse a la mansión del nuevo esposo rico de su madre. Allí conoce a Nick, su nuevo hermanastro y se enamoran locamente en secreto.",
    duracion: "1h 57m",
    genero: "Comedia",
    clasificacion: "+16",
    director: "Domingo González",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/gp31EwMH5D2bftOjscwkgTmoLAB.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Oppenheimer",
    descripcion:
      "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
    duracion: "3h",
    genero: "Accion",
    clasificacion: "+12",
    director: "Christopher Nolan",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Háblame",
    descripcion:
      "Cuando un grupo de amigos descubre cómo conjurar espíritus utilizando una mano embalsamada, se enganchan a la nueva emoción, hasta que uno de ellos va demasiado lejos y desata terroríficas fuerzas sobrenaturales.",
    duracion: "1h 35m",
    genero: "Terror",
    clasificacion: "+16",
    director: "Danny Philippou",
    fechaEstreno: "2022",
    imagen: "../img/destacadas/rS8fjd6dYcf64v3ZhAE6fKrxoaF.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Five Nights at Freddy's",
    descripcion:
      "Un guardia nocturno tiene que sobrevivir cinco noches en una pizzería abandonada. Los animatrónicos intentarán asesinarlo durante sus jornadas.",
    duracion: "1h 49m",
    genero: "Suspenso",
    clasificacion: "+12",
    director: "Emma Tammi",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/t6RSJ1z8bDEYpk4fLwxfkXciUak.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Gran Turismo",
    descripcion:
      "Basada en la increíble historia real de un equipo de marginados -un jugador de clase trabajadora, un expiloto de carreras fracasado y un ejecutivo idealista- que lo arriesgan todo para enfrentarse al deporte más elitista del mundo.",
    duracion: "2h 14m",
    genero: "Accion",
    clasificacion: "+7",
    director: "Neill Blomkamp",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/tVj5dn15iwkMhjU2wIih1yMy5LK.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "The Marvels",
    descripcion:
      "En The Marvels, Carol Danvers, alias Capitana Marvel, ha recuperado su identidad de los tiránicos Kree y se ha vengado de la Inteligencia Suprema. Pero las consecuencias imprevistas hacen que Carol cargue con el peso de un universo desestabilizado. Cuando sus deberes la envían a un agujero de gusano anómalo vinculado a un revolucionario Kree, sus poderes se enredan con los de la superfan oriunda de la ciudad de Jersey, Kamala Khan, alias Ms. Marvel, y la sobrina distanciada de Carol, la ahora astronauta de S.A.B.E.R., la Capitana Monica Rambeau .Juntos, este trío deberá formar equipo y aprender a trabajar en conjunto para salvar el universo como The Marvels.",
    duracion: "1h 45m",
    genero: "Accion",
    clasificacion: "+7",
    director: "Nia DaCosta",
    fechaEstreno: "2023",
    imagen: "../img/destacadas/vpuuFM032yiX8tox4L84Wl9MGjG.jpg",
  },
];

const peliculasDestacadas = [
  {
    id: generarId().toString(),
    titulo: "Megalodón 2: La fosa",
    descripcion:
      "Una exploración submarina en las profundidades del océano se convierte en una espiral de caos cuando una malévola operación minera amenaza la misión y obliga al equipo de investigación a librar una arriesgada batalla por la supervivencia.",
    duracion: "1h 56m",
    genero: "Accion",
    clasificacion: "+12",
    director: "Ben Wheatley",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/mBgynPDplmo5JTY9VfGqY35OjDu.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Feliz día de tu muerte 2",
    descripcion:
      "Dos años después de los eventos acaecidos en la primera película, Tree Gelbman (Jessica Rothe) vuelve a entrar en el bucle temporal para descubrir el motivo por el cual accedió a él en primer lugar. Secuela de Happy Death Day (2017), uno de los éxitos de Blumhouse Productions.",
    duracion: "1h 40m",
    genero: "Comedia",
    clasificacion: "+12",
    director: "Christopher Landon",
    fechaEstreno: "2019",
    imagen: "../img/comedia/q6PSTBNlI9WtfuMlngz82yaudUg.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Leo",
    descripcion:
      "Leo es un lagarto de 74 años que lleva atrapado en el mismo aula de Florida durante décadas con su compañera de terrario, una tortuga. Cuando se entera de que solo le queda un año de vida, Leo planea escapar para experimentar la vida en el exterior, pero entonces comienzan sus problemas.",
    duracion: "1h 42m",
    genero: "Comedia",
    clasificacion: "+7",
    director: "Robert Marianetti",
    fechaEstreno: "2023",
    imagen: "../img/comedia/hs41WYhEuaq4PaBbtaoCfGFEebi.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Kill Bill",
    descripcion:
      "El día de su boda, una asesina profesional (Thurman) sufre el ataque de algunos miembros de su propia banda, que obedecen las órdenes de Bill (David Carradine), el jefe de la organización criminal. Logra sobrevivir al ataque, aunque queda en coma. Cuatro años después despierta dominada por un gran deseo de venganza",
    duracion: "1h 51m",
    genero: "Accion",
    clasificacion: "+18",
    director: "Quentin Tarantino",
    fechaEstreno: "2003",
    imagen: "../img/pelisaccion/lfj709InbmljVqAXgUk2qjnujNN.jpg",
  },
{id: generarId().toString(),
  titulo: "Oppenheimer",
  descripcion:
    "Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos. Pero ahora tendrán que enfrentarse al oponente más letal que jamás hayan conocido: un terrible peligro que resurge del pasado, que se mueve por una sangrienta sed de venganza y que está dispuesto a destrozar a la familia y destruir para siempre todo lo que a Dom le importa.",
  duracion: "3h",
  genero: "Accion",
  clasificacion: "+12",
  director: "Christopher Nolan",
  fechaEstreno: "2023",
  imagen: "../img/destacadas/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg",
},

];

const peliculasAccion = [
  {
    id: generarId().toString(),
    titulo: "Spider-man: Cruzando el universo",
    descripcion:
      "Segunda entrega de la trilogía del universo Spider-Man centrada en Miles Morales. Tras reunirse con Gwen Stacy, el amistoso vecino de Brooklyn Spider-Man es catapultado a través del multiverso. Ahí se encuentra con la Spider Sociedad, un equipo de Spider-Personas encargadas de proteger la propia existencia del multiverso. Pero cuando los héroes chocan entre sí sobre cómo lidiar con una nueva amenaza, Miles se enfrenta a los otros Spiders y deberá redefinir lo que significa ser un héroe para poder salvar a las personas que más quiere. Cualquier persona puede ponerse una máscara, pero es la forma en la que la llevas lo que te convierte en un héroe.",
    duracion: "2h 20m",
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
    duracion: "2h 30m",
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
      "En esta tercera entrega de la franquicia de acción cargada de adrenalina, el superasesino John Wick (Keanu Reeves) regresa con un precio de 14 millones de dólares por su cabeza y un ejército de asesinos cazarrecompensas tras su pista. Después de matar a un miembro del siniestro gremio internacional de asesinos, la Alta Mesa, John Wick ha sido excomulgado y los asesinos más despiadados del mundo lo aguardan a la vuelta de cada esquina",
    duracion: "2h 10m",
    genero: "Accion",
    clasificacion: "+16",
    director: "Chad Stahelski",
    fechaEstreno: "2019",
    imagen: "../img/pelisaccion/aKw7oqYdfn4pkKYvp18Gd1YhK6m.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "The equalizer 3",
    descripcion:
      "Desde que renunció a su vida como asesino del gobierno, Robert McCall ha luchado para reconciliarse con las cosas horribles que ha hecho en el pasado y encuentra un extraño consuelo en hacer justicia en nombre de los oprimidos. Mientras se encuentra en su casa en el sur de Italia, descubre que sus nuevos amigos están bajo el control de los jefes del crimen local. A medida que los acontecimientos comienzan a complicarse, McCall entiende lo que tiene que hacer: convertirse en el protector de sus amigos enfrentándose a la mafia.",
    duracion: "1h 40m",
    genero: "Accion",
    clasificacion: "+16",
    director: "Antoine Fuqua",
    fechaEstreno: "2022",
    imagen: "../img/pelisaccion/eJKmexmCLwuxOxlAURSMnBVkfmY.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "La libreta negre",
    descripcion:
      "Cuando incriminan a su hijo en un secuestro, un afligido diácono decide hacer justicia por mano propia y se enfrenta a una corrupta pandilla policial para conseguir su absolución.",
    duracion: "2h 4m",
    genero: "Accion",
    clasificacion: "+16",
    director: "Editi Effiong",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/hAmuzFUmdrKmRnCHcrN3imWpbTt.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Muti rituales mortales",
    descripcion:
      "Un detective a punto de jubilarse forma equipo con un profesor de Estudios Africanos para localizar a un asesino en serie que practica la antigua magia negra de Muti.",
    duracion: "1h 32m",
    genero: "Accion",
    clasificacion: "+14",
    director: "George Gallo",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/iQUgtRY5qzwn2eyum1wckzRhWmj.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Kill Bill",
    descripcion:
      "El día de su boda, una asesina profesional (Thurman) sufre el ataque de algunos miembros de su propia banda, que obedecen las órdenes de Bill (David Carradine), el jefe de la organización criminal. Logra sobrevivir al ataque, aunque queda en coma. Cuatro años después despierta dominada por un gran deseo de venganza",
    duracion: "1h 51m",
    genero: "Accion",
    clasificacion: "+18",
    director: "Quentin Tarantino",
    fechaEstreno: "2003",
    imagen: "../img/pelisaccion/lfj709InbmljVqAXgUk2qjnujNN.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Megalodón 2: La fosa",
    descripcion:
      "Una exploración submarina en las profundidades del océano se convierte en una espiral de caos cuando una malévola operación minera amenaza la misión y obliga al equipo de investigación a librar una arriesgada batalla por la supervivencia.",
    duracion: "1h 56m",
    genero: "Accion",
    clasificacion: "+12",
    director: "Ben Wheatley",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/mBgynPDplmo5JTY9VfGqY35OjDu.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Guy Ritchie: El pacto",
    descripcion:
      "En su último período de servicio en Afganistán, el sargento John Kinley incorpora al intérprete local Ahmed para que sea su traductor en la región. Cuando su unidad sufre una emboscada, Kinley y Ahmed son los únicos supervivientes. Con los enemigos persiguiéndoles, Ahmed arriesga su propia vida para intentar llevar a Kinley herido a través de kilómetros de terreno agotador a un lugar seguro.",
    duracion: "2h 3m",
    genero: "Accion",
    clasificacion: "ATP",
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
    titulo: "Warhorse one",
    descripcion:
      "Mientras realizaba una misión de rescate para evacuar a un grupo de misioneros, durante la retirada militar de EE. UU. de Afganistán en 2021, un helicóptero del equipo SEAL es derribado por un grupo de insurgentes. Uno de los operadores del equipo SEAL, el Jefe Maestro Richard Mirko (Johnny Strong), es arrojado de los escombros, sobreviviendo milagrosamente al accidente. Con el resto de su equipo muerto en acción, Mirko continúa su búsqueda de los misioneros, pero encuentra su vehículo emboscado, el único sobreviviente: un traumatizado niño de 5 años. Mirko debe ahora guía al niño a un lugar seguro, a través de un guante de insurgentes hostiles, y sobrevive a la brutal naturaleza afgana.",
    duracion: "2h 6m",
    genero: "Accion",
    clasificacion: "ATP",
    director: "William Kaufman",
    fechaEstreno: "2023",
    imagen:
      "../img/pelisaccion/the-hunger-games-the-ballad-of-songbirds-and-snakes.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "La emboscada",
    descripcion:
      "Un grupo de jóvenes comandos de élite, liderados por el Capitán Drummond, tienen la tarea de recopilar información altamente clasificada que puede cambiar el destino de la guerra.",
    duracion: "1h 44m",
    genero: "Accion",
    clasificacion: "ATP",
    director: "Mark Burman",
    fechaEstreno: "2023",
    imagen: "../img/pelisaccion/wYejOZfJpza6nQDOhLpji7IK80o.jpg",
  },
];
const peliculasComedia = [
  {
    id: generarId().toString(),
    titulo: "Bridget Jones' Baby",
    descripcion:
      "Después de romper con Mark Darcy, Bridget Jones, con los cuarenta recién cumplidos y soltera de nuevo, decide centrarse en su trabajo y rodearse de antiguos y nuevos amigos. Por una vez en su vida, Bridget parece tenerlo todo bajo control. Pero su vida amorosa toma una nueva dirección cuando conoce a un elegante estadounidense llamado Jack, un galán que tiene todo lo que no tiene el Sr. Darcy. Descubre que está embarazada, pero no sabe a ciencia cierta quién es el padre",
    duracion: "2h 3m",
    genero: "Comedia",
    clasificacion: "+12",
    director: "Sharon Maguire",
    fechaEstreno: "2016",
    imagen: "../img/comedia/2tNR2zjJZ4jiM71ucqG2zyfJ8Tp.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Aquellos maravillosos años",
    descripcion:
      "Historia de la familia Williams al finales de la década de 1960 narrada desde el punto de vista de una imaginativo Dean, de 12 años. Con la sabiduría de la edad adulta, los recuerdos entrañables y divertidos de Dean ponen de relieve los altibajos de crecer en una familia negra de clase media en Montgomery, Alabama, y la amistad, las risas y las lecciones aprendidas",
    duracion: "2h 21m",
    genero: "Comedia",
    clasificacion: "+9",
    director: "Saladin K. Patterson",
    fechaEstreno: "2021",
    imagen: "../img/comedia/4HzM9OtKSU5U0VXu1889HMU0PCm.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Monstruos, S.A.",
    descripcion:
      "Monsters Inc. es la mayor empresa de miedo del mundo, y James P. Sullivan es uno de sus mejores empleados. Asustar a los niños no es un trabajo fácil, ya que todos creen que los niños son tóxicos y no pueden tener contacto con ellos. Pero un día una niña se cuela sin querer en la empresa, provocando el caos.",
    duracion: "1h 32m",
    genero: "Comedia",
    clasificacion: "ATP",
    director: "Pete Docter",
    fechaEstreno: "2001",
    imagen: "../img/comedia/g3SgHEb5ej2MioGfYLrZVshF909.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Shaolin soccer",
    descripcion:
      "Sing es un discipulo del Shaolin cuya ambición es popularizar el kung fu en la sociedad moderna. Un día se encontrará con Fung, antiguo futbolista fracasado. Ambos tendrán la idea de formar un equipo que mezcle fútbol con artes marciales.",
    duracion: "1h 53m",
    genero: "Comedia",
    clasificacion: "ATP",
    director: "Stephen Chow",
    fechaEstreno: "2001",
    imagen: "../img/comedia/gMqHA1CoURwncG1iKBukFtTCSrG.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Casi muerta",
    descripcion:
      "María y Javi son amigos de toda la vida. Sin embargo están distanciados hace más de un año. Cuando María sufre un accidente que la deja al borde de la muerte, los amigos se reencuentran y descubren que siempre estuvieron enamorados. Ahora Javi debe decidir si seguir con su nueva vida, con novia incluida, o apostar a un amor de juventud que puede morir en cualquier momento.",
    duracion: "1h 46m",
    genero: "Comedia",
    clasificacion: "ATP",
    director: "Fernán Mirás",
    fechaEstreno: "2023",
    imagen: "../img/comedia/gSezYOBs7H3RG8rDcjsK3MqluxN.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "El conde",
    descripcion:
      "Comedia negra que imagina un universo paralelo inspirado en la historia reciente de Chile. Retrata a Augusto Pinochet, símbolo del fascismo mundial, como un vampiro que vive escondido en una mansión en ruinas en el frío extremo sur del continente. Alimentando su apetito por el mal para sostener su existencia. Después de doscientos cincuenta años de vida, Pinochet ha decidido dejar de beber sangre y abandonar el privilegio de la vida eterna. Ya no puede soportar que el mundo lo recuerde como un ladrón. A pesar del carácter decepcionante y oportunista de su familia, encuentra nueva inspiración para seguir viviendo una vida de pasión vital y contrarrevolucionaria a través de una relación inesperada..",
    duracion: "1h 50m",
    genero: "Comedia",
    clasificacion: "+16",
    director: "Pablo Larraín",
    fechaEstreno: "2023",
    imagen: "../img/comedia/gUYn97rRvnw7TkQbBhnt0WsU3JM.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Leo",
    descripcion:
      "Leo es un lagarto de 74 años que lleva atrapado en el mismo aula de Florida durante décadas con su compañera de terrario, una tortuga. Cuando se entera de que solo le queda un año de vida, Leo planea escapar para experimentar la vida en el exterior, pero entonces comienzan sus problemas.",
    duracion: "1h 42m",
    genero: "Comedia",
    clasificacion: "+7",
    director: "Robert Marianetti",
    fechaEstreno: "2023",
    imagen: "../img/comedia/hs41WYhEuaq4PaBbtaoCfGFEebi.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "El último dia en la tierra",
    descripcion:
      "Dos viejos amigos se reunen por casualidad el mismo día que una nueva cuarentena es anunciada. ¿Que haría si hoy fuera el último día en la tierra?",
    duracion: "1h 15m",
    genero: "Comedia",
    clasificacion: "ATP",
    director: "Ricardo Peña",
    fechaEstreno: "2023",
    imagen: "../img/comedia/iNx2p6GWgpcefV5RAloy0tvtUbf.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "El clan de los rompehuesos",
    descripcion:
      "Paul Crewe (Adam Sandler), un jugador de fútbol americano, y Nate Scarboro (Burt Reynolds), entrenador y antiguo campeón, se encuentran cumpliendo condena en la misma prisión. Juntos deciden formar un equipo que juegue contra el de los guardias de la cárcel. Remake de un film de mismo título protagonizado por el propio Reynolds y dirigido por Robert Aldrich en 1974. ",
    duracion: "1h 53m",
    genero: "Comedia",
    clasificacion: "+13",
    director: "Peter Segal",
    fechaEstreno: "2005",
    imagen: "../img/comedia/jl6bUYM5HBTMyckxeJKA2x0UQjS.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Feliz día de tu muerte 2",
    descripcion:
      "Dos años después de los eventos acaecidos en la primera película, Tree Gelbman (Jessica Rothe) vuelve a entrar en el bucle temporal para descubrir el motivo por el cual accedió a él en primer lugar. Secuela de Happy Death Day (2017), uno de los éxitos de Blumhouse Productions.",
    duracion: "1h 40m",
    genero: "Comedia",
    clasificacion: "+12",
    director: "Christopher Landon",
    fechaEstreno: "2019",
    imagen: "../img/comedia/q6PSTBNlI9WtfuMlngz82yaudUg.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Vida perra",
    descripcion:
      "Reggie, un border terrier ingenuo y optimista hasta la médula, acaba abandonado en las despiadadas calles de la ciudad por su dueño, Doug, aunque totalmente convencido de que todo ha sido un malentendido y que su adorado compañero de vida nunca se desentendería así de él. Pero cuando se topa con un locuaz y malhablado boston terrier llamado Bug, un perro vagabundo que adora su libertad y que cree que lo de tener dueño es de perdedores, Reggie por fin se da cuenta de que vivía inmerso en una relación tóxica y empieza a ver a Doug como lo que de verdad es: un tiparraco despreciable y desalmado.",
    duracion: "1h 33m",
    genero: "Comedia",
    clasificacion: "+12",
    director: "Josh Greenbaum",
    fechaEstreno: "2023",
    imagen: "../img/comedia/strays.jpg",
  },
  {
    id: generarId().toString(),
    titulo: "Los simpson: la pelicula",
    descripcion:
      "Homer debe salvar al mundo de una catástrofe que él mismo ha provocado. Todo comienza con Homer, su nueva mascota, un cerdo, y un silo lleno de excrementos que tiene una fuga, una combinación que desencadena un desastre distinto a todo lo que Springfield haya experimentado jamás. Mientras Marge está indignada por la monumental metedura de pata de su patán marido, una turba vengativa cae sobre el hogar de los Simpson.",
    duracion: "1h 27m",
    genero: "Comedia",
    clasificacion: "ATP",
    director: "David Silverman",
    fechaEstreno: "2007",
    imagen: "../img/comedia/t3qZAygWwd7sX6G9ae2a4R2Wbrh.jpg",
  },
];

export { peliculas, peliculasSlider, peliculasAccion, peliculasComedia,peliculasDestacadas };
