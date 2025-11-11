import React, { useState } from "react";
import HauptLayout from "../layouts/HauptLayout";

export default function Home() {
  const [fullscreenSrc, setFullscreenSrc] = useState(null);
  return (
    <HauptLayout>
      
      <h1>Willkommen bei der Hochland Imkerei Heistern</h1>
      <p>
        Es war still im Garten – zu still. Was fehlte, war das vertraute Summen
        von Bienen, das irgendwie zu einem richtigen Garten dazugehört. Eines
        Tages beschlossen wir, etwas dagegen zu tun. Das war im Jahr 2015.
      </p>

      <p>
        Inzwischen betreiben wir eine kleine Hobby-Imkerei. Die Völker stehen
        bei uns im Garten, in Eschweiler-Nothberg und in einem Wald in
        Düren/Gürzenich. Dort sammeln die Bienen für besten Honig. In den
        umliegenden Gärten tun sie darüber viel Gutes für die Obstträge.
      </p>

      <h2>Regional, Einzigartig, Umweltfreundlich</h2>
      <p>
        Dieser einzigartige Naturgenuss steht zugleich für reiche Ernten,
        Artenvielfalt und Umweltschutz in unserer Region.
      </p>

      <h3>Unterstützen Sie deshalb auch unser Mehrwegsystem!</h3>
      <p>
        Dazu einfach das leere Imker-Honigglas in lauwarmes Wasser legen,
        Etikett ablösen, spülen, abtrocknen und bei uns wieder abgeben.
      </p>
      <p>
      <img src="/Bilder/Honigprämierung2025.jpg" alt="Urkunde Honigprämierung 2025" height="50vh" onClick={() => setFullscreenSrc("/Bilder/Honigprämierung2025.jpg")}/>
      </p>
      <p>
      Wir haben mit dem Frühtrachthonig an einer Honigprämierung teilgenommen.
      Eine Honigprämierung ist eine jährliche Verleihung von Auszeichnungen für Honig, bei der Honigproben von Imkern nach festgelegten Qualitätskriterien bewertet werden.
      Kriterien wie Sauberkeit, Geschmack, Geruch, Wassergehalt und Invertaseaktivität werden auf einer Skala von 0 bis 5 bewertet. 
      Mit den Werten von 17,1% Wassergehalt, der elektrischen Leitfähigkeit von 0,20, dem Invertasewert von 169,1 U/kg und einem HMF von 1,9 g/kg wurde unser Frühtrachthonig am 09.11.2025 mit der <strong><u>Leistungsmedaille in Silber </u></strong>ausgezeichnet.

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
