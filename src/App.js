import React from 'react'
import './styles.css'

export default function App() {
  return (
    <div className="rgp-app">
      <header className="topbar">
        <nav className="nav">
          <a className="nav-logo" href="#home">Chrles Nguyen</a>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="section home"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.72)), url('${process.env.PUBLIC_URL}/c.webp')` }}
        >
          <h1>Bienvenue</h1>
          <p>Reconstruction en cours — bienvenue !</p>
        </section>

        <section
          id="about"
          className="section about"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.78), rgba(255,255,255,0.78)), url('${process.env.PUBLIC_URL}/wp2960029-electro-wallpaper.jpg')` }}
        >
          <h2>About</h2>
          <div className="about-container">
            <img src={`${process.env.PUBLIC_URL}/IMG-20241231-WA0000.jpg`} alt="Charles Nguyen" className="about-photo" />
            <div className="about-text">
              <h3 className="about-name">Bonjour ! Je suis Charles Nguyen.</h3>
              <p className="about-description">étudiant en 3e année. Je suis ouvert à tous les domaines. Prêt à de nouveaux défis, je dois apprendre de nouvelles technologies.</p>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="section portfolio"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.80), rgba(255,255,255,0.80)), url('${process.env.PUBLIC_URL}/Portfilio_backgrond.jpeg')` }}
        >
          <h2>Portfolio</h2>
          <div className="projects-columns">
            <div className="projects-column in-progress">
              <h3>Projects in progress</h3>
              <ul className="projects-list">
                {[
                  {
                    name: "Zappy",
                    group: "7",
                    lang: "C, C++, Python",
                    techno: "TCP Sockets, SFML",
                    domain: "Game, Network",
                    desc: "Jeu réseau multijoueur où des équipes d'IA s'affrontent sur une carte pour atteindre le niveau max via des rituels d'élévation.",
                  },
                  {
                    name: "Echo",
                    group: "Solo",
                    lang: "Python, C++",
                    techno: "ROS 2, PyTorch, Gazebo, YOLOv8",
                    domain: "IA, Robotics",
                    desc: "Robot autonome imprimé en 3D capable de naviguer dans un environnement domestique, avec IA apprenante embarquée.",
                  },
                ].map((project) => (
                  <li key={project.name} className="project-list-item">
                    <a href="https://github.com/Charles-n1/" target="_blank" rel="noopener noreferrer" className="project-link">
                      {project.name}
                    </a>
                    <div
                      className="project-hover-card"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/Project_background.jpg')`
                      }}
                    >
                      <h4 className="project-title">{project.name}</h4>
                      <p className="project-meta"><strong>Group:</strong> {project.group}</p>
                      <p className="project-meta"><strong>Lang:</strong> {project.lang}</p>
                      <p className="project-meta"><strong>Techno:</strong> {project.techno}</p>
                      <p className="project-meta"><strong>Domain:</strong> {project.domain}</p>
                      <p className="project-desc">{project.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="projects-column finished">
              <h3>Projects finished</h3>
              <ul className="projects-list">
                {[
                  {
                    name: "Corewar",
                    group: "2",
                    lang: "C",
                    techno: "Machine virtuelle custom",
                    domain: "System, Virtual Machine",
                    desc: "Machine virtuelle dans laquelle des programmes-champions s'affrontent en mémoire partagée — le dernier à exécuter live gagne.",
                  },
                  {
                    name: "Start Trek (RL)",
                    group: "2",
                    lang: "Python",
                    techno: "Gymnasium, PyTorch",
                    domain: "IA",
                    desc: "Agent de reinforcement learning entraîné à faire atterrir un module lunaire de façon autonome par essai-erreur.",
                  },
                  {
                    name: "MyTeams",
                    group: "3",
                    lang: "C",
                    techno: "TCP Sockets, poll",
                    domain: "Network, Communication",
                    desc: "Clone de Microsoft Teams en ligne de commande — serveur multi-clients gérant équipes, canaux, threads et messages privés.",
                  },
                  {
                    name: "Wolf3D",
                    group: "3",
                    lang: "C",
                    techno: "CSFML, Raycasting",
                    domain: "Game, Graphics",
                    desc: "FPS old-school en raycasting inspiré de Wolfenstein, avec moteur de rendu 3D, sprites animés et système de sauvegarde.",
                  },
                  {
                    name: "Raytracer",
                    group: "3",
                    lang: "C++",
                    techno: "libconfig++, SFML",
                    domain: "Graphics, 3D",
                    desc: "Moteur de rendu 3D photoréaliste par lancer de rayons, supportant lumières, ombres, textures et primitives géométriques.",
                  },
                  {
                    name: "Arcade",
                    group: "3",
                    lang: "C++",
                    techno: "dynamic libs, SDL2, nCurses, SFML",
                    domain: "Game, Architecture",
                    desc: "Plateforme de jeux rétro modulaire chargeant jeux et moteurs graphiques comme plugins dynamiques interchangeables à chaud.",
                  },
                  {
                    name: "Minishell",
                    group: "1",
                    lang: "C",
                    techno: "—",
                    domain: "System, Shell",
                    desc: "Shell Unix maison gérant pipes, redirections et séparateurs avec priorité d'exécution correcte.",
                  },
                  {
                    name: "API Rest",
                    group: "Solo",
                    lang: "Python",
                    techno: "Flask",
                    domain: "Backend, Web",
                    desc: "API REST backend en Flask avec base de données pour opérations CRUD — créer, lire, mettre à jour, supprimer des ressources.",
                  },
                  {
                    name: "Cutiepie",
                    group: "Solo",
                    lang: "Python",
                    techno: "PyTorch",
                    domain: "Game",
                    desc: "Jeu vidéo fun créé lors d'un hackathon. On se balade dans une forêt pour retrouver un moyen de rentrer chez soi.",
                  },
                ].map((project) => (
                  <li key={project.name} className="project-list-item">
                    <a href="https://github.com/Charles-n1/" target="_blank" rel="noopener noreferrer" className="project-link">
                      {project.name}
                    </a>
                    <div
                      className="project-hover-card"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/Project_background.jpg')`
                      }}
                    >
                      <h4 className="project-title">{project.name}</h4>
                      <p className="project-meta"><strong>Group:</strong> {project.group}</p>
                      <p className="project-meta"><strong>Lang:</strong> {project.lang}</p>
                      <p className="project-meta"><strong>Techno:</strong> {project.techno}</p>
                      <p className="project-meta"><strong>Domain:</strong> {project.domain}</p>
                      <p className="project-desc">{project.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="section skills"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.80), rgba(255,255,255,0.80)), url('${process.env.PUBLIC_URL}/Skills.jpg')` }}
        >
          <h2>Skills</h2>
          <div className="skills-grid">
            <div
              className="skill-card"
              style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.86), rgba(255,255,255,0.86)), url('${process.env.PUBLIC_URL}/soft-skills.webp')` }}
            >
              <h3>Soft-skills</h3>
              <ul>
                <li>Communication</li>
                <li>Travail d'équipe</li>
                <li>Adaptabilité</li>
                <li>Résolution de problèmes</li>
              </ul>
            </div>
            <div
              className="skill-card"
              style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.86), rgba(255,255,255,0.86)), url('${process.env.PUBLIC_URL}/hard_skills.webp')` }}
            >
              <h3>Hard-skills</h3>
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>Python</li>
                <li>React</li>
                <li>Linux</li>
                <li>Git / GitHub</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
