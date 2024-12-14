const pages = [
  {
    slug: "claves-5",
    title: "Claves compuestas en 5/4",
    content: {
      sections: [
        {
          type: "header",
          content: "Claves compuestas en 5",
        },
        {
          type: "text",
          content:
            "Para la creación de los ritmos en 5 fue muy importante el desarrollo de distintas claves compuestas que le dieran sentido y cohesión a estos ritmos; para ello se crearon 7 claves compuestas y un patrón rítmico en Timbal que cumple función de clave.",
        }
      ],
    },
  },
  {
    slug: "quinta-completa",
    title: "Quinta",
    content: {
      sections: [
        {
          type: "header",
          content: "Clave Completa",
        },
        {
          type: "text",
          content:
            "Se creó este ritmo en torno a la Clave Completa, la cual es una clave compuesta que se construyó a partir de la combinación de la clave de Son cubano 3:2 y la clave de Guaguancó. Ejemplo con click a tempo de 118 bpm.",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinta-completa",
          slides: [],
          playlists: [
            {
              id: "quinta-completa",
              data: [
                {
                  src: "./assets/audio/kalote-5/01-quinta_clave_completa/00-click-198bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/01-quinta_clave_completa/01-clave.wav",
                  name: "Clave",
                },
                {
                  src: "./assets/audio/kalote-5/01-quinta_clave_completa/02-cata.wav",
                  name: "Cata",
                },
                {
                  src: "./assets/audio/kalote-5/01-quinta_clave_completa/03-chequere.wav",
                  name: "Chequeré",
                },
                {
                  src: "./assets/audio/kalote-5/01-quinta_clave_completa/04-quinto.wav",
                  name: "Quinto",
                },
                {
                  src: "./assets/audio/kalote-5/01-quinta_clave_completa/05-conga.wav",
                  name: "Conga",
                },
                {
                  src: "./assets/audio/kalote-5/01-quinta_clave_completa/06-conga-variacion.wav",
                  name: "Variacion Conga",
                },
                {
                  src: "./assets/audio/kalote-5/01-quinta_clave_completa/07-tumbadora.wav",
                  name: "Tumbadora",
                }
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Clave Completa - rápida",
        },
        {
          type: "text",
          content: "Variante con click a tempo 225 bpm.",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinta-completa-rapida",
          slides: [],
          playlists: [
            {
              id: "quinta-completa-rapida",
              data: [
                {
                  src: "./assets/audio/kalote-5/02-quinta_clave_completa-rapida/00-click-225bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/02-quinta_clave_completa-rapida/01-clave.wav",
                  name: "Clave",
                },
                {
                  src: "./assets/audio/kalote-5/02-quinta_clave_completa-rapida/02-cata.wav",
                  name: "Cata",
                },
                {
                  src: "./assets/audio/kalote-5/02-quinta_clave_completa-rapida/03-chequere.wav",
                  name: "Chequeré",
                },
                {
                  src: "./assets/audio/kalote-5/02-quinta_clave_completa-rapida/04-quinto.wav",
                  name: "Quinto",
                },
                {
                  src: "./assets/audio/kalote-5/02-quinta_clave_completa-rapida/05-conga.wav",
                  name: "Conga",
                },
                {
                  src: "./assets/audio/kalote-5/02-quinta_clave_completa-rapida/06-conga_variacion.wav",
                  name: "Variación Conga",
                },
                {
                  src: "./assets/audio/kalote-5/02-quinta_clave_completa-rapida/07-tumbadora.wav",
                  name: "Tumbadora",
                },
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
          content: "Clave Abierta",
        },
        {
          type: "text",
          content:
            "Se creó este ritmo en torno a la clave abierta, la cual es una clave compuesta, que se construyó a partir de la clave de Guaguancó, a la que se le agregó un silencio de negra entre el tercer y cuarto tiempo en cada compás, dando como resultado doscompases de cinco tiempos.",
        },
        {
          type: "audio",
          content: "audio",
          slides: [
            /*{
              id: "quinta-abierta",
              images: [
                {
                  image: "./assets/img/5/02-quinta_abierta-circular.png",
                  title: "Lectura Circular",
                  description: "Clave de Quinta Abierta",
                }
              ]
            }*/
          ],
          playlists: [
            {
              id: "quinta-clave-abierta",
              data: [
                {
                  src: "./assets/audio/kalote-5/03-quinta_clave_abierta/00-click_200bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/03-quinta_clave_abierta/01-clave.wav",
                  name: "Clave",
                },
                {
                  src: "./assets/audio/kalote-5/03-quinta_clave_abierta/02-cata.wav",
                  name: "Cata",
                },
                {
                  src: "./assets/audio/kalote-5/03-quinta_clave_abierta/03-chequere.wav",
                  name: "Chequere",
                },
                {
                  src: "./assets/audio/kalote-5/03-quinta_clave_abierta/04-quinto.wav",
                  name: "Quinto",
                },
                {
                  src: "./assets/audio/kalote-5/03-quinta_clave_abierta/05-conga.wav",
                  name: "Conga",
                },
                {
                  src: "./assets/audio/kalote-5/03-quinta_clave_abierta/06-conga_variacion.wav",
                  name: "Conga Variación",
                },
                {
                  src: "./assets/audio/kalote-5/03-quinta_clave_abierta/07-tumbadora.wav",
                  name: "Tumbadora",
                },
                {
                  src: "./assets/audio/kalote-5/03-quinta_clave_abierta/08-campana.wav",
                  name: "Campana",
                },
                {
                  src: "./assets/audio/kalote-5/03-quinta_clave_abierta/09-campana_variacion.wav",
                  name: "Campana Variación",
                }
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Clave Abierta - rápida",
        },
        {
          type: "text",
          content: "Variante con click a 225 bpm.",
        },
        {
          type: "audio",
          content: "audio",
          slides: [
            /*{
              id: "quinta-abierta-rapida",
              images: [
                {
                  image: "./assets/img/5/02-quinta_abierta-circular.png",
                  title: "Lectura Circular",
                  description: "Clave de Quinta Abierta rápida",
                }
              ]
            }*/
          ],
          playlists: [
            {
              id: "quinta-clave-abierta-rapida",
              data: [
                {
                  src: "./assets/audio/kalote-5/04-quinta_clave_abierta-rapida/00-click_213bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/04-quinta_clave_abierta-rapida/01-clave.wav",
                  name: "Clave",
                },
                {
                  src: "./assets/audio/kalote-5/04-quinta_clave_abierta-rapida/02-cata.wav",
                  name: "Cata",
                },
                {
                  src: "./assets/audio/kalote-5/04-quinta_clave_abierta-rapida/03-chequere.wav",
                  name: "Chequere",
                },
                {
                  src: "./assets/audio/kalote-5/04-quinta_clave_abierta-rapida/04-quinto.wav",
                  name: "Quinto",
                },
                {
                  src: "./assets/audio/kalote-5/04-quinta_clave_abierta-rapida/05-conga.wav",
                  name: "Conga",
                },
                {
                  src: "./assets/audio/kalote-5/04-quinta_clave_abierta-rapida/06-conga_variacion.wav",
                  name: "Conga Variación",
                },
                {
                  src: "./assets/audio/kalote-5/04-quinta_clave_abierta-rapida/07-tumba.wav",
                  name: "Tumbadora",
                },
                {
                  src: "./assets/audio/kalote-5/04-quinta_clave_abierta-rapida/08-campana.wav",
                  name: "Campana",
                },
                {
                  src: "./assets/audio/kalote-5/04-quinta_clave_abierta-rapida/09-campana_variacion.wav",
                  name: "Campana Variación",
                }
              ],
            },
          ],
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
          content: "Variante 5 de 4",
        },
        {
          type: "text",
          content:
            "Se subdividió el patrón del Requinto (Tambor Chico) en cinco grupos de cuatro corcheas cada uno , donde se acentúa la segunda corchea (golpe abierto con la mano que no tiene baqueta), respetando el patrón del Tambor Chico original que consta de cuatro grupos de cuatro corcheas cada uno.",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinto-5-4",
          slides: [],
          playlists: [
            {
              id: "quinto-5-4",
              data: [
                {
                  src: "./assets/audio/kalote-5/05-quinto_5-4/00-click_198bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/05-quinto_5-4/01-clave.wav",
                  name: "Clave",
                },
                {
                  src: "./assets/audio/kalote-5/05-quinto_5-4/02-chico.wav",
                  name: "Chico",
                },
                {
                  src: "./assets/audio/kalote-5/05-quinto_5-4/03-quinto.wav",
                  name: "Quinto",
                },
                {
                  src: "./assets/audio/kalote-5/05-quinto_5-4/04-tumba.wav",
                  name: "Tumba",
                },
                {
                  src: "./assets/audio/kalote-5/05-quinto_5-4/05-tumba_variacion.wav",
                  name: "Tumba Variación",
                },
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Variación 5 de 4 - rápida",
        },
        {
          type: "text",
          content:
            "Variación con 118 bpm.",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinto-5-4-rapida",
          slides: [],
          playlists: [
            {
              id: "quinto-5-4-rapida",
              data: [
                {
                  src: "./assets/audio/kalote-5/06-quinto_5-4-rapido/00-click_118bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/06-quinto_5-4-rapido/01-clave.wav",
                  name: "Clave",
                },
                {
                  src: "./assets/audio/kalote-5/06-quinto_5-4-rapido/02-chico.wav",
                  name: "Chico",
                },
                {
                  src: "./assets/audio/kalote-5/06-quinto_5-4-rapido/03-quinto.wav",
                  name: "Quinto",
                },
                {
                  src: "./assets/audio/kalote-5/06-quinto_5-4-rapido/04-tumba.wav",
                  name: "Tumba",
                },
                {
                  src: "./assets/audio/kalote-5/06-quinto_5-4-rapido/05-tumba_variacion.wav",
                  name: "Tumba Variación",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "quinto-4-5",
    title: "Quinto",
    content: {
      sections: [
        {
          type: "header",
          content: "Variante 4 de 5",
        },
        {
          type: "text",
          content:
            "Se subdividió el patrón del Requinto (Tambor Chico) en cuatro grupos de cinco corcheas cada uno , acentuando la segunda corchea (golpe abierto con la mano que no tiene baqueta).",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinto-4-5",
          slides: [],
          playlists: [
            {
              id: "quinto-4-5",
              data: [
                {
                  src: "./assets/audio/kalote-5/07-quinto_4_5/00-click_198bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/07-quinto_4_5/01-clave.wav",
                  name: "Clave",
                },
                {
                  src: "./assets/audio/kalote-5/07-quinto_4_5/02-chico.wav",
                  name: "Chico",
                },
                {
                  src: "./assets/audio/kalote-5/07-quinto_4_5/03-quinto.wav",
                  name: "Quinto",
                },
                {
                  src: "./assets/audio/kalote-5/07-quinto_4_5/04-tumba.wav",
                  name: "Tumba",
                },
                {
                  src: "./assets/audio/kalote-5/07-quinto_4_5/05-tumba_variacion.wav",
                  name: "Tumba Variación",
                },
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Variante 4 de 5 - rápida",
        },
        {
          type: "text",
          content:
            "Variante con 118 bpm.",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinto-4-5-rapida",
          slides: [],
          playlists: [
            {
              id: "quinto-4-5-rapida",
              data: [
                {
                  src: "./assets/audio/kalote-5/08-quinto_4-5-rapido/00-click_118bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/08-quinto_4-5-rapido/01-clave.wav",
                  name: "Clave",
                },
                {
                  src: "./assets/audio/kalote-5/08-quinto_4-5-rapido/02-chico.wav",
                  name: "Chico",
                },
                {
                  src: "./assets/audio/kalote-5/08-quinto_4-5-rapido/03-quinto.wav",
                  name: "Quinto",
                },
                {
                  src: "./assets/audio/kalote-5/06-quinto_5-4-rapido/04-tumba.wav",
                  name: "Tumba",
                },
                {
                  src: "./assets/audio/kalote-5/08-quinto_4-5-rapido/05-tumba_variacion.wav",
                  name: "Tumba Variación",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "quinti",
    title: "Quintí",
    content: {
      sections: [
        {
          type: "header",
          content: "Quintí",
        },
        {
          type: "text",
          content:
            "Para crear este ritmo se utilizó como base el patrón del Tambor Conga del Son Cubano, el cual también se utiliza en una de las variantes del Calypso limonense (Costa Rica) (Saavedra Reyes, C. 1999). A este se le agregaron dos golpes (dos corcheas) en cada compás: un golpe abierto en el tercer tiempo y un tapado antes de los dos últimos golpes abiertos, y así se completó el compás en 5.",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinti-tracks",
          slides: [],
          playlists: [
            {
              id: "quinti-tracks",
              data: [
                {
                  src: "./assets/audio/kalote-5/09-quinti/00-click_162bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/01-clave-2_4.wav",
                  name: "Clave 2:4",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/02-clave-4_2.wav",
                  name: "Clave 4:2",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/03-clave_montuno.wav",
                  name: "Clave Montuno",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/04-clave_montuno-variacion.wav",
                  name: "Clave Montuno Variación",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/05-timbal.wav",
                  name: "Timbal",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/06-timbal_variacion.wav",
                  name: "Timbal Variación",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/07-bongo.wav",
                  name: "Bongo",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/08-conga-tumbadora.wav",
                  name: "Conga Tumbadora",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/09-quinto.wav",
                  name: "Quinto",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/10-campana.wav",
                  name: "Campana",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/11-campana_variacion.wav",
                  name: "Campana Variación",
                },
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Quintí 4:2",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinti-4-2",
          slides: [],
          playlists: [
            {
              id: "quinti-4-2",
              data: [
                {
                  src: "./assets/audio/kalote-5/09-quinti/00-click_162bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/02-clave-4_2.wav",
                  name: "Clave 4:2",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/07-bongo.wav",
                  name: "Bongo",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/08-conga-tumbadora.wav",
                  name: "Conga Tumbadora",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/10-campana.wav",
                  name: "Campana",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/11-campana_variacion.wav",
                  name: "Campana Variación",
                },
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Quintí 2:4",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinti-2-4",
          slides: [],
          playlists: [
            {
              id: "quinti-2-4",
              data: [
                {
                  src: "./assets/audio/kalote-5/09-quinti/00-click_162bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/01-clave-2_4.wav",
                  name: "Clave 2:4",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/07-bongo.wav",
                  name: "Bongo",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/08-conga-tumbadora.wav",
                  name: "Conga Tumbadora",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/10-campana.wav",
                  name: "Campana",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/11-campana_variacion.wav",
                  name: "Campana Variación",
                },
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Quintí 4:2:2",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinti-4-2-2",
          slides: [],
          playlists: [
            {
              id: "quinti-4-2-2",
              data: [
                {
                  src: "./assets/audio/kalote-5/09-quinti/00-click_162bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/03-clave_montuno.wav",
                  name: "Clave Montuno",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/08-conga-tumbadora.wav",
                  name: "Conga Tumbadora",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/10-campana.wav",
                  name: "Campana",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/11-campana_variacion.wav",
                  name: "Campana Variación",
                },
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Quintí 2:2:4",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinti-2-2-4",
          slides: [],
          playlists: [
            {
              id: "quinti-2-2-4",
              data: [
                {
                  src: "./assets/audio/kalote-5/09-quinti/00-click_162bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/04-clave_montuno-variacion.wav",
                  name: "Clave Montuno Variación",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/07-bongo.wav",
                  name: "Bongo",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/08-conga-tumbadora.wav",
                  name: "Conga Tumbadora",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/10-campana.wav",
                  name: "Campana",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/11-campana_variacion.wav",
                  name: "Campana Variación",
                },
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Quintí Timbal Montuno",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinti-timbal-montuno",
          slides: [],
          playlists: [
            {
              id: "quinti-timbal-montuno",
              data: [
                {
                  src: "./assets/audio/kalote-5/09-quinti/00-click_162bpm.wav",
                  name: "Click",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/05-timbal.wav",
                  name: "Timbal",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/07-bongo.wav",
                  name: "Bongo",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/08-conga-tumbadora.wav",
                  name: "Conga Tumbadora",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/10-campana.wav",
                  name: "Campana",
                },
                {
                  src: "./assets/audio/kalote-5/09-quinti/11-campana_variacion.wav",
                  name: "Campana Variación",
                },
              ],
            },
          ],
        },
        {
          type: "header",
          content: "Quintí Clave Completa",
        },
        {
          type: "text",
          content:
            "Indicar pistas",
        },
        {
          type: "header",
          content: "Quintí Clave Abierta",
        },
        {
          type: "text",
          content:
            "Indicar pistas",
        },
        {
          type: "header",
          content: "Quintí 3:4 - Clave de Quintú",
        },
        {
          type: "text",
          content:
            "Indicar pistas",
        },
        {
          type: "header",
          content: "Quintí 2:4 - Conga y Tumbadora",
        },
        {
          type: "text",
          content:
            "Indicar pistas",
        },
      ],
    },
  },
  {
    slug: "quinte",
    title: "Quinté",
    content: {
      sections: [
        {
          type: "header",
          content: "Quinté en 5/2",
        },
        {
          type: "text",
          content:
            "La estructura principal que se utilizó para la creación de este ritmo proviene de la Cumbia Colombiana. La Tumbadora y la percusión menor mantienen el patrón original de la Cumbia, es el Tambor Conga el que lleva el ritmo a una métrica en 5, inspirada en un patrón rítmico que se encuentra presente en la música costarricense, principalmente en la música de Guanacaste. Este patrón consta de corchea - negra, corchea - negra en repetición constante como en la percusión del 'Pasillo'.",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quinte",
          slides: [],
          playlists: [
            {
              id: "quinte",
              data: [
                {
                  src: "./assets/audio/kalote-5/10-quinte/00-click_190bpm.wav",
                  name: "Click 190",
                },
                {
                  src: "./assets/audio/kalote-5/10-quinte/01-caxixi.wav",
                  name: "Caxixi",
                },
                {
                  src: "./assets/audio/kalote-5/10-quinte/02-maraca.wav",
                  name: "Maraca",
                },
                {
                  src: "./assets/audio/kalote-5/10-quinte/03-quinto.wav",
                  name: "Quinto",
                },
                {
                  src: "./assets/audio/kalote-5/10-quinte/04-tumba.wav",
                  name: "Tumba",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "quintu",
    title: "Quintú",
    content: {
      sections: [
        {
          type: "header",
          content: "Quintú en 5/2",
        },
        {
          type: "text",
          content:
            "El patrón que se utilizó de referencia para la creación de este ritmo proviene del Bolero. La clave es igual a una Clave Cubana 3:2 a la que se le agrega dos golpes de negra al final , dando como resultado dos compases de 5/4.",
        },
        {
          type: "audio",
          content: "audio",
          idPlayer: "quintu",
          slides: [],
          playlists: [
            {
              id: "quintu",
              data: [
                {
                  src: "./assets/audio/kalote-5/11-quintu/00-click_116bpm.wav",
                  name: "Click 116",
                },
                {
                  src: "./assets/audio/kalote-5/11-quintu/01-Clave.wav",
                  name: "Clave",
                },
                {
                  src: "./assets/audio/kalote-5/11-quintu/02-clave2 Quintú.wav",
                  name: "Clave 2",
                },
                {
                  src: "./assets/audio/kalote-5/11-quintu/Bongo Quintú.wav",
                  name: "Bongo",
                },
                {
                  src: "./assets/audio/kalote-5/11-quintu/Quinto Quintú.wav",
                  name: "Quinto",
                },
                {
                  src: "./assets/audio/kalote-5/11-quintu/Timbal Quintú.wav",
                  name: "Timbal",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "claves-7",
    title: "Claves compuestas en 7/8",
    content: {
      sections: [
        {
          type: "header",
          content: "Claves compuestas en 7",
        },
        {
          type: "div",
          content:
            `<p>Para la creación de los ritmos en 7, al igual que en los ritmos en 5, fue muy importante el desarrollo de distintas claves compuestas que le dieran sentido y cohesión a estos ritmos; para ello se crearon 4 claves compuestas, cada una con una duración de dos compases en 7/8.</p>
            <p>La primera clave compuesta se desarrolló a partir de la “Clave Completa” en 5 y la segunda clave compuesta a partir de la “Clave Abierta” en 5, esta conversión se realizó utilizando la lógica de la Hemiola (este proceso de conversión está explicado más adelante en cada uno de los ritmos). Las otras dos claves compuestas se pueden entender como reducciones de estas dos primeras claves en 7 o como reducciones de las claves cubanas 3:2 y 2:3, en donde se eliminan o desplazan algunos de los golpes. Por ejemplo, la clave compuesta 4 - 3 en 7/8 se puede derivar de la clave cubana 3:2, donde se elimina el tercer golpe de la clave, restándole un tiempo de negra , dando como resultado la “Clave 4 - 3 en 7/8</p>`,
        }
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
