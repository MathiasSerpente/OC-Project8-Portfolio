import './style.css';
import { useEffect } from 'react';
import BlockUp from '../../components/BlockUp';
import BlockDown from '../../components/BlockDown';
import CardST from '../../components/Card-ST';
import { skillsList } from '../../datas/skillsList';
import { toolsList } from '../../datas/toolsList';

function Home() {
  useEffect(() => {
    document.title = 'Mathias Serpente - Portfolio';
  }, []);

  return (
    <main className="container-home">
      <section className="presentation">
        <BlockUp />
        <div className="block-content-container">
          <div className="block-content">
            <h1>Développeur Web Front-End Junior</h1>
            <p>
              Bienvenue sur mon portfolio ! Je suis Mathias Serpente,
              développeur web front-end junior passionné par la création
              d'expériences web attrayantes et fonctionnelles.
            </p>
            <p>
              Actuellement en cours de formation de{' '}
              <a
                className="link-presentation"
                href="https://openclassrooms.com/fr/paths/717-developpeur-web"
                target="_blank"
                rel="noreferrer"
              >
                Développeur Web
              </a>{' '}
              chez OpenClassrooms, je suis très enthousiaste à l'idée d'utiliser
              mes compétences nouvellement acquises en contribuant à des projets
              passionnants.
            </p>
          </div>
        </div>
        <BlockDown />
      </section>
      <section className="skills">
        <BlockUp />
        <div className="block-content-container">
          <div className="block-content">
            <h2>Compétences</h2>
            <ul className="skills-container">
              {skillsList.map((e) => (
                <CardST key={e.id} name={e.name} picture={e.picture} />
              ))}
            </ul>
          </div>
        </div>
        <BlockDown />
      </section>
      <section className="tools">
        <BlockUp />
        <div className="block-content-container">
          <div className="block-content">
            <h2>Outils</h2>
            <div className="tools-container">
              {toolsList.map((e) => (
                <CardST key={e.id} name={e.name} picture={e.picture} />
              ))}
            </div>
          </div>
        </div>
        <BlockDown />
      </section>
    </main>
  );
}

export default Home;

/* <li className="skill">
                <img className="skill-logo" src={HtmlLogo} alt="Logo HTML" />
                <span className="skill-name">HTML</span>
              </li>
              <li className="skill">
                <img className="skill-logo" src={CssLogo} alt="Logo CSS" />
                <span className="skill-name">CSS</span>
              </li>
              <li className="skill">
                <img
                  className="skill-logo"
                  src={JavascriptLogo}
                  alt="Logo Javascript"
                />
                <span className="skill-name">Javascript</span>
              </li>
              <li className="skill">
                <img className="skill-logo" src={ReactLogo} alt="Logo React" />
                <span className="skill-name">React.js</span>
              </li>
              <li className="skill">
                <img className="skill-logo" src={NodeLogo} alt="Logo Node" />
                <span className="skill-name">Node.js</span>
              </li>
              <li className="skill">
                <img
                  className="skill-logo"
                  src={ExpressLogo}
                  alt="Logo Express"
                />
                <span className="skill-name">Express.js</span>
              </li> */
