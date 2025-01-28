// Assets
import logo from '../assets/img/audiolibro_logo-500.png'
import FooterMenu from './FooterMenu'
import pdfLibro from '../assets/docs/kalote-convite.pdf'

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container px-4 py-5">
        <div className="row justify-content-center align-items-center g-3">
          <div className="col-12 col-md-3 text-center">
            <img src={logo} className="img-fluid rounded-top" alt="" style={{ width: '300px' }}/>
            <a className="btn btn-outline-light me-2" type="button" href={pdfLibro} target='_blank'>Descargar PDF <i className="bi bi-file-earmark-arrow-down"></i></a>
          </div>
          <div className="col-12 col-md-6" align="center">
            <FooterMenu />
          </div>
          <div className="col-12 col-md-3 text-center small text-light">
            <h3 className="mb-4">Créditos:</h3>
            <h4>Autor y compositor:</h4>
            <p>Daniel Cuenca Alpízar</p>
            <h4>Patrocinador:</h4>
            <p>Enrique Sánchez Sibaja</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
