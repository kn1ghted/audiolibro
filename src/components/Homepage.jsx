import slide01 from '../assets/img/lectura-circular.png'
import TSPlayer from '../components/TS-player.jsx'
import mixAudio from '../assets/audio/mix.wav'

const Homepage = () => {

    const sources = [
        {
            src: '/src/assets/audio/mix.wav', // ocupa ../ para salir de la carpeta components
            type: "audio/wav",
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
                  <div id="slideshow" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        <button type="button" data-bs-target="#slideshow" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#slideshow" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                          <img src={slide01} className="d-block w-100" alt="lectura-circular" />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Lectura Circular</h5>
                            <p>Imágenes para todos los ejemplos</p>
                          </div>
                        </div>
                        <div className="carousel-item active" data-bs-interval="10000">
                          <img src={slide01} className="d-block w-100" alt="lectura-circular" />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Lectura Circular</h5>
                            <p>Imágenes para todos los ejemplos</p>
                          </div>
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#slideshow" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#slideshow" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
              </div>
              <div className="col-xs-1 col-md-6 col-lg-6 p-2">
                  <div className="container p-3">
                      <h3>Ejemplo de reproductor de audio con pistas de audio:</h3>
                      <p>El reproductor contendra las pistas correspondientes a cada instrumento. El reproductor funcionará por defecto cómo un búqle (loop) y cada pista se podrá silenciar o reproducir de manera aislada por parte del usuario</p>
                      
                      {/* <TSPlayer sources={sources}/> */}

                  </div>
                  
              </div>
          </div>
          
      </div>
  </section>
  );
}

export default Homepage;
