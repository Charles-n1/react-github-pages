import "../src/styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const user = {
  name: "Charles NGUYEN",
  Age: 18,
  ImageURL: "https://media.licdn.com/dms/image/v2/D4E03AQHV2GkwE4fN4A/profile-displayphoto-shrink_800_800/B4EZQiDWHUGYAc-/0/1735738090521?e=1760572800&v=beta&t=KKCxXD2r7Dw3vUhlayBjOaMNFFMuQm562cdaX4cs9QA"
  };

function MyButton() {
  return <button>Button</button>;
}

const langages = ["C", "React.js", "Python", "HTML", "CSS", "Javascript"];

const projects = [
  {
    name: "Corewar",
    description: "Battle war with binaries",
    tech: "C",
    img: "https://i.ytimg.com/vi/R-OkYyzp-DI/maxresdefault.jpg",
  },
  {
    name: "Epytodo",
    description: "Make an little API",
    tech: "node.js",
    img: "https://itsocial.fr/wp-content/uploads/2022/12/API.jpg",
  },
  {
    name: "Minishell",
    description: "Make a minishell",
    tech: "C",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*EJuyE4TrpBgyiK9f3ZLaIg@2x.png",
  },
  {
    name: "Portfolio",
    description: "Make an online portfolio",
    tech: "React.js",
    img: "https://www.copytop.com/upload/media/gallery/0001/01/thumb_443_gallery_bigPreConf.jpeg"
  },
];

function Profile() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage:
          "url('https://r4.wallpaperflare.com/wallpaper/550/507/709/typography-simple-background-numbers-blue-wallpaper-97095a2b266a95c55cfd883008b7c9c3.jpg')",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <img
          src={user.ImageURL}
          alt="Profile"
          className="avatar"
          style={{
            width: 150,
            height: 150,
            position: "relative",
            bottom: "40px",
            right: "30px",
          }}
        />
        <h1
          className="police"
          style={{ position: "relative", bottom: "27px", color: "White" }}
        >
          Charles Nguyen
        </h1>
      </div>
      <h2
        className="police"
        style={{
          position: "relative",
          bottom: "77px",
          left: "120px",
          color: "#0073FF",
        }}
      >
        2nd Year Epitech Student ⚡
      </h2>
    </div>
  );
}

function Projects() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://img2.wallspic.com/previews/7/4/8/0/80847/80847-blue-line-atmosphere-angle-light-x750.jpg')",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <p
        className="police_project"
        style={{ color: "white", textAlign: "center", fontSize: "4.2em" }}
      >
        Mes projets
      </p>
      <div
        className="police_project"
        style={{ color: "white", textAlign: "center", fontSize: "1.5em" }}
      >
        {projects.map((project) => (
          <div
            className="project-box"
            onClick={() =>
              window.location.href = `/public/${project.name.toLowerCase()}.html`
            }
          >
            <h3>{project.name}</h3>
            <img src={project.img} width="100px" height="100px" />
            <p>{project.description}</p>
            <a>Tech</a> : {project.tech}
          </div>
        ))}
      </div>
    </div>
  );
}

function Compétences() {
  return (
    <div className="police_project">
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "4.5em",
          position: "relative",
          bottom: "500px",
        }}
      >
        {" "}
        Compétences{" "}
      </p>
      <div
        style={{ position: "relative", bottom: "500px", textAlign: "center" }}
      >
        {langages.map((name) => (
          <span className="project-box"> {name} </span>
        ))}
      </div>
    </div>
  );
}

function Home_page() {
  return (
    <div>
      <Profile />
      <Projects />
      <Compétences />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Home_page />
    </div>
  );
}

// Etapes :
//OK 1) Comprendre comment le tableau à double fonctionne (tableaux)
//OK 2) Comprendre les événements
//En train 3) Réoraniser les fichiers, et les reliers, pour que permettre le faux saut de site... et mettre le fichier, du home (tout que j'ai fais juq'uà présent dans une page nommée "HOME". Comme ça il me suffira qu'à afficher le reste pour pouvoir donner un semblant de changement.. (comment on peut stoquer mes fonctions sur plusieurs fichiers et rendre ma construction à peu près dynamique.)
// 3) Insérer les événements dans les tableaux pour mettre des sortes de liens.
// 4) Crée la page pour l'affichage
// 5) Ajouter des photos sur mes boutons
// Installer les choses sur mon vscode

/* <br /> Sauter ligne */
// space : {"\u00A0"}
