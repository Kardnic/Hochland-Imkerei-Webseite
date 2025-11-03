import React from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/UeberUns.css";

export default function UeberUns() {
  return (
    <HauptLayout>
      <div className="ueber-container">
        <h1>Über uns</h1>

        <p className="einleitung">
          Die <strong>Hochland Imkerei Heistern</strong> steht für natürliche
          Bienenhaltung, handwerklich erzeugten Honig und den respektvollen
          Umgang mit der Natur. Unser Ziel ist es, mit jeder Biene ein Stück zur
          Erhaltung unserer Umwelt beizutragen.
        </p>

        <section className="ueber-block">
          <h2>Unsere Geschichte</h2>
          <p>
            Was einst mit einem kleinen Bienenvolk begann, hat sich über die
            Jahre zu einer leidenschaftlichen Imkerei entwickelt. Angefangen in
            Heistern, einem idyllischen Ort am Rande der Eifel, haben wir die
            Faszination für Bienen und ihre Organisation schnell für uns entdeckt.
          </p>
          <p>
            Heute betreuen wir mehrere Völker an verschiedenen Standorten und
            legen größten Wert auf eine naturnahe und schonende Arbeitsweise.
          </p>
        </section>

        <section className="ueber-block">
          <h2>Unsere Philosophie</h2>
          <p>
            Im Mittelpunkt steht bei uns das Wohl der Bienen. Wir verstehen uns
            nicht als Honigproduzenten, sondern als <em>Gäste im Bienenstock</em>.
            Nur wenn das Volk gesund und stark ist, kann es uns ein Stück seiner
            Arbeit schenken – den Honig.
          </p>
          <p>
            Deshalb achten wir darauf, den Bienen stets genug eigene Vorräte zu
            lassen und nur den Überschuss zu entnehmen.
          </p>
        </section>

        <section className="ueber-block">
          <h2>Unsere Arbeitsweise</h2>
          <p>
            Unsere Bienenstände liegen in wald- und wiesenreichen Gebieten rund
            um Heistern. Dort finden die Bienen eine große Vielfalt an Blüten
            und Nektarquellen – von Frühjahrsblühern bis zur Sommertracht.
          </p>
          <p>
            Wir verzichten bewusst auf den Einsatz chemischer Mittel und setzen
            stattdessen auf bewährte, biologische Verfahren zur Gesunderhaltung
            der Völker.
          </p>
        </section>

        <section className="ueber-block">
          <h2>Nachhaltigkeit & Verantwortung</h2>
          <p>
            Bienenhaltung ist für uns mehr als ein Handwerk – sie ist ein Beitrag
            zum Schutz unserer Umwelt. Jede Blüte, die durch unsere Bienen
            bestäubt wird, stärkt die Artenvielfalt und sichert das ökologische
            Gleichgewicht.
          </p>
          <p>
            Wir legen großen Wert auf regionale Vermarktung, kurze Wege und
            hochwertige, naturbelassene Produkte.
          </p>
        </section>

        <section className="ueber-block">
          <h2>Mit Herz und Leidenschaft</h2>
          <p>
            Die Imkerei ist für uns nicht nur Arbeit, sondern Leidenschaft.
            Es ist ein stilles, harmonisches Zusammenspiel zwischen Mensch und
            Tier – und jedes Glas Honig erzählt ein Stück dieser Geschichte.
          </p>
          <p>
            Wenn du mehr über unsere Arbeit erfahren oder uns besuchen möchtest,
            freuen wir uns auf deine Nachricht oder einen Besuch an unserem
            Bienenstand.
          </p>
        </section>

        <p className="gruss">
          🐝 Mit herzlichen Grüßen,<br />
          <strong>Deine Hochland Imkerei Heistern</strong>
        </p>
      </div>
    </HauptLayout>
  );
}
