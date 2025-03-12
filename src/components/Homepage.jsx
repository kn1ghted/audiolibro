import slide01 from '../assets/img/lectura-circular.png'
import waveform_player from '../assets/img/waveform-player-v2.png'
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

      <div id="sections" className="container">
          <div className="row align-items-start gx-5">
            <div className="col bg-dark text-light p-5 me-1">
              <h2>Kalö̀te de monte</h2>
              <h3>Ritmos compuestos en métricas de 5</h3>
              <p>Se crearon seis tipos distintos de Kalö̀te de Monte, “Quinta de Clave Completa” , “Quinta de Clave Abierta” (ambos inspirados en la Rumba cubana, principalmente en el Guaguancó), dos variaciones de “Quinto” (inspirado en el Candombe Uruguayo), “Quintí” (inspirado en el Son Cubano y el Calypso, este ritmo puede utilizarse con cualquiera de las claves en cinco y funciona como patrón base), “Quinté” (una mezcla entre la Cumbia y ritmos guanacastecos) y “Quintú” (proveniente del patrón del Bolero).</p>
            </div>
            <div className="col bg-dark text-light p-5 ms-1">
              <h2>Convite de Diriá</h2>
              <h3>Ritmos compuestos en métricas de 7</h3>
              <p>Se crearon cuatro tipos de Convites de Diriá, “ Clave Completa en 7” , “ Clave abierta en 7” (para la creación de ambos se tomó como punto de partida los ritmos que pertenecen a la familia de la Rumba Cubana y se utilizaron las claves compuestas pertenecientes a las Quintas), “Séptima” y “Séptimo” (ambos se originan del patrón del Tambor Conga que se utiliza en el Son Cubano y en las variaciones del Calypso limonense).</p>
            </div>
          </div>
      </div>

      <div className="container mt-2">
          <div className="row align-items-start gx-5">
              {/* <div className="col-xs-1 col-md-6 col-lg-6 bg-light text-light p-2">
                  <Carousel slides={slides} interval={5000} />
              </div> */}
              <div className="col-xs-1 col-md-12 col-lg-12 p-2">
                  <div className="container p-3">
                      <h3>Reproductor de audio con pistas individuales por instrumento:</h3>
                      <p>Cada reproductor contiene las pistas individuales para cada instrumento. El reproductor se ejecuta en búqle (loop) or defecto y cada pista se puede silenciar de manera aislada.</p>
                      <img className="img-fluid" src={waveform_player} alt="player"></img>
                      <ul className="list-group">
                          <li className="list-group-item text-small">
                            <small>
                              <strong><a href="https://naomiaro.github.io/waveform-playlist/" target='_blank'>Waveform Playlist - Stem Tracks</a></strong> <em>&quot;Multitrack scheduling allows to layer audio for simultaneous playback.&quot;</em>. Licensed under the MIT License.
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
