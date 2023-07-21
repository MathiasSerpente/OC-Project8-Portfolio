import './style.css';
import React, { useState } from 'react';
import Open from '../../assets/images/collapse/open-collapse.svg';
import Close from '../../assets/images/collapse/close-collapse.svg';

function Collapse({ id, classe, title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentArray = content;
  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`collapse-container ${classe}`}>
      <div className="collapse-header" key={id} onClick={toggleCollapse}>
        <div className="title-collapse-header">{title}</div>
        <img
          className="arrow-collapse-header"
          src={isOpen ? Close : Open}
          alt={isOpen ? 'Fermer' : 'Ouvrir'}
        />
      </div>
      <ul className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {contentArray.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default Collapse;
