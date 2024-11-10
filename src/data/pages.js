const pages = [
  {
    slug: "quinta-completa",
    title: "Quinta",
    content: {
      sections: [
        {
          type: "header",
          content: "Quinta Clave Completa",
        },
        {
          type: "text",
          content:
            "Se creó este ritmo en torno a la Clave Completa, la cual es una clave compuesta que se construyó a partir de la combinación de la clave de Son cubano 3:2 y la clave de Guaguancó. Ejemplo con click a tempo de 118 bpm.",
        },
        {
          type: "audio",
          content: "audio",
          playlists: [
            {
              id: "quinta-completa",
              data: [
                {
                  src: "src/assets/audio/convite-7/01-clave-completa/01-clave.wav",
                  name: "Clave",
                  loop: true,
                },
                {
                  src: "src/assets/audio/convite-7/01-clave-completa/02-cata.wav",
                  name: "Cata",
                  loop: true,
                },
                {
                  src: "src/assets/audio/convite-7/01-clave-completa/03-chequere.wav",
                  name: "Chequere",
                  loop: true,
                },
                {
                  src: "src/assets/audio/convite-7/01-clave-completa/04-quinto.wav",
                  name: "Quinto",
                  loop: true,
                },
                {
                  src: "src/assets/audio/convite-7/01-clave-completa/05-conga.wav",
                  name: "Conga",
                  loop: true,
                },
                {
                  src: "src/assets/audio/convite-7/01-clave-completa/06-tumba.wav",
                  name: "Tumba",
                },
                {
                  src: "src/assets/audio/convite-7/01-clave-completa/07-campana.wav",
                  name: "Campana",
                },
                {
                  src: "src/assets/audio/convite-7/01-clave-completa/08-campana_mano.wav",
                  name: "Campana a mano",
                }
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Quinta Clave Completa - rápida",
        },
        {
          type: "text",
          content: "Variante con click a tempo 225 bpm.",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinta-completa-rapida",
          playlists: [
            {
              id: "quinta-completa-rapida",
              data: [
                {
                  src: "src/assets/audio/convite-7/02-clave-completa_rapida/01-clave.wav",
                  name: "Clave",
                },
                {
                  src: "src/assets/audio/convite-7/02-clave-completa_rapida/02-cata.wav",
                  name: "Cata",
                },
                {
                  src: "src/assets/audio/convite-7/02-clave-completa_rapida/03-chequere.wav",
                  name: "Chequere",
                },
                {
                  src: "src/assets/audio/convite-7/02-clave-completa_rapida/04-conga.wav",
                  name: "Conga",
                },
                {
                  src: "src/assets/audio/convite-7/02-clave-completa_rapida/05-tumba.wav",
                  name: "Tumba",
                },
                {
                  src: "src/assets/audio/convite-7/02-clave-completa_rapida/06-campana.wav",
                  name: "Campana",
                },
                {
                  src: "src/assets/audio/convite-7/02-clave-completa_rapida/07-campana_mano.wav",
                  name: "Campana a mano",
                }
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "quinta-abierta",
    title: "Quinta",
    content: {
      sections: [
        {
          type: "header",
          content: "Quinta Clave Abierta",
        },
        {
          type: "text",
          content:
            "Se creó este ritmo en torno a la clave abierta, la cual es una clave compuesta, que se construyó a partir de la clave de Guaguancó, a la que se le agregó un silencio de negra entre el tercer y cuarto tiempo en cada compás, dando como resultado doscompases de cinco tiempos.",
        },
        {
          type: "audio",
          content: "audio",
          playlists: [
            {
              id: "qca-1",
              data: [
                {
                  src: "src/assets/audio/convite-7/03-clave-abierta/01-clave.wav",
                  name: "Clave",
                },
                {
                  src: "src/assets/audio/convite-7/03-clave-abierta/02-chequere.wav",
                  name: "Chequere",
                },
                {
                  src: "src/assets/audio/convite-7/03-clave-abierta/03-chequere_golpe.wav",
                  name: "Chequere golpe",
                },
                {
                  src: "src/assets/audio/convite-7/03-clave-abierta/04-conga.wav",
                  name: "Conga",
                },
                {
                  src: "src/assets/audio/convite-7/03-clave-abierta/05-tumba.wav",
                  name: "Tumba",
                },
                {
                  src: "src/assets/audio/convite-7/03-clave-abierta/06-tumba_variacion.wav",
                  name: "Tumba variación",
                },
                {
                  src: "src/assets/audio/convite-7/03-clave-abierta/07-campana_mano.wav",
                  name: "Campana a mano",
                }
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Quinta Clave Completa - rápida",
        },
        {
          type: "text",
          content: "Variante con click a 225 bpm.",
        },
      ],
    },
  },
  {
    slug: "quinto-5-4",
    title: "Quinto",
    content: {
      sections: [
        {
          type: "header",
          content: "Variación 5 de 4",
        },
        {
          type: "text",
          content:
            "Se subdividió el patrón del Requinto (Tambor Chico) en cinco grupos de cuatro corcheas cada uno , donde se acentúa la segunda corchea (golpe abierto con la mano que no tiene baqueta), respetando el patrón del Tambor Chico original que consta de cuatro grupos de cuatro corcheas cada uno.",
        },
      ],
    },
  },
  {
    slug: "completa-7",
    title: "Clave Completa en 7",
    content: {
      sections: [
        {
          type: "header",
          content: "Subtitulo",
        },
        {
          type: "text",
          content:
            "Para la creación de los ritmos en 5 fue muy importante el desarrollo de distintas claves compuestas que le dieran sentido y cohesión a estos ritmos; para ello se crearon 7 claves compuestas y un patrón rítmico en Timbal que cumple función de clave.",
        },

      ],
    },
  },
];

export default pages;
