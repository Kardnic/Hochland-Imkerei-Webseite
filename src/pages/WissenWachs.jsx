import React, { useState } from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/WissenHonig.css";

export default function WissenWachs() {
    const [fullscreenSrc, setFullscreenSrc] = useState(null);
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
            <p>
            <img src="/Bilder/Wachs1.jpg" alt="Wachs Block" onClick={() => setFullscreenSrc("/Bilder/Wachs1.jpg")}/>
            </p>
            
        </section>
        <section>
            <p>So bearbeitetes Bienenwachs kann nun zur Herstellung von neuen Mittelwänden (Wachsplatten mit vorgegebener Wabenprägung) verwendet werden.
            </p>
            <p>
            Diese Wachsblöcke werden nun wieder eingeschmolzen, so dass das flüssige Wachs in eine Mittelwandpresse eingefüllt werden kann.
            </p>
            <p>
            <img src="/Bilder/Wachs2.jpg" alt="Wachs flüssig"  onClick={() => setFullscreenSrc("/Bilder/Wachs2.jpg")}/>
            </p>
            <p>
            <img src="/Bilder/Wachs3.jpg" alt="Wachs Form" onClick={() => setFullscreenSrc("/Bilder/Wachs3.jpg")}/>
            </p>
            <p>
            <img src="/Bilder/Wachs4.jpg" alt="Wachs Rohform" onClick={() => setFullscreenSrc("/Bilder/Wachs4.jpg")}/>
            </p>
            
            
            
        </section>
        <section>
            <p>
            Die Mittelwandpresse wird nun für ca. einer Minute geschlossen, damit das Wachs soweit erkaltet, dass die Gießform wieder geöffnet werden kann.
            </p>
            <p>
            <img src="/Bilder/Wachs5.jpg" alt="Wachs in Presse" onClick={() => setFullscreenSrc("/Bilder/Wachs5.jpg")}/>
            </p>
            
            <p>
            Nun wird die Wachsplatte herausgenommen und mittels einer Schablone in das benötigte Maß geschnitten.   
            </p>
            <p>
            <img src="/Bilder/Wachs6.jpg" alt="Wachs geschnitten" onClick={() => setFullscreenSrc("/Bilder/Wachs6.jpg")}/>
            </p>
            
            <p>
            So entstehen Stück für Stück neue Mittelwände, aus dem Wachs unserer eigenen Bienen.   
            </p>
            <p>
            <img src="/Bilder/Wachs7.jpg" alt="Wachs Mittelwände" onClick={() => setFullscreenSrc("/Bilder/Wachs7.jpg")}/>
            </p>
            
        </section>
      </div>
      {fullscreenSrc && (
          <div className="fullscreen-overlay" onClick={() => setFullscreenSrc(null)}>
            <span className="close-button">&times;</span>
            <img src={fullscreenSrc} alt="Vollbild" className="fullscreen-image" />
          </div>
        )}
    </HauptLayout>
  );
}
