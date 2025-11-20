import React from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Angebot.css";

export default function Fundort() {
  const produkte = [
    {
      name: "Frühtracht Honig im 500g Glas",
      bild: "/Bilder/Honigsorten/fruehtracht.jpg",
      beschreibung:
        "Ein milder, cremiger Honig mit feiner Süße – geerntet im Frühjahr aus Obstblüten und Raps.",
    },
    {
      name: "Sommertracht Honig im 500g Glas",
      bild: "/Bilder/Honigsorten/sommertracht.jpg",
      beschreibung:
        "Aromatischer Blütenhonig mit leicht würziger Note – die Vielfalt des Sommers im Glas.",
    },
    {
      name: "Heidehonig im 250g Glas",
      bild: "/Bilder/Honigsorten/waldhonig.jpg",
      beschreibung:
        "Den Heidehonig tragen die Bienen aus der Blüte der Heide „Calluna vulgaris“ ein. Die Farbe (nicht kristallisiert) ist rötlich-braun. Charakteristisch ist seine geleeartige Beschaffenheit.",
    },
    {
      name: "Cremiger Honig im 500g Glas",
      bild: "/Bilder/Honigsorten/cremehonig.jpg",
      beschreibung:
        "Schonend gerührter Honig mit zart-cremiger Konsistenz – ideal zum Streichen.",
    },
  ];

  return (
    <HauptLayout>
      <div className="angebot-container">
        <h1>Unser Angebot 🍯</h1>
        <p className="angebot-einleitung">
          Unsere Honige stammen aus naturnaher Bienenhaltung rund um Heistern.
          Jeder Honig ist ein reines Naturprodukt – ohne Zusätze, schonend geerntet
          und mit viel Liebe abgefüllt.
        </p>

        <div className="angebot-grid">
          {produkte.map((produkt, index) => (
            <div className="produkt-kachel" key={index}>
              <img
                src={produkt.bild}
                alt={produkt.name}
                className="produkt-bild"
              />
              <h3>{produkt.name}</h3>
              <p>{produkt.beschreibung}</p>
            </div>
          ))}
        </div>

        
      </div>
    </HauptLayout>
  );
}
