import React from "react";
import { Link } from "react-router-dom";
import navigation from "../data/navigation";

// PDF document
import pdf from "../assets/docs/kalote-convite.pdf";

export const Navbar = ({ navigation }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container container-fluid">
        <Link className="navbar-brand" to="/">
          AudioLibro
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {navigation.map((link) => (
              <li
                className={`nav-item ${link.children ? "dropdown" : ""}`}
                key={link.slug}
              >
                <Link
                  className={`nav-link ${
                    link.children ? "dropdown-toggle" : ""
                  }`}
                  to={link.slug}
                  role="button"
                  data-bs-toggle={link.children ? "dropdown" : undefined}
                  aria-expanded="false"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="dropdown-menu" aria-labelledby="dd_ritmos-5">
                    {link.children.map((child) => (
                      <li key={child.slug}>
                        <Link
                          to={`${link.slug}/${child.slug}`}
                          className="dropdown-item"
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
        </form>
        <div class="d-lg-none">
          <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-menu" aria-controls="offcanvas-menu">
            <i className="bi bi-list"></i>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas-menu" aria-labelledby="offcanvas-menu-label">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Audiolibro</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul className="navbar-nav">
                {navigation.map((link) => (
                  <li
                    className={`nav-item ${link.children ? "dropdown" : ""}`}
                    key={link.slug}
                  >
                    <Link
                      className={`nav-link ${
                        link.children ? "dropdown-toggle" : ""
                      }`}
                      to={link.slug}
                      role="button"
                      data-bs-toggle={link.children ? "dropdown" : undefined}
                      aria-expanded="false"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <ul className="dropdown-menu" aria-labelledby="dd_ritmos-5">
                        {link.children.map((child) => (
                          <li key={child.slug}>
                            <Link
                              to={`${link.slug}/${child.slug}`}
                              className="dropdown-item"
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
              <form className="justify-content-start">
                <a
                  className="btn btn-outline-success me-2"
                  type="button"
                  href={pdf}
                  target="_blank"
                >
                  Descargar PDF <i className="bi bi-file-earmark-arrow-down"></i>
                </a>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </nav>
  );
};