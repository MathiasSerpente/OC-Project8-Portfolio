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
      <div className="gallery">
        {projectsList.map((e) => (
          <Card
            key={e.id}
            id={e.id}
            name={e.name}
            banner={e.banner}
            logo={e.logo}
          />
        ))}
      </div>
    </main>
  );
}

export default Achievements;
