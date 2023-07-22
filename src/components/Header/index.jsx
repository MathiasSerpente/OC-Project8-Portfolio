import './style.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo-180x108.png';
import React, { useState } from 'react';

function Header() {
  const location = useLocation();

  const [hoveredItem, setHoveredItem] = useState('');
  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  return (
    <header>
      <div>
        <Link className="link-logo-header" to="/OC-Project8-Portfolio/">
          <img className="logo" src={Logo} alt="Logo M" />
        </Link>
      </div>
      <nav>
        <div className="links-container-header">
          <Link
            className={`nav-link-header ${
              location.pathname === '/OC-Project8-Portfolio/' && 'active'
            }`}
            to="/OC-Project8-Portfolio/"
          >
            Accueil
          </Link>
          <Link
            className={`nav-link-header ${
              location.pathname === '/achievements' && 'active'
            }`}
            to="/achievements"
          >
            Réalisations
          </Link>
          <Link
            className={`nav-link-header ${
              location.pathname === '/contact' && 'active'
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="links-icons-container-header">
          <Link
            className={`nav-link-icon-header ${
              location.pathname === '/OC-Project8-Portfolio/' && 'active'
            }`}
            to="/OC-Project8-Portfolio/"
            onMouseEnter={() => handleItemHover('house')}
            onMouseLeave={() => handleItemHover('')}
          >
            <i
              className={`fa-solid fa-house ${
                location.pathname !== '/OC-Project8-Portfolio/' &&
                hoveredItem === 'house' &&
                'fa-beat'
              }`}
            ></i>
          </Link>
          <Link
            className={`nav-link-icon-header ${
              location.pathname === '/achievements' && 'active'
            }`}
            to="/achievements"
            onMouseEnter={() => handleItemHover('laptop')}
            onMouseLeave={() => handleItemHover('')}
          >
            <i
              className={`fa-solid fa-laptop-code ${
                location.pathname !== '/achievements' &&
                hoveredItem === 'laptop' &&
                'fa-bounce'
              }`}
            ></i>
          </Link>
          <Link
            className={`nav-link-icon-header ${
              location.pathname === '/contact' && 'active'
            }`}
            to="/contact"
            onMouseEnter={() => handleItemHover('envelope')}
            onMouseLeave={() => handleItemHover('')}
          >
            <i
              className={`fa-solid fa-envelope ${
                location.pathname !== '/contact' &&
                hoveredItem === 'envelope' &&
                'fa-flip'
              }`}
            ></i>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
