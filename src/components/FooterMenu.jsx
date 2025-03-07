import navigation from "../data/navigation";
import { Link } from "react-router-dom";


const FooterMenu = () => {
    // Split the navigation items into two columns
    const midIndex = Math.ceil(navigation.length / 2);
    const firstColumn = navigation.slice(0, midIndex);
    const secondColumn = navigation.slice(midIndex);

    return (
        <div className="footer-menu">
            <ul className="list-unstyled mb-0 footer-menu-columns">
                <div className="footer-menu-column">
                    {firstColumn.map((link) => (
                        <li className={`nav-item ${link.children ? 'dropdown' : ''}`} key={link.slug}>
                            <Link className="header-menu">
                                {link.label}
                            </Link>
                            {link.children && (
                                <ul className="list-unstyled submenu">
                                    {link.children.map((child) => (
                                        <li key={child.slug}>
                                            <Link to={`${link.slug}/${child.slug}`}>
                                                {child.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </div>
                <div className="footer-menu-column">
                    {secondColumn.map((link) => (
                        <li className={`nav-item ${link.children ? 'dropdown' : ''}`} key={link.slug}>
                           <Link className="header-menu">
                                {link.label}
                            </Link>
                            {link.children && (
                                <ul className="list-unstyled submenu">
                                    {link.children.map((child) => (
                                        <li key={child.slug}>
                                            <Link to={`${link.slug}/${child.slug}`}>
                                                {child.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default FooterMenu;
