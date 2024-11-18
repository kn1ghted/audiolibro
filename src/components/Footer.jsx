// Assets
import logo from '../assets/img/audiolibro_logo-500.png'
import navigation from '../data/navigation';

// Vertical NAvigation
import { VerticalNav } from './VerticalNav';

const Footer = () => {
  return (
    <footer className="bg-secondary p-4">
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <img src={logo} className="img-fluid rounded-top footer-logo" alt="footer-logo"/>
          </div>
          <div className="col">
            <VerticalNav footerNavigation={navigation}/>
          </div>
          <div className="col">
            <h3 className="text-center mb-4">Contacto: </h3>
            <div class="row justify-content-center align-items-center g-2">
              <div class="col" align="center">
                <a className="link-light me-2" type="button" href="#" target='_blank'><i class="bi bi-whatsapp h2"></i></a>
              </div>
              <div class="col" align="center">
                <a className="link-light me-2" type="button" href="#" target='_blank'><i className="bi bi-envelope-at h2"></i></a>
              </div>
            </div>
            <div className="row justify-content-center p-4">
              <p className='text-center'>Copyright <i class="bi bi-c-circle"></i> {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
