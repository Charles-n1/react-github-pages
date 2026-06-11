import React from 'react'
import './styles.css'

export default function App() {
  const softSkills = [
    { name: "Autonomie", level: "N/A", projects: ["Lunar Lander", "API REST", "CutiePie"] },
    { name: "Travail d'équipe", level: "N/A", projects: ["Zappy", "MyTeams", "Arcade"] },
    { name: "Apprentissage rapide", level: "N/A", projects: [] },
    { name: "Rigueur", level: "N/A", projects: [] },
    { name: "Organisation", level: "N/A", projects: [] },
    { name: "Créativité", level: "N/A", projects: ["CutiePie"] },
    { name: "Polyvalence", level: "N/A", projects: [] },
    { name: "Communication technique", level: "N/A", projects: [] }
  ]

  const hardSkills = [
    { name: "C", level: "Expert", projects: ["Minishell", "MyTeams", "Corewar"] },
    { name: "C++", level: "Avancé", projects: ["Zappy", "Arcade", "Raytracer", "Wolfenstein 3D"] },
    { name: "Python", level: "Intermédiaire", projects: ["Lunar Lander RL", "API REST", "Cutiepie"] },
    { name: "JavaScript", level: "Débutant", projects: ["Epytodo"] },
    { name: "Assembleur", level: "Débutant", projects: ["Corewar"] },
    { name: "SQL", level: "Débutant", projects: ["Epytodo (MySQL)"] },
    { name: "HTML / CSS", level: "Débutant-Intermédiaire", projects: ["API REST (Flask templates)"] },
    { name: "Bash / PowerShell", level: "Avancé", projects: ["Environnement Linux quotidien"] },
    { name: "VBA", level: "Débutant", projects: ["Cotation automatique (stage)"] }
  ]

  return (
    <div className="rgp-app">
      <header className="topbar">
        <nav className="nav">
          <a className="nav-logo" href="#home">Charles Nguyen</a>
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
            <div className="projects-column in-progress" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('${process.env.PUBLIC_URL}/in-progress.jpg')` }}>
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
                    url: "https://github.com/Charles-n1/",
                  },
                  {
                    name: "Echo",
                    group: "Solo",
                    lang: "Python, C++",
                    techno: "ROS 2, PyTorch, Gazebo, YOLOv8",
                    domain: "IA, Robotics",
                    desc: "Robot autonome imprimé en 3D capable de naviguer dans un environnement domestique, avec IA apprenante embarquée.",
                    url: "https://github.com/Charles-n1/Echo",
                  },
                ].map((project) => (
                  <li key={project.name} className="project-list-item">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
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

            <div className="projects-column finished" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('${process.env.PUBLIC_URL}/Complete.png')` }}>
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
                    url: "https://github.com/Charles-n1/Corewar",
                  },
                  {
                    name: "Start Trek (RL)",
                    group: "2",
                    lang: "Python",
                    techno: "Gymnasium, PyTorch",
                    domain: "IA",
                    desc: "Agent de reinforcement learning entraîné à faire atterrir un module lunaire de façon autonome par essai-erreur.",
                    url: "https://github.com/Charles-n1/Start-trek",
                  },
                  {
                    name: "MyTeams",
                    group: "3",
                    lang: "C",
                    techno: "TCP Sockets, poll",
                    domain: "Network, Communication",
                    desc: "Clone de Microsoft Teams en ligne de commande — serveur multi-clients gérant équipes, canaux, threads et messages privés.",
                    url: "https://github.com/Charles-n1/MyTeams",
                  },
                  {
                    name: "Wolf3D",
                    group: "3",
                    lang: "C",
                    techno: "CSFML, Raycasting",
                    domain: "Game, Graphics",
                    desc: "FPS old-school en raycasting inspiré de Wolfenstein, avec moteur de rendu 3D, sprites animés et système de sauvegarde.",
                    url: "https://github.com/Charles-n1/Wolf3D",
                  },
                  {
                    name: "Raytracer",
                    group: "3",
                    lang: "C++",
                    techno: "libconfig++, SFML",
                    domain: "Graphics, 3D",
                    desc: "Moteur de rendu 3D photoréaliste par lancer de rayons, supportant lumières, ombres, textures et primitives géométriques.",
                    url: "https://github.com/Charles-n1/Raytracer",
                  },
                  {
                    name: "Arcade",
                    group: "3",
                    lang: "C++",
                    techno: "dynamic libs, SDL2, nCurses, SFML",
                    domain: "Game, Architecture",
                    desc: "Plateforme de jeux rétro modulaire chargeant jeux et moteurs graphiques comme plugins dynamiques interchangeables à chaud.",
                    url: "https://github.com/Charles-n1/Arcade",
                  },
                  {
                    name: "Minishell",
                    group: "1",
                    lang: "C",
                    techno: "—",
                    domain: "System, Shell",
                    desc: "Shell Unix maison gérant pipes, redirections et séparateurs avec priorité d'exécution correcte.",
                    url: "https://github.com/Charles-n1/Minishell-C",
                  },
                  {
                    name: "API Rest",
                    group: "Solo",
                    lang: "Python",
                    techno: "Flask",
                    domain: "Backend, Web",
                    desc: "API REST backend en Flask avec base de données pour opérations CRUD — créer, lire, mettre à jour, supprimer des ressources.",
                    url: "https://github.com/Charles-n1/API-Flask-Sqlite-Python",
                  },
                  {
                    name: "Cutiepie",
                    group: "Solo",
                    lang: "Python",
                    techno: "PyTorch",
                    domain: "Game",
                    desc: "Jeu vidéo fun créé lors d'un hackathon. On se balade dans une forêt pour retrouver un moyen de rentrer chez soi.",
                    url: "https://github.com/Charles-n1/CutiePie",
                  },
                ].map((project) => (
                  <li key={project.name} className="project-list-item">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
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
              <div className="skill-pills">
                {softSkills.map((s) => (
                  <div key={s.name} className="skill-pill">
                    <span className="pill-name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="skill-card"
              style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.86), rgba(255,255,255,0.86)), url('${process.env.PUBLIC_URL}/hard_skills.webp')` }}
            >
              <h3>Hard-skills</h3>
              <div className="skill-pills">
                {hardSkills.map((t) => (
                  <div key={t.name} className="skill-pill">
                    <span className="pill-name">{t.name}</span>
                    <div
                      className="skill-hover"
                      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${process.env.PUBLIC_URL}/Projects.jpg')` }}
                    >
                      <p className="hover-level"><strong>Niveau:</strong> {t.level}</p>
                      <p className="hover-projects"><strong>Projets:</strong></p>
                      <ul className="hover-projects-list">
                        {t.projects.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
