import React from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Angebot.css";
import "../layouts/Fundort.css";

export default function Fundort() {
  const stellen = [
    { name: "Fleischerei BOSHOF", bild: "/Bilder/boshof.JPG", beschreibung: "Grabenstraße 45, 52249 Eschweiler · Tel.: 02403 22835", webseite: "https://fleischerei-boshof.de/" },
    { name: "Landbox Heistern", bild: null, beschreibung: "Unser Honig ist auch in der Landbox Heistern erhältlich.", webseite: null }
  ];
  return <HauptLayout><div className="angebot-container"><h1>Wo gibt es unseren Honig?</h1><p className="angebot-einleitung">Hier findet ihr unsere Verkaufsstellen:</p><div className="angebot-grid">{stellen.map(stelle => <div className="produkt-kachel" key={stelle.name}>{stelle.bild && <img src={stelle.bild} alt={stelle.name} className="produkt-bild" />}<h3>{stelle.name}</h3><p>{stelle.beschreibung}</p>{stelle.webseite && <a href={stelle.webseite} target="_blank" rel="noopener noreferrer">Zur Webseite</a>}</div>)}</div></div></HauptLayout>;
}
