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
                <a className="icon-link link-light icon-link-hover link-opacity-10-hover me-2" type="button" href="#" target='_blank'><i className="bi bi-whatsapp h2"></i></a>
              </div>
              <div className="col" align="center">
                <a className="icon-link link-light icon-link-hover link-opacity-10-hover me-2" type="button" href="#" target='_blank'><i className="bi bi-envelope-at h2"></i></a>
              </div>
              <p className="text-center mb-4">Copyright {new Date().getFullYear()} <i class="bi bi-c-circle"></i></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;