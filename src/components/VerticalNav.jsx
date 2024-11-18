import React from 'react';
import { Link } from 'react-router-dom';
import footerNavigation from '../data/navigation';

// PDF document
import pdfFooter from '../assets/docs/kalote-convite.pdf'

export const VerticalNav = ({ footerNavigation }) => {
    return (
        <div className="footerNav" id="footerDropdown">
            <ul className="navbar-nav">
                <li>
                    <Link className="navbar-brand link-dark" to="/">AudioLibro</Link>
                </li>
                {footerNavigation.map((link) => (
                <li className={`nav-item ${link.children ? 'dropdown' : ''}`} key={link.id}>
                <Link 
                    className={`nav-link ${link.children ? 'dropdown-toggle' : ''} link-dark`} 
                    to={link.path} 
                    role="button" 
                    data-bs-toggle={link.children ? 'dropdown' : undefined} 
                    aria-expanded="false">
                    {link.label}
                </Link>
                {link.children && (
                    <ul className="dropdown-menu ms-5" aria-labelledby="dd_ritmos-5">
                    {link.children.map((child) => (
                    <li key={child.path}>
                        <Link to={child.path} className="dropdown-item">
                        {child.label}
                        </Link>
                    </li>))}
                    </ul>
                )}
                </li>
                ))}
                <li>
                    <form className="justify-content-start">
                    <a className="btn btn-dark me-2" type="button" href={pdfFooter} target='_blank'>Descargar PDF <i className="bi bi-file-earmark-arrow-down"></i></a>
                    </form>
                </li>
            </ul>
        </div>
    );
  };