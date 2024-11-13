// Assets
import logo from '../assets/img/audiolibro_logo-500.png'

const Footer = () => {
  return (
    <footer className="bg-secondary p-4">
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <img src={logo} className="img-fluid rounded-top" alt=""/>
          </div>
          <div className="col" align="center">
            Navegación Vertical
          </div>
          <div className="col">
            <h3 className="text-center mb-4">Contacto:</h3>
            <div className="row justify-content-center align-items-center g-2">
              <div className="col" align="center">
                <a className="link-light me-2" type="button" href="#" target='_blank'><i className="bi bi-whatsapp h2"></i></a>
              </div>
              <div className="col" align="center">
                <a className="link-light me-2" type="button" href="#" target='_blank'><i className="bi bi-envelope-at h2"></i></a>
              </div>
            </div>
            
            <ul className="list-group">
                <li className="list-group-item text-small">
                  <small>
                    <strong>Waveform Playlist - Stem Tracks</strong> <em>&quot;Multitrack scheduling allows to layer audio for simultaneous playback. Mute, solo, or set different volume levels for each audio track that makes up the composition. Control the master volume of the mix.&quot;</em>. Licensed under the MIT License.
                  </small>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;