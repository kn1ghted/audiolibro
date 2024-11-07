import React from 'react';
import { Link } from 'react-router-dom';
import navigation from '../data/navigation';

// PDF document
import pdf from '../assets/docs/kalote-convite.pdf'

export const Navbar = ({ navigation }) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container container-fluid">
      <Link className="navbar-brand" to="/">AudioLibro</Link>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        {navigation.map((link) => (
        <li className={`nav-item ${link.children ? 'dropdown' : ''}`} key={link.id}>
          <Link 
          className={`nav-link ${link.children ? 'dropdown-toggle' : ''}`} 
          to={link.path} 
          role="button" 
          data-bs-toggle={link.children ? 'dropdown' : undefined} 
          aria-expanded="false"
          >
          {link.label}
          </Link>
          {link.children && (
           <ul className="dropdown-menu" aria-labelledby="dd_ritmos-5">
          {link.children.map((child) => (
            <li key={child.path}>
            <Link 
              to={child.path}
              className="dropdown-item"
            >
              {child.label}
            </Link>
            </li>
          ))}
          </ul>
        )}
        </li>
        ))}
        </ul>
      </div>
      <form className="container-fluid justify-content-start">
        <a className="btn btn-outline-success me-2" type="button" href={pdf} target='_blank'>Descargar PDF <i className="bi bi-file-earmark-arrow-down"></i></a>
      </form>
      </div>
    </nav>
    );
  };
  