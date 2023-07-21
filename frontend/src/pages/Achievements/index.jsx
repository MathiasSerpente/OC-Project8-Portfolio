import './style.css';
import { useEffect } from 'react';
import Card from '../../components/Card';
import { projectsList } from '../../datas/projectsList';

function Achievements() {
  useEffect(() => {
    document.title = 'Mathias Serpente - Réalisations';
  }, []);

  return (
    <main className="container-achievements">
      <ul className="gallery">
        {projectsList.map((e) => (
          <Card
            key={e.id}
            id={e.id}
            project={e.project}
            banner={e.banner}
            logo={e.logo}
          />
        ))}
      </ul>
    </main>
  );
}

export default Achievements;
