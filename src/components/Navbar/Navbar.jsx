import { Outlet, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import navbar from './Navbar.module.css';

const Navbar = ({ color }) => {
  const styles = {
    color,
  };

  return (
    <>
      <header>
        <nav className={navbar.navbar}>
          <ul>
            <li className={navbar.logo}>
              <Link to="/comingsoon">
                <img src={logo} alt="metricks logo" />
                <span>Metricks</span>
              </Link>
            </li>
          </ul>

          <ul className={navbar.items}>
            <li>
              <Link to="/about" style={{ color: styles.color }}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/github">Github</Link>
            </li>
            <li className={navbar.contact}>
              <Link to="/contact">Contact US</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </header>
    </>
  );
};

export default Navbar;
