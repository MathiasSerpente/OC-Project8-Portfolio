import './style.css';
import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlockUp from '../../components/BlockUp';
import BlockDown from '../../components/BlockDown';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collaspe';
import { projectsList } from '../../datas/projectsList';
import LogoGitHub from '../../assets/images/tools/github-9179ef.svg';

function Project() {
  const { id } = useParams();
  const project = projectsList.find((project) => project.id === id);
  const technosArray = project.technos;
  const collapsesContent = [
    project.description,
    project.skills,
    project.resources,
  ];

  useEffect(() => {
    document.title = `Projet ${project.name}`;
  }, [project.name]);

  if (!project) {
    return <Navigate to="/error" />;
  }

  return (
    <main className="container-project">
      <section className="project">
        <BlockUp />
        <div className="block-content-container">
          <div className="block-content">
            <Carousel
              id={project.id}
              name={project.name}
              pictures={project.pictures}
              title={project.project}
            />
            <div className="description-project">
              <div className="ndtc-project">
                <div className="nd-project">
                  <div className="name-project">{project.name}</div>
                  <div className="date-project">{`(${project.date})`}</div>
                </div>
                <div className="tc-project">
                  <div className="title-project">{project.title}</div>
                  <div className="context-project">{project.context}</div>
                </div>
              </div>
              <div className="technos-repository-project">
                <div className="technos-project">
                  {technosArray.map((e, index) => {
                    const techno = (
                      <div className="techno-container" key={index}>
                        <span className="techno">{e}</span>
                      </div>
                    );
                    return techno;
                  })}
                </div>
                <div className="repository-project">
                  <a
                    href={project.repository}
                    className="link-repository-project"
                  >
                    <img
                      className="logo-github-project"
                      src={LogoGitHub}
                      alt={`Lien GitHub du projet ${project.name}`}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="collapses-project">
              {collapsesContent.map((e) => (
                <Collapse
                  key={e.id}
                  classe={e.class}
                  title={e.title}
                  content={e.content}
                />
              ))}
            </div>
          </div>
        </div>
        <BlockDown />
      </section>
    </main>
  );
}

export default Project;
