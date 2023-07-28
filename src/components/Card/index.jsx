import './style.css';
import BlockDown from '../BlockDown';
import BlockUp from '../BlockUp';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <Link to={`/project/${props.id}`} className="card">
      <BlockUp />
      <div className="card-content">
        <img
          src={props.banner}
          alt={`Bannière du projet ${props.name}`}
          className="banner-card"
        />
        <img
          src={props.logo}
          alt={`Logo du projet ${props.name}`}
          className="logo-card"
        />
      </div>
      <BlockDown />
    </Link>
  );
}

export default Card;
