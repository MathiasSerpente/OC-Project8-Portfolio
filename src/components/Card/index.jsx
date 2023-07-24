import './style.css';
import BlockDown from '../BlockDown';
import BlockUp from '../BlockUp';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <Link
      to={`/OC-Project8-Portfolio/achievements/project/${props.id}`}
      className="card"
    >
      <BlockUp />
      <div className="card-content">
        <img
          src={props.banner}
          alt={`Bannière du projet ${props.project}`}
          className="banner-card"
        />
        <img
          src={props.logo}
          alt={`Logo du projet ${props.project}`}
          className="logo-card"
        />
      </div>
      <BlockDown />
    </Link>
  );
}

export default Card;
