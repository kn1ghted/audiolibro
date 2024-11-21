import slide01 from '../assets/img/lectura-circular.png'
import waveform_player from '../assets/img/waveform-player.png'
import Carousel from './Carousel'

const Homepage = () => {

    const sources = [
        {
            src: '/src/assets/audio/mix.wav', // ocupa ../ para salir de la carpeta components
            type: "audio/wav",
        }
    ];

    const slides = [
        {
            id:"home",
            images: [
                {
                    image: slide01,
                    alt: "Lectura Circular",
                    title: "Lectura Circular",
                    description: "Imágenes para todos los ejemplos",
                },
                {
                    image: slide01,
                    alt: "Lectura Circular",
                    title: "Lectura Circular",
                    description: "Imágenes para todos los ejemplos",
                },
            ]
        }
    ];

  return (
    <section className="main container align-self-center my-5">
    <div className="content">
          <h1 className="fw-bold">Audiolibro</h1>
          <h2>Creación de Ritmos bailables latinoamericanos en métricas irregulares (5 y 7)</h2>
          <p>La idea de la creación de este documento surge por un interés de explorar las posibilidades rítmicas dentro de la música popular latinoamericana, creando nuevos ritmos en métricas irregulares (compás de amalgama) a partir de ritmos bailables latinoamericanos, dejando de lado las métricas binarias y ternarias.</p>
      </div>

      <div className="container">
          <div className="row align-items-start gx-5">
            <div className="col bg-primary bg-gradient text-light p-5 me-1">
              <h2>Kalö̀te de monte</h2>
              <h3>Ritmos compuestos en métricas de 5</h3>
              <p>Para la creación de los ritmos en 5 fue muy importante el desarrollo de distintas claves compuestas que le dieran sentido y cohesión a estos ritmos; para ello se crearon 7 claves compuestas y un patrón rítmico en Timbal que cumple función de clave.</p>
            </div>
            <div className="col bg-secondary bg-gradient text-light p-5 ms-1">
              <h2>Convite de Diriá</h2>
              <h3>Ritmos compuestos en métricas de 7</h3>
              <p>Para la creación de los ritmos en 7, al igual que en los ritmos en 5, fue muy importante el desarrollo de distintas claves compuestas que le dieran sentido y cohesión a estos ritmos; para ello se crearon 4 claves compuestas, cada una con una duración de dos compases en 7/8.</p>
            </div>
          </div>
      </div>

      <div className="container mt-2">
          <div className="row align-items-start gx-5">
              <div className="col-xs-1 col-md-6 col-lg-6 bg-light text-light p-2">
                  <Carousel slides={slides} interval={5000} />
              </div>
              <div className="col-xs-1 col-md-6 col-lg-6 p-2">
                  <div className="container p-3">
                      <h3>Ejemplo de reproductor de audio con pistas de audio:</h3>
                      <p>El reproductor contendra las pistas correspondientes a cada instrumento. El reproductor funcionará por defecto cómo un búqle (loop) y cada pista se podrá silenciar o reproducir de manera aislada por parte del usuario</p>
                      <img className="img-fluid" src={waveform_player} alt="player"></img>
                      <ul className="list-group">
                          <li className="list-group-item text-small">
                            <small>
                              <strong><a href="https://naomiaro.github.io/waveform-playlist/" target='_blank'>Waveform Playlist - Stem Tracks</a></strong> <em>&quot;Multitrack scheduling allows to layer audio for simultaneous playback. Mute, solo, or set different volume levels for each audio track that makes up the composition. Control the master volume of the mix.&quot;</em>. Licensed under the MIT License.
                            </small>
                          </li>
                      </ul>
                  </div>
                  
              </div>
          </div>
          
      </div>
  </section>
  );
}

export default Homepage;
