const test = [
    {
      slug: "test",
      title: "Página prueba",
      content: {
        sections: [
          {
            type: "div",
            content: `<p>Clave abierta en 7. Audio edición Rafa Vargas. Pistas en mp3</p>`,
          },
          {
            type: "audio",
            content: "audio",
            idPlayer: "test-pistas",
            slides: [],
            playlists: [
              {
                id: "test-pistas",
                data: [
                  {
                    src: "../assets/audio/test/03-clave-abierta/00-click-238bpm.mp3",
                    name: "Click 238",
                    muted: true,
                    customClass: "click",
                  },
                  {
                    src: "../assets/audio/test/03-clave-abierta/01-clave.mp3",
                    name: "Clave",
                    customClass: "setima-abierta-clave",
                  },
                  {
                    src: "../assets/audio/test/03-clave-abierta/02-chequere.mp3",
                    name: "Chequeré",
                    customClass: "setima-abierta-chequere",
                  },
                  {
                    src: "../assets/audio/test/03-clave-abierta/03-chequere_golpe.mp3",
                    name: "Chequeré Variación",
                    muted: true,
                    customClass: "variacion-setima-abierta-chequere",
                  },
                  {
                    src: "../assets/audio/test/03-clave-abierta/04-conga.mp3",
                    name: "Conga",
                    customClass: "setima-abierta-conga",
                  },
                  {
                    src: "../assets/audio/test/03-clave-abierta/05-tumba.mp3",
                    name: "Tumbadora",
                    customClass: "setima-abierta-tumbadora",
                  },
                  {
                    src: "../assets/audio/test/03-clave-abierta/06-tumba_variacion.mp3",
                    name: "Tumbadora Variación",
                    muted: true,
                    customClass: "variacion-setima-abierta-tumbadora",
                  },
                  {
                    src: "../assets/audio/test/03-clave-abierta/07-campana_mano.mp3",
                    name: "Campana de mano",
                    muted: true,
                    customClass: "setima-abierta-campana-mano",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ];
  
  export default test;