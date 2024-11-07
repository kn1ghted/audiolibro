const pages = [
  {
    slug: "quinto",
    title: "Qinto",
    content: {
      sections: [
        {
          type: "header",
          content: "Subtitulo",
        },
        {
          type: "text",
          content:
            "La idea de la creación de este documento surge por un interés de explorar las posibilidades rítmicas dentro de la música popular latinoamericana, creando nuevos ritmos en métricas irregulares (compás de amalgama) a partir de ritmos bailables latinoamericanos, dejando de lado las métricas binarias y ternarias.",
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
  {
    slug: "primero",
    title: "Primero",
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
