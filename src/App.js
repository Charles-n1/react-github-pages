import "../styles/styles.css";
import calculerPrix from "./utils.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const user = {
  name: "Charles NGUYEN",
  Age: 10,
  ImageURL:
    "https://media.licdn.com/dms/image/v2/D4E03AQHV2GkwE4fN4A/profile-displayphoto-shrink_800_800/B4EZQiDWHUGYAc-/0/1735738090521?e=1760572800&v=beta&t=KKCxXD2r7Dw3vUhlayBjOaMNFFMuQm562cdaX4cs9QA",
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
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDg0NDw4NDQ4NDQ0ODQ0ODQ8NDQ0NFREWFhURExMYHSggGBolGxUTITEhMTUtLy4wFx8zRD8sNygtMy8BCgoKDg0OFQ8PFTceFRovKys4LTcrLS03Kzg3LTArNzcrNy0yKysrKzA3NysrLi0vNy0rKys4OC03Ky0rKys4N//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQIFBgMEBwj/xABJEAACAQMBAwULCQUFCQAAAAAAAQIDBBEFBxIhBhMxcbEiMkFRYXJzdJGysxQjJCUzNUKhwVJjgYKiQ0RiZKMVNEZ1hMLD0fD/xAAZAQEBAQADAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEAAgIBBAMBAAAAAAAAAAAAARECAzESE0FRBXGBBP/aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMZqup1aG9uW8rjdi5bsa1KnJ4WWkptZMmYzUKabqt57mlJrxd6yxXlJa3a8ubyvGM6WiXkoyScXK6s6eU+jg5l6vK/VY/8P3T6r+yb9ikcHJ2f0W39FDsRnqExTTRtT2y/JK07evpdWjWp7u/TndQzHMVJZcYNdDR0Z7dI/h0+n/Ne1F2UGaBtd+/L3yq2f+hA0/IpHt0duMn/AHG2j131w+y2LrbXJ9FtZR8sru8a/K2PD94spAe3rbJVb+z0xL1m9f8A4Ec1PazXl0f7Ij59zcx7aaPDFIsplqB71HaZWf8Ab6HH/q5yXajljtCuH/feTiX+K7kn754Epl1MUPpjQeWtrNT+V6jou9vLm/k17Sxu4/EpTbzkz0NdsJd7eWkuq5pP9T5MVQspryCh9bx1O1fRcUH1VoP9Tkjd0X0Vab6pxf6nyOpLxL2HJFx8S9iJQ+uk8kmrbMH9Taf6KSXkSnLCNpIAAAAAAAAAAAAAAAAB0L5fbehl7rO+dK/6KvoZ+6xCS0rk/LFtQX7uPYZ2jUNc0Of0ej6OPYZilUNNPCdrkvru88y2+DA07Jtm1iWdZun+7tvhRNQyEcmSd448k5IORSJ3jiyTko5lIspHAmWUgOdTLKZ11IspAdlTOSMzqKReMgPqPZd9y6d6F+/I2k1XZb9x6Z6un/UzajIAAAAAAAAAAAAAAAAHR1F8KnoZ9jO8YzVvxehl2SLCS0TRp/R6XmR7DJ06hhNHn8xS8yPYZGEw08V2qPOsXPmW/wAKJqWTZ9p0s6tc+Zb/AAomrZCL5GSuScgWyTkpkkC2SclMk5AumSpFMk5A5EyyZxZLJlH1XstX1HpfqsO1m1Gr7MF9R6V6nTNoMgAAAAAAAAAAAAAAAAYXlBcwpKcpyUYxoTbk+hJKXFmaNI2lXUYUK9N/jsa2PZIuMXKS0DT+VWnwpU1K7oJqKyt/LXDxI55cuNLiv96jLzadWXZE8bsbSpW4U47zik3xSxnrO7W0G6hHelBRW7vcZrjHx8Dmw0bMo6scZmPpjLdhjNTlESvy11Gld39a4oycqc40t2TjKLeIJPg+PSjBlqvT/AocLkSSQALJggICxJUkCxOShIFiUVJA+s9ma+pNK9So+6bMa3s2+5NK9Rt/cRshAAAAAAAAAAAAAAAAAPMNsc3Hcx4bWsu09PPLNtXDmX/l6/ajWHKZcPFOSL7qr5lPtZtfKK7pSpU0qkG42qi1vLMZYfc9njNS5Kc3vVVPS6mrvm47tKnVuqXNPPGb5ni89GGel3fJmyVCrCOjQm6llcVaKo0r23nBxdPcc7i7lHE1xbjHewoyT3t5HoafkO1qjX03V+ff46W3+LubJz6ua8eni1TwdRUtU8HmrtZU853gkgASSQAJySQSgJJIAEkkEgfW2zf7l0n1C39xGyGubOfuXSfULb4aNjIAAAAAAAAAAAAAAAABqnLywp16TjV3XDmKsd2co04qb6Jc403B9XTnxJm1mqbQVJW06sHUjUo29zOnKLxFS3U+64PjwTS/w+248pLwPZZcRo17mtKrOjGjbRqNu6nZ2raqxSdzUh3Tgm1iC4zk0ujJs2qcrKEZRrRr85aVeepXtbT7i7lVnd1IcIVKdz3dKg1Gq4xg/A+PA0rkLTo1ZXNC4qWlO1q0Ic/8pvHYtuNSLhKjU3JfOJ8d1pprJmuXekWtnZxp2c7bmYXlFXEadetdXNWtOhUlSnVqypwioqG/iMVju28hXntRd75v6lDlrLvep9pxgAABIBIAkEpAC2ASiCCScE4CvrXZ39y6T/y+1+GjYjAcgFjR9LX+Qtfhoz4QAAAAAAAAAAAAAAAANS2jOCtKkpKTfMXMYtd6nKKWJY/LypG2mqbQ54tZR3nHeo3Cwuifcrg//vGWOUl84ci7ZTnc1Faxv69va87bWU4SqQrVOchFylTjxqKEZSlueHHiTMlyod5OxhVvbSjYVZ3lP5PTp2ysJ3FJUqqq1J26wmovmUptJ93JZfg4dncJ89dSpWkb66p2jnZ0ZUK1dKuq1Nb3zeHHEXPuspeXiZLlz/tmpQhV1DTbSypyuKaValQpU7idVU6m7Cc+clUcd3feHw4IK0G4/D1PtOE7F2u86pdpwAQSCUiASCSgiyCJIBKCLJBRItglIskB9a8hljSdM9QtfhRM4YbkWsaXpvqNr8KJmQgAAAAAAAAAAAAAAAAadtK+wpLx872I3E07aT9hS66nYixyPAeREJqvcTpUnc16VtUnb2nduNzVVSCalCLTqqMXOfN/i3PIZPlHSvKlrz+pW1K2uZV6cbL6JSsbqrR3anPRlSjGLdKL5rEpLOWsN5ZrdtDdk2nhqbaaeGmnwafjMlKvc14czmrXip86+5dWe/u4y5Yb6BY1rUYYcOqX6HUMlrMcSimmmt5NNYaeehmOAJEgkASCSASAgqUXSKosiiyLoqi66GQfW/I9fVmm+o2nwomXMTyT+7dO9RtfhRMsEAAAAAAAAAAAAAAAADUdpEM20Oup7ptxjtbtIV6TpTWYyT4+GLx0rylgfNejxW7WbuXbbs3wilvz+bqy4S3k+mEY/wA6/j2p/JZPNa5uK8HThVp03J70W9/NGXfLf4U+PBd17NuobN6TbcrmrxlLhGEYvGfG8nepbPrCL7rn6nnVcL+lIlq8W16UXNOMdyPdYjly3Vngs+ExZvW1bSKFlXtIUYc3GdGo5LMpZkpJZy2aMVAkAgEgASSQSFSi6KIuiiyLrofUURbwPqYH13yWWNPsPUrX4UTKGN5NL6BY+p23womSIgAAAAAAAAAAAAAAAAda+6F1vsOydPUniMfO/QDAU49PW+0hx4lqfh62SyK8b25RxcWHoa/vxPMj1Dbovn9P9Dce9A8vKgAAJCAAkkhEoqpRdFUWQFkWfQ+plUdi2tqlaSpUoTq1Z8I06cXOcm/EkB9c8nliysvVbf4cTIHU0mi6dtb05cJU6FKEl5VBJnbIgAAAAAAAAAAAAAAAAdHVu8j5/wCjO8dPU0t2Of2v+1gYKku1lmiKbx7WJSIrx7br9tp/orn3qZ5ceobc5Zraf6O596meXlQAAEhE04OUlCKcpS4KMU5Sb8iXFm16Ls41u93XTsqlKD/tLlq3il1PuvyA1REns+ibCJvEr2+S8dK1hn/Un0+xG/aLsw0Ozw42cK81h85ct3DyvClLgv4Io+bNJ0W8vXu2trXuOOM0qcpQT8s+9XtN70XYxq9xiVeVCyg8Nqcufqr+SPD+o+h6VKEEowjGEVwSikkkXIPM9F2LaXQxK4qV72aw2pS5mlnzYYeOts3vSdCsrKO5bW1C3X7unGLfW10mRAAAAAAAAAAAAAAAAAAAADH61PdhTf72PYzIHBe2yrU3B8PDF/syXQwNbUuk4KlXBV2OoSlKEbbdUZNc5UqwjTl5Y7uXj+CO5Q5MVpfbXCiv2aEEn1OUs59iCvEdtNdSubJfs0Kr9s1/6NU0jknql9j5NY3NVPonzbp03/PPEfzPqe15K6fTmq3yeFWtFYjWrLnqsV04UpZwvIjMxilwSSXk4BHzrpGxDVq2HcVbazi10ZdxUXXGOF+ZvWj7D9Ko4dzUuLyXhi58zT9kMP8AM9RAGL0fk5p9it21tLeh43TpRjKXlculmUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==",
  },
];

function Corewar() {
  return (
    <div>
      <h2>Corewar</h2>
      <p>This is the about page.</p>
    </div>
  );
}

function Minishell() {
  return (
    <div>
      <h2>Minishell</h2>
      <p>This is the about page.</p>
    </div>
  );
}

function Epytodo() {
  return (
    <div>
      <h2>Epytodo</h2>
      <p>This is the about page.</p>
    </div>
  );
}

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
              (window.location.href = `/${project.name.toLowerCase()}.html`)
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
  const [page, setPage] = useState("home_page");

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