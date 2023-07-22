import './style.css';
import Logo from '../../assets/images/logo/logo-64x38.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <img src={Logo} alt="Logo M" />
        </div>
        <p>
          2023 <span>|</span> Mathias Serpente
        </p>
      </div>
    </footer>
  );
}

export default Footer;
