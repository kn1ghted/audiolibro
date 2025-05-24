const test = [
    {
      slug: "test",
      title: "Página prueba pistas editadas",
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
                    src: "../assets/audio/kalote-5/01-quinta_clave_completa/00-click-198bpm-edit.wav",
                    name: "Click 162bpm",
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