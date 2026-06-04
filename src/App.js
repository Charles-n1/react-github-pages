import React from 'react'
import './styles.css'

export default function App() {
  return (
    <div className="rgp-app">
      <header className="topbar">
        <nav className="nav">
          <a className="nav-logo" href="#home">Portfolio</a>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="section home">
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

        <section id="portfolio" className="section portfolio">
          <h2>Portfolio</h2>
          <div className="projects-columns">
            <div className="projects-column in-progress">
              <h3>Projects in progress</h3>
              <ul>
                <li>Projet A — description courte</li>
                <li>Projet B — description courte</li>
              </ul>
            </div>

            <div className="projects-column finished">
              <h3>Projects finished</h3>
              <ul>
                <li>Projet X — description courte</li>
                <li>Projet Y — description courte</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <h2>Skills</h2>
          <p>Compétences listées ici.</p>
        </section>
      </main>
    </div>
  )
}
