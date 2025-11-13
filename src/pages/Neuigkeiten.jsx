import React, { useState } from "react";
import HauptLayout from "../layouts/HauptLayout";

export default function Neuigkeiten() {
  const [fullscreenSrc, setFullscreenSrc] = useState(null);
  return (
    <HauptLayout>
      
      <h1>Neuigkeiten</h1>
      
      <h2>Honigprämierung 2025</h2>
      <p className="gallery-item">
      <img src="/Bilder/Honigprämierung2025.jpg" alt="Urkunde Honigprämierung 2025"  onClick={() => setFullscreenSrc("/Bilder/Honigprämierung2025.jpg")}/>
      </p>
      <p>
        <p>Wir haben mit dem Frühtrachthonig an einer Honigprämierung teilgenommen.</p>
        <p>Eine Honigprämierung ist eine jährliche Verleihung von Auszeichnungen für Honig, bei der Honigproben von Imkern nach festgelegten Qualitätskriterien bewertet werden.</p>
        <p>Kriterien wie Sauberkeit, Geschmack, Geruch, Wassergehalt und Invertaseaktivität werden auf einer Skala von 0 bis 5 bewertet.</p>
        <p>Mit den Werten von 17,1% Wassergehalt, der elektrischen Leitfähigkeit von 0,20, dem Invertasewert von 169,1 U/kg und einem HMF von 1,9 g/kg wurde unser Frühtrachthonig am 09.11.2025 mit der <strong><u>Leistungsmedaille in Silber </u></strong>ausgezeichnet.</p>
      </p>
      <h2>Wir sind Dabei!</h2>
      <p>
        Wir freuen uns, euch mitteilen zu können, dass wir am diesjährigen Weihnachtsmarkt in Heistern teilnehmen werden! Besucht uns an unserem Stand, um unsere köstlichen Honigprodukte zu entdecken und mehr über die faszinierende Welt der Imkerei zu erfahren.
      </p>
      <p>
      <img src="/Bilder/Weihnachtsmarkt.jpeg" alt="Weihnachtsmarkt Heistern" onClick={() => setFullscreenSrc("/Bilder/Weihnachtsmarkt.jpeg")}/>
      </p>
      {fullscreenSrc && (
          <div className="fullscreen-overlay" onClick={() => setFullscreenSrc(null)}>
            <span className="close-button">&times;</span>
            <img src={fullscreenSrc} alt="Vollbild" className="fullscreen-image" />
          </div>
        )}
    </HauptLayout>
  );
}
