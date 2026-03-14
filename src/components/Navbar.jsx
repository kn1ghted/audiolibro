import React, { useRef } from "react";
import { Link } from "react-router-dom";
import navigation from "../data/navigation";

// PDF document
import pdf from "../assets/docs/kalote-convite.pdf";

export const Navbar = ({ navigation }) => {
  const offcanvasRef = useRef(null);
  const hideOffcanvas = () => {
    if (offcanvasRef.current) {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(
        offcanvasRef.current,
      );
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }
  }; 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container container-fluid">
        <Link className="navbar-brand" to="/">
          Cinco & Siete
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {navigation.map((link) => (
              <li
                className={`nav-item ${link.children && link.children.length > 0 ? "dropdown" : ""}`}
                key={link.slug}
              >
                <Link
                  className={`nav-link ${
                    link.children && link.children.length > 0
                      ? "dropdown-toggle"
                      : ""
                  }`}
                  to={link.slug}
                  role="button"
                  data-bs-toggle={
                    link.children && link.children.length > 0
                      ? "dropdown"
                      : undefined
                  }
                  aria-expanded="false"
                >
                  {link.label}
                </Link>
                {link.children && link.children.length > 0 && (
                  <ul className="dropdown-menu" aria-labelledby="dd_ritmos-5">
                    {link.children.map((child) => (
                      <li key={child.slug}>
                        <Link
                          to={`${link.slug}/${child.slug}`}
                          className="dropdown-item"
                          onClick={hideOffcanvas}>
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <form className="container-fluid justify-content-start d-lg-block d-md-none d-sm-none d-none">
          <a
            className="btn btn-outline-success me-2"
            type="button"
            href={pdf}
            target="_blank"
          >
            Descargar PDF <i className="bi bi-file-earmark-arrow-down"></i>
          </a>
          {/* ZIP de audios — ubicado en /public/assets/audio/ */}
          <a
            className="btn btn-outline-success"
            href="/audiolibro/public/assets/audio/audio_files.zip"
            download
            rel="noopener noreferrer"
          >
            Descargar ZIP <i className="bi bi-file-earmark-zip"></i>
          </a>
        </form>
        <div className="d-lg-none text-center">
          <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-menu" aria-controls="offcanvas-menu">
            <i className="bi bi-list"></i>
          </button>
          <p class="text-small">Navegación</p>
          <div class="offcanvas offcanvas-end text-left" tabindex="-1" id="offcanvas-menu" ref={offcanvasRef} aria-labelledby="offcanvas-menu-label">
            <div class="offcanvas-header">
              <h2 class="offcanvas-title">Audiolibro</h2>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <h3 class="offcanvas-title mb-3 mt-4">Reproductores de audio</h3>
              <ul className="navbar-nav">
                {navigation.map((link) => (
                  <li
                    className={`nav-item ${link.children && link.children.length > 0 ? "dropdown" : ""}`}
                    key={link.slug}
                  >
                    <Link
                      className={`nav-link text-left ${
                        link.children && link.children.length > 0
                          ? "dropdown-toggle"
                          : ""
                      }`}
                      to={link.slug}
                      onClick={link.children && link.children.length > 0 ? undefined : hideOffcanvas}
                      role="button"
                      data-bs-toggle={
                        link.children && link.children.length > 0
                          ? "dropdown"
                          : undefined
                      }
                      aria-expanded="false"
                    >
                      {link.label}
                    </Link>
                    {link.children && link.children.length > 0 && (
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dd_ritmos-5"
                      >
                        {link.children.map((child) => (
                          <li key={child.slug}>
                            <Link
                              to={`${link.slug}/${child.slug}`}
                              className="dropdown-item" onClick={hideOffcanvas}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <h3 class="offcanvas-title mb-3 mt-4">Descargas</h3>
              <form className="justify-content-start">
                <a
                  className="btn btn-outline-success me-2"
                  type="button"
                  href={pdf}
                  target="_blank"
                >
                  Descargar PDF{" "}
                  <i className="bi bi-file-earmark-arrow-down"></i>
                </a>
                {/* ZIP de audios — ubicado en /public/assets/audio/ */}
                <a
                  className="btn btn-outline-success"
                  href="/audiolibro/public/assets/audio/audio_files.zip"
                  download
                  rel="noopener noreferrer"
                >
                  Descargar ZIP <i className="bi bi-file-earmark-zip"></i>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
