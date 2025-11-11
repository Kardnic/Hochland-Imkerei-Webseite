import React from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/WissenHonig.css";

export default function WissenWachs() {
  return (
    <HauptLayout>
      <div className="wissen-container">
        <h1>Wachskreislauf/ Wachsverarbeitung</h1>
        <section>
            <p>
            Von Anfang an haben wir uns entschlossen, unser eigenes Bienenwachs wieder unseren Bienenvölkern zurückzugeben, da es uns wichtig war, unverfälschtes Bienenwachs zu haben. 
            </p>
            <p>
            Alte und schlecht ausgebaute Waben werden in einem Kessel, indem Wasserdampf erzeugt wird, eingeschmolzen.
            </p>
            <p>
            Das dadurch gewonnene Wachs wird anschließend noch einmal auf 130 Grad Celsius für ca. 30 Minuten erhitzt, bevor es sich dann bei ca. 80 Grad Celsius über 6 Stunden langsam abkühlen kann.   
            </p>
            <p>
            Bis dahin hat der im Wachs verbliebene Schmutz Zeit, sich auf dem Boden abzusetzen.  
            </p>
            <p>
            Über einen Hahn, der sich ca. 5cm oberhalb des Bodens befindet, wird dann das Wachs in kleine viereckige Silikonformen gefüllt, die nach der Abkühlung einen kleinen Wachsballen von ca. 1kg ergeben.
            </p>
            <img src="/public/Bilder/Wachs1.jpg" alt="Wachsblöcke" />
        </section>
        
      </div>
    </HauptLayout>
  );
}
