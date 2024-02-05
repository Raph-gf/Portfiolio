import FirstSection from "./components/FirstSection";
import DownSection from "./components/DownSection";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Projets from "./components/Projets";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";
function App() {
  const ProjetsList = [
    {
      imageUrL: "https://i.imgur.com/ik2MfjF.jpg",
      name: "AIRBNB CLONE",
      languages: ["TAILWIND", "TYPESCRIPT", "REACT", "MONGODB"],
    },
    {
      imageUrL: "https://i.imgur.com/3yNJlm4.png",
      name: "PORTFOLIO",
      languages: ["TYPESCRIPT", "REACT"],
    },
    {
      imageUrL: "https://i.imgur.com/Mcw9dld.png",
      name: "POMODORO APP",
      languages: ["TAILWIND", "TYPESCRIPT", "REACT"],
    },
    {
      imageUrL: "https://i.imgur.com/hAIVk0B.png",
      name: "EDITEUR MARKDOWN",
      languages: ["SCSS", "TYPESCRIPT", "REACT"],
    },
    {
      imageUrL: "https://i.imgur.com/t8Q7eSY.png",
      name: "REST COUNTRIES API",
      languages: ["CSS", "TYPESCRIPT", "VUE"],
    },
    {
      imageUrL: "https://i.imgur.com/hyoS7fZ.png",
      name: "APPLICATION DE CALCULATRICE",
      languages: ["SCSS", "TYPESCRIPT", "VUE"],
    },
    {
      imageUrL: "https://i.imgur.com/5tw58tT.png",
      name: "DRUM MACHINE",
      languages: ["STYLE-COMPONENTS", "TYPESCRIPT", "REACT"],
    },
    {
      imageUrL: "https://i.imgur.com/CN0CfWn.png",
      name: "SITE DE TOURISME DANS L'ESPACE",
      languages: ["HTML", "CSS", "TYPESCRIPT"],
    },
    {
      imageUrL: "https://i.imgur.com/WjHGcmh.png",
      name: "RANDOM QUOTES APP",
      languages: ["CSS", "TYPESCRIPT", "REACT"],
    },
  ];

  const [projets, setProjets] = useState(ProjetsList);

  function filterProjets() {
    setProjets(
      ProjetsList.filter((item) => {
        return item.languages.includes("CSS", "REACT", "TYPESCRIPT");
      })
    );
  }
  function refreshProjets() {
    setProjets(ProjetsList);
  }

  return (
    <>
      <div className="container">
        <Header />
        <FirstSection />
        <Languages />
        <div className="projets-title">
          <h1 className="Projets">Projets</h1>
          <button className="contacter-moi">Contacter moi</button>
        </div>
        <div className="filter-projet">
          <button onClick={refreshProjets} className="refreshed">
            refresh
          </button>
          <button onClick={filterProjets} className="filter">
            Css React Typscript
          </button>
        </div>
        <div className="grid_wrapper">
          {projets.map((projet, index) => {
            console.log(projet);
            return (
              <Projets
                key={index}
                imageUrl={projet.imageUrL}
                name={projet.name}
                languages={projet.languages}
              />
            );
          })}
        </div>
        <DownSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
