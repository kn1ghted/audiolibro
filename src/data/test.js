const test = [
    {
      slug: "test",
      title: "Página prueba",
      content: {
        sections: [
          {
            type: "div",
            content: `<p>Esta es una pàgina para probar integración de pistas de audio.</p>`,
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
                    src: "../assets/audio/test/00-click_162bpm-edit-edit.mp3",
                    name: "Click 162bpm",
                    customClass: "setima-clave",
                  },
                  {
                    src: "../assets/audio/test/01-clave-4_2-edit-edit.mp3",
                    name: "Clave 4-2",
                    customClass: "setima-clave",
                  },
                  {
                    src: "../assets/audio/test/02-clave-2_4-edit-edit.mp3",
                    name: "Clave 2-4",
                    customClass: "setima-clave",
                  },
                  {
                    src: "../assets/audio/test/03-clave_montuno-edit-edit.mp3",
                    name: "Clave Montuno",
                    customClass: "setima-clave",
                  },
                  {
                    src: "../assets/audio/test/04-clave_montuno-variacion-edit-edit.mp3",
                    name: "Clave Montuno variación",
                    customClass: "setima-clave",
                  },
                  {
                    src: "../assets/audio/test/05-cascara_timbal-edit-edit.mp3",
                    name: "Clave cascara timbal",
                    customClass: "setima-clave",
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