import React from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Angebot.css";

export default function Angebot() {
  const produkte = [
    { name: "Frühtrachthonig im 500g Glas", bild: "/Bilder/Frühtrachthonig 500g cremig.jpg", beschreibung: "Frühtrachthonig schmeckt meist mild, süß und blumig-frisch. Je nach Zusammensetzung – etwa aus Obstblüten, Raps oder Löwenzahn – kann er leicht fruchtig oder würzig sein. Oft ist er hell und cremig, besonders wenn viel Rapsnektar enthalten ist." },
    { name: "Spättrachthonig im 500g Glas", bild: "/Bilder/Spättracht Honig flüssig.jpg", beschreibung: "Spättrachthonig schmeckt meist kräftiger und würziger als Frühtrachthonig, oft mit malzigen, karamelligen oder leicht herben Noten. Je nach Blüten und Pflanzen der Region kann er aber auch mild und blumig sein. Farbe und Konsistenz variieren ebenfalls – häufig ist er dunkler und bleibt länger flüssig." },
    { name: "Heidehonig im 250g Glas", bild: "/Bilder/Heidehonig 250g.jpg", beschreibung: "Heidehonig schmeckt kräftig, würzig und leicht herb, oft mit malzigen oder karamelligen Noten. Er hat einen lang anhaltenden, aromatischen Nachgeschmack. Typisch ist auch seine dicke, fast geleeartige Konsistenz." }
  ];
  return <HauptLayout><div className="angebot-container"><h1>Unser Angebot 🍯</h1><p className="angebot-einleitung">Unsere Honige stammen aus naturnaher Bienenhaltung rund um Heistern. Jeder Honig ist ein reines Naturprodukt – ohne Zusätze, schonend geerntet und mit viel Liebe abgefüllt.</p><div className="angebot-grid">{produkte.map(produkt => <div className="produkt-kachel" key={produkt.name}><img src={produkt.bild} alt={produkt.name} className="produkt-bild" /><h3>{produkt.name}</h3><p>{produkt.beschreibung}</p></div>)}</div></div></HauptLayout>;
}
