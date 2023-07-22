import './style.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlockUp from '../../components/BlockUp';
import BlockDown from '../../components/BlockDown';

function Error() {
  useEffect(() => {
    document.title = 'Error';
  }, []);

  return (
    <main className="container-error">
      <section className="error">
        <BlockUp />
        <div className="block-content-container">
          <div className="number-error">404</div>
          <div className="message-error">
            La page que vous demandez n'existe pas.
          </div>
          <Link className="link-error" to="/OC-Project8-Portfolio/">
            Retourner sur la page d’accueil
          </Link>
        </div>
        <BlockDown />
      </section>
    </main>
  );
}

export default Error;
