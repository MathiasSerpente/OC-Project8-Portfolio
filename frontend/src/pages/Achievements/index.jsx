import './style.css';
import { useEffect } from 'react';
import BlockUp from '../../components/BlockUp';
import BlockDown from '../../components/BlockDown';

function Achievements() {
  useEffect(() => {
    document.title = 'Mathias Serpente - Réalisations';
  }, []);

  return (
    <main className="container-achievements">
      <section className="achievements">
        <BlockUp />
        <div className="block-content-container"></div>
        <BlockDown />
      </section>
    </main>
  );
}

export default Achievements;
