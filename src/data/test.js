const test = [
    {
      slug: "test",
      title: "Página prueba",
      content: {
        sections: [
          {
            type: "header",
            content: "Clave abierta en 7",
          },          
          {
            type: "div",
            content: `<p>Audio edición Rafa Vargas. Pistas en mp3</p>`,
          },
          {
            type: "audio",
            content: "audio",
            idPlayer: "test-pistas-7",
            slides: [],
            playlists: [
              {
                id: "test-pistas-7",
                data: [
                  // {
                  //   src: "../assets/audio/test/03-clave-abierta/Click-238bpm-edit.wav",
                  //   name: "Click 238 wav",
                  //   muted: true,
                  //   customClass: "click",
                  // },
                  {
                    src: "../assets/audio/test/03-clave-abierta/00-click-238bpm.mp3",
                    name: "Click 238 mp3",
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
          {
            type: "header",
            content: "Quintú",
          },          
          {
            type: "div",
            content: `<p>Audio edición Rafa Vargas. Pistas en mp3</p>`,
          },
          {
            type: "audio",
            content: "audio",
            idPlayer: "test-pistas-5",
            slides: [],
            playlists: [
              {
                id: "test-pistas-5",
                data: [
                  {
                    src: "../assets/audio/test/11-quintu/00-click_116bpm.mp3",
                    name: "Click 116",
                    muted: true,
                    customClass: "click",
                  },
                  {
                    src: "../assets/audio/test/11-quintu/01-clave.mp3",
                    name: "Clave 3:4",
                  },
                  {
                    src: "../assets/audio/test/11-quintu/02-timbal.mp3",
                    name: "Cáscara 3:4",
                  },
                  {
                    src: "../assets/audio/test/11-quintu/03-quinto.mp3",
                    name: "Congas",
                    customClass: "quinto",
                  },
                  {
                    src: "../assets/audio/test/11-quintu/04-bongo.mp3",
                    name: "Bongo",
                    muted: true,
                  },
                  {
                    src: "../assets/audio/test/11-quintu/05-clave-variacion.mp3",
                    name: "Clave Variación 4:3",
                    muted: true,
                  },
                ],
              },
            ],
          },
          {
            type: "header",
            content: "Quinta Clave Completa",
          },          
          {
            type: "div",
            content: `<p>Audio edición Rafa Vargas. Pistas en mp3</p>`,
          },
          {
            type: "audio",
            content: "audio",
            idPlayer: "quinta-completa-test",
            slides: [],
            playlists: [
              {
                id: "quinta-completa",
                data: [
                  {
                    src: "../assets/audio/test/01-quinta_clave_completa/00-click-198.mp3",
                    name: "Click 198bpm",
                    muted: true,
                    customClass: "click",
                  },
                  {
                    src: "../assets/audio/test/01-quinta_clave_completa/01-clave.mp3",
                    name: "Claves",
                    customClass: "clave",
                  },
                  {
                    src: "../assets/audio/test/01-quinta_clave_completa/02-cata.mp3",
                    name: "Catá",
                    customClass: "cata",
                  },
                  {
                    src: "../assets/audio/test/01-quinta_clave_completa/03-chequere.mp3",
                    name: "Chequeré",
                    customClass: "chequere",
                  },
                  {
                    src: "../assets/audio/test/01-quinta_clave_completa/04-quinto.mp3",
                    name: "Quinto",
                    customClass: "quinto",
                  },
                  {
                    src: "../assets/audio/test/01-quinta_clave_completa/05-conga.mp3",
                    name: "Conga",
                    customClass: "conga",
                  },
                  {
                    src: "../assets/audio/test/01-quinta_clave_completa/06-conga-variacion.mp3",
                    name: "Conga Variación",
                    muted: true,
                    customClass: "variacion-conga",
                  },
                  {
                    src: "../assets/audio/test/01-quinta_clave_completa/07-tumbadora.mp3",
                    name: "Tumba",
                    customClass: "tumbadora",
                  },
                ],
              },
            ],
          },
          {
            type: "div",
            content: `<p>Ensambles completos</p>`,
          },
          {
            type: "audio",
            content: "audio",
            idPlayer: "ensambles-test",
            slides: [],
            playlists: [
              {
                id: "ensambles-test",
                data: [
                  {
                    src: "../assets/audio/test/01-quinta_clave_completa/ENSAMBLE QUINTA CLAVE COMPLETA 198BPM.mp3",
                    name: "Ensamble Click 198bpm",
                    muted: true,
                    customClass: "click",
                  },
                  {
                    src: "../assets/audio/test/01-quinta_clave_completa/ENSAMBLE QUINTA CLAVE COMPLETA VARIACION 198BPM.mp3",
                    name: "Ensamble Variación 198bpm",
                    muted: true,
                    customClass: "clave",
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