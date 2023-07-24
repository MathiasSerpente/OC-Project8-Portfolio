import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo-64x38.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo M" />
          </Link>
        </div>
        <p>
          2023 <span>|</span> Mathias Serpente
        </p>
      </div>
    </footer>
  );
}

export default Footer;
