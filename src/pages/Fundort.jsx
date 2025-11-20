import React from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Angebot.css";
import "../layouts/Fundort.css";

export default function Fundort() {
  const produkte = [
    {
      name: "Fleischerei BOSHOF",
      bild: "/Bilder/boshof.JPG",
      beschreibung:
        "Grabenstraße 45 52249 Eschweiler Tel.: 02403 22835 ",
      webseite: "https://fleischerei-boshof.de/",
    },
    {
      name: "Bäckerei Stolz",
      bild: "/Bilder/stolz.jpg",
      beschreibung:
        "Birkesdorfer Straße 25 52353 Düren Tel.: 02421 81441 ",
      webseite: "https://www.bäckereistolz.de/",
    },
    {
      name: "Ristorante l`Angelo da Massimo",
      bild: "/Bilder/pizzeria.jpg",
      beschreibung:
        "Schillingstraße 98 52355 Düren Gürzenich Tel.: 02421 961131 ",
      webseite: "https://www.ristoranteangelo.de/",
    },
    
  ];

  return (
    <HauptLayout>
      <div className="angebot-container">
        <h1>Wo gibt es unseren Honig?</h1>
        <p className="angebot-einleitung">
          Ihr wollt wissen, wo ihr unseren leckeren Honig kaufen könnt? Hier sind einige unserer Verkaufsstellen:
        </p>

        <div className="angebot-grid">
          {produkte.map((produkt, index) => (
             <a href={produkt.webseite} target="_blank" rel="noopener noreferrer">
            <div className="produkt-kachel" key={index}>
              <img
                src={produkt.bild}
                alt={produkt.name}
                className="produkt-bild"
              />
              <h3>{produkt.name}</h3>
              <p>{produkt.beschreibung}</p>
             
            </div>
            </a>
          ))}
        </div>

        
      </div>
    </HauptLayout>
  );
}
