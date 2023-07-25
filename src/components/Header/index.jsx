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
        <Link className="link-logo-header" to="/">
          <img
            className="logo"
            src={Logo}
            alt="Logo M"
            width={180}
            height={108}
          />
        </Link>
      </div>
      <nav>
        <div className="links-container-header">
          <Link
            className={`nav-link-header ${
              location.pathname === '/' && 'active'
            }`}
            to="/"
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
              location.pathname === '/' && 'active'
            }`}
            to="/"
            onMouseEnter={() => handleItemHover('house')}
            onMouseLeave={() => handleItemHover('')}
            aria-label="Accueil"
          >
            <i
              className={`fa-solid fa-house ${
                location.pathname !== '/' &&
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
            aria-label="Réalisations"
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
            aria-label="Contact"
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
