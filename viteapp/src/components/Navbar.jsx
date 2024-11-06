import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container container-fluid">
              <a className="navbar-brand" href="/">AudioLibro</a>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dd_ritmos-5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Kalö̀te de monte
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dd_ritmos-5">
                      <li><a className="dropdown-item" href="pages/example-01.html">Quintas</a></li>
                      <li><a className="dropdown-item" href="/audiolibro/pages/example-02.html">Quinto</a></li>
                      <li><a className="dropdown-item" href="/audiolibro/pages/example-02.html">Quintí</a></li>
                      <li><a className="dropdown-item" href="/audiolibro/pages/example-02.html">Quinté</a></li>
                      <li><a className="dropdown-item" href="/audiolibro/pages/example-02.html">Quintú</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dd_ritmos-7" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Convite de diriá
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dd_ritmos-">
                      <li><a className="dropdown-item" href="/audiolibro/pages/example-01.html">Clave completa en 7</a></li>
                      <li><a className="dropdown-item" href="/audiolibro/pages/example-02.html">Clave completa en 7 rápida</a></li>
                      <li><a className="dropdown-item" href="/audiolibro/pages/example-02.html">Clave abierta en 7</a></li>
                      <li><a className="dropdown-item" href="/audiolibro/pages/example-02.html">Séptima</a></li>
                      <li><a className="dropdown-item" href="/audiolibro/pages/example-02.html">Séptimo 3-4</a></li>
                      <li><a className="dropdown-item" href="/audiolibro/pages/example-02.html">Séptimo 4-3</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <form className="container-fluid justify-content-start">
                <a className="btn btn-outline-success me-2" type="button" href="/audiolibro/data/pdfs/kalote-convite.pdf">Descargar PDF <i className="bi bi-file-earmark-arrow-down"></i></a>
              </form>
            </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;