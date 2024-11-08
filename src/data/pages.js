const pages = [
  { slug: "quinta-completa",
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
          sources: [
            {
              src:"src/assets/audio/kalote-5/01-quinta_clave_completa/00-click-198bpm.wav",
              type: "audio/wav",
            },
            {
              src:"src/assets/audio/kalote-5/01-quinta_clave_completa/01-clave.wav",
              type: "audio/wav",
            },
            {
              src:"src/assets/audio/kalote-5/01-quinta_clave_completa/02-cata.wav",
              type: "audio/wav",
            },
          ],
        },
        {
          type: "header",
          content: "Quinta Clave Completa - rápida",
        },
        {
          type: "text",
          content:
            "Variante con click a tempo 225 bpm.",
        },
        {
          type: "audio",
          content: "audio",
          sources: [
            {
              src:"src/assets/audio/mix.wav",
              type: "audio/wav",
            },
          ],
        },
      ],
    },
  },
  { slug: "quinta-abierta",
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
          sources: [
            {
              src:"src/assets/audio/mix.wav",
              type: "audio/wav",
            },
          ],
        },
        {
          type: "header",
          content: "Quinta Clave Completa - rápida",
        },
        {
          type: "text",
          content:
            "Variante con click a 225 bpm.",
        },
        {
          type: "audio",
          content: "audio",
          sources: [
            {
              src:"src/assets/audio/mix.wav",
              type: "audio/wav",
            },
          ],
        },
      ],
    },
  },
  { slug: "quinto-5-4",
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
        {
          type: "audio",
          content: "audio",
          sources: [
            {
              src:"src/assets/audio/mix.wav",
              type: "audio/wav",
            },
          ],
        },
      ],
    },
  },
  { slug: "completa-7",
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
            {
            type: "audio",
            content: "audio",
            sources: [
                {
                  src:"src/assets/audio/mix.wav",
                type: "audio/wav",
                },
                {
                  src:"src/assets/audio/mix.wav",
                  type: "audio/wav",
                  },
                  {
                    src:"src/assets/audio/mix.wav",
                    type: "audio/wav",
                    },
            ],
            },
        ],
    },
  }
];

export default pages;
