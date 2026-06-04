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
              <p className="about-description">étudiant en 3e année. Je suis ouvert à tous les domaines.</p>
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
                  { name: "Zappy", lang: "C/Python", tech: "Network, AI", domain: "Game Engine" },
                  { name: "Echo", lang: "Shell", tech: "Bash scripting", domain: "Scripting" },
                ].map((project) => (
                  <li key={project.name} className="project-list-item">
                    <a
                      href={`https://github.com/Charles-n1/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {project.name}
                    </a>
                    <div
                      className="project-hover-card"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/Project_background.jpg')`
                      }}
                    >
                      <h4 className="project-title">{project.name}</h4>
                      <p className="project-lang"><strong>Language:</strong> {project.lang}</p>
                      <p className="project-tech"><strong>Tech:</strong> {project.tech}</p>
                      <p className="project-domain"><strong>Domain:</strong> {project.domain}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="projects-column finished">
              <h3>Projects finished</h3>
              <ul className="projects-list">
                {[
                  { name: "Corewar", lang: "C", tech: "ASM, VM", domain: "Assembly" },
                  { name: "MyTeams", lang: "C#", tech: ".NET, SQL", domain: "Communication" },
                  { name: "Star Trek", lang: "Python", tech: "Game, Graphics", domain: "Game Dev" },
                  { name: "API Rest", lang: "JavaScript", tech: "Node.js, Express", domain: "Backend" },
                  { name: "Wolf3D", lang: "C", tech: "3D Graphics, Raycasting", domain: "Graphics" },
                  { name: "Minishell", lang: "C", tech: "Shell, Parsing", domain: "System" },
                ].map((project) => (
                  <li key={project.name} className="project-list-item">
                    <a
                      href={`https://github.com/Charles-n1/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {project.name}
                    </a>
                    <div
                      className="project-hover-card"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/Project_background.jpg')`
                      }}
                    >
                      <h4 className="project-title">{project.name}</h4>
                      <p className="project-lang"><strong>Language:</strong> {project.lang}</p>
                      <p className="project-tech"><strong>Tech:</strong> {project.tech}</p>
                      <p className="project-domain"><strong>Domain:</strong> {project.domain}</p>
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
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.80), rgba(255,255,255,0.80)), url('${process.env.PUBLIC_URL}/soft-skills.webp')` }}
        >
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Soft-skills</h3>
              <ul>
                <li>Communication</li>
                <li>Travail d'équipe</li>
                <li>Adaptabilité</li>
                <li>Résolution de problèmes</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
