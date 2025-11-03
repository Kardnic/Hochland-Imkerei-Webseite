import React from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/WissenBienen.css"; // <-- NEUE CSS-Datei

export default function WissenBienen() {
  return (
    <HauptLayout>
      <div className="wissen-container">
        <h1>Wissenswertes über Bienen</h1>
        <p className="einleitung">
          Die Honigbiene ist eines der faszinierendsten und zugleich wichtigsten
          Lebewesen unserer Erde. Ohne sie gäbe es viele unserer Früchte,
          Gemüse- und Pflanzenarten nicht. Hier sind 20 spannende Fakten rund um
          Haltung, Verhalten und Lebensweise der Bienen.
        </p>

        {/* Abschnitt 1 */}
        <section className="wissen-block">
          <div className="block-header">
          
            <h2>Allgemeines Verhalten</h2>
          </div>
          <ol>
            <li>Eine Königin legt bis zu 2.000 Eier pro Tag – mehr als ihr eigenes Körpergewicht.</li>
            <li>Arbeiterinnen wechseln im Laufe ihres Lebens die Aufgaben: von Brutpflege bis Sammeln.</li>
            <li>Drohnen dienen ausschließlich der Begattung – danach sterben sie.</li>
            <li>Bienen kommunizieren über den „Schwänzeltanz“.</li>
            <li>Eine Arbeiterin besucht täglich bis zu 2.000 Blüten.</li>
          </ol>
        </section>

        {/* Abschnitt 2 */}
        <section className="wissen-block">
          <div className="block-header">
            
            <h2>Jahreszeitliches Verhalten</h2>
          </div>
          <ol start="6">
            <li>Im Frühling wächst das Volk stark an und sammelt Nektar von Frühblühern.</li>
            <li>Im Sommer erreicht das Volk bis zu 50.000 Bienen.</li>
            <li>Bei Hitze erzeugen sie durch Flügelfächeln Kühlung.</li>
            <li>Im Herbst entstehen langlebige Winterbienen.</li>
            <li>Im Winter bildet das Volk eine wärmende Traube im Stock.</li>
          </ol>
        </section>

        {/* Abschnitt 3 */}
        <section className="wissen-block">
          <div className="block-header">
            
            <h2>Honig & Nahrung</h2>
          </div>
          <ol start="11">
            <li>Bienen verwandeln Nektar durch Enzyme und Wasserentzug in Honig.</li>
            <li>Für 1 kg Honig müssen 3–5 Millionen Blüten angeflogen werden.</li>
            <li>Pollen ist die wichtigste Eiweißquelle der Bienen.</li>
            <li>Honig dient als Energievorrat für den Winter.</li>
          </ol>
        </section>

        {/* Abschnitt 4 */}
        <section className="wissen-block">
          <div className="block-header">
            
            <h2>Bienenhaltung & Imkerei</h2>
          </div>
          <ol start="15">
            <li>Ein Bienenstand sollte sonnig, windgeschützt und bienenfreundlich gelegen sein.</li>
            <li>Der Imker überwacht Brut, Honigraum und Gesundheit der Bienen regelmäßig.</li>
            <li>Die Varroamilbe ist der größte Feind der Honigbiene.</li>
            <li>Nach der Honigernte wird eingefüttert, um Vorräte für den Winter zu sichern.</li>
            <li>Bienenhaltung unterstützt die Bestäubung vieler Pflanzen und schützt die Umwelt.</li>
            <li>Gesunde Bienen sind ein Zeichen für eine intakte Natur.</li>
          </ol>
        </section>
      </div>
    </HauptLayout>
  );
}
