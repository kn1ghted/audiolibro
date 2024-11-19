// Assets
import logo from '../assets/img/audiolibro_logo-500.png'
import FooterMenu from './FooterMenu'
import pdfLibro from '../assets/docs/kalote-convite.pdf'

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container px-4 py-5">
        <div className="row justify-content-center align-items-center g-3">
          <div className="col-12 col-md-3 text-center">
            <img src={logo} className="img-fluid rounded-top" alt="" style={{ width: '300px' }}/>
            <a className="btn btn-outline-light me-2" type="button" href={pdfLibro} target='_blank'>Descargar PDF <i className="bi bi-file-earmark-arrow-down"></i></a>
          </div>
          <div className="col-12 col-md-6" align="center">
            <FooterMenu />
          </div>
          <div className="col-12 col-md-3">
            <h3 className="text-center mb-4">Contacto: </h3>
            <div className="row justify-content-center align-items-top g-2">
              <div className="col-6" align="center">
                <a className="link-light me-2" type="button" href="#" target='_blank'><i className="bi bi-whatsapp h2"></i></a>
              </div>
              <div className="col-6" align="center">
                <a className="link-light me-2" type="button" href="#" target='_blank'><i className="bi bi-envelope-at h2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
