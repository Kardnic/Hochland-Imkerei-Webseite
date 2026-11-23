import React from "react";
import HauptLayout from "../layouts/HauptLayout";

const pollen = [
  { name: "Raps-Typ (Brassica)", anteil: 67.8 },
  { name: "Ahorn (Acer)", anteil: 13.2 },
  { name: "Himbeer-Typ (Rubus)", anteil: 11.8 },
  { name: "Weide (Salix)", anteil: 3.6 },
  { name: "Kernobst-Typ (Pyrus)", anteil: 1.4 },
];

export default function Neuigkeiten() {
  return (
    <HauptLayout>
      <div style={{ maxWidth: 850, margin: "0 auto" }}>
        <h1>Neuigkeiten</h1>
        <section style={{ marginBottom: "3rem" }}>
          <h2>Honigprämierung 2026 – Bronze-Auszeichnung</h2>
          <p>Auch 2026 haben wir an der Honigprämierung teilgenommen. Der Imkerverband Rheinland e. V. hat den von Jürgen Liedtke eingereichten Honig mit der Leistungsmedaille in Bronze ausgezeichnet.</p>
          <div aria-label="Auszeichnung: Honigprämierung 2026, Bronze" style={{ border: "2px solid #8b9651", borderRadius: 12, padding: "2rem 1.5rem", textAlign: "center", background: "#fcfcf5", color: "#35351f", marginTop: "1rem" }}>
            <div style={{ fontSize: 14, letterSpacing: 2, fontWeight: 700, textTransform: "uppercase" }}>Imkerverband Rheinland e. V.</div>
            <div style={{ fontSize: 22, fontWeight: 700, marginTop: 16 }}>Honigprämierung 2026</div>
            <div style={{ fontSize: 48, margin: "12px 0", color: "#a16c3a", fontWeight: 800 }}>BRONZE</div>
            <p style={{ fontSize: 19, fontWeight: 700, margin: "8px 0" }}>Jürgen Liedtke</p>
            <p style={{ marginBottom: 0 }}>Leistungsmedaille für vorzüglichen Honig</p>
            <p style={{ fontSize: 13, marginTop: 12 }}>Lautzenhausen, 15. November 2026</p>
          </div>
          <p style={{ marginTop: 14 }}>Wir freuen uns über die Anerkennung unserer Imkereiarbeit.</p>
        </section>
        <section style={{ marginBottom: "2rem" }}>
          <h2>Honiguntersuchung 2026 mit Pollenanalyse</h2>
          <p>Auch in diesem Jahr haben wir unseren Honig freiwillig durch das Dienstleistungszentrum Ländlicher Raum Westerwald-Osteifel untersuchen lassen. Der Prüfbericht vom 14. Oktober 2026 bewertet die Probe als <strong>Frühjahrstracht­honig</strong>.</p>
          <p>Nach dem Prüfbericht entspricht der untersuchte Honig in den geprüften Kriterien der Honigverordnung und den Qualitätsanforderungen des Deutschen Imkerbundes (Stand 2021). Anzeichen ausländischer Herkunft wurden nicht festgestellt.</p>
          <div style={{ border: "1px solid #d6d6c6", borderRadius: 10, padding: "1rem 1.25rem", margin: "1.25rem 0" }}>
            <h3>Ergebnisse der Honiguntersuchung</h3>
            <dl style={{ display: "grid", gridTemplateColumns: "minmax(130px, 1fr) 1fr", gap: "0.5rem 1rem", marginBottom: 0 }}>
              <dt>Proben-Nr.</dt><dd>2026 / 328</dd>
              <dt>Honigart</dt><dd>Frühjahrstracht­honig</dd>
              <dt>Wassergehalt</dt><dd>17,4 %</dd>
              <dt>Elektrische Leitfähigkeit</dt><dd>0,47 mS/cm</dd>
              <dt>Invertase-Aktivität</dt><dd>148,4 U/kg</dd>
              <dt>HMF-Gehalt</dt><dd>1,8 mg/kg</dd>
              <dt>Geruch / Geschmack</dt><dd>aromatisch / honigtypisch</dd>
            </dl>
          </div>
          <h3>Pollenanalyse</h3>
          <p>Bei der mikroskopischen Untersuchung wurden 500 Pollen gezählt. Die wichtigsten nachgewiesenen Pollentypen:</p>
          <div style={{ display: "grid", gap: 14 }}>
            {pollen.map(({ name, anteil }) => (
              <div key={name}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15 }}>
                  <span>{name}</span><strong>{anteil.toLocaleString("de-DE", { minimumFractionDigits: 1 })} %</strong>
                </div>
                <div style={{ background: "#e7e9d8", height: 12, borderRadius: 6, overflow: "hidden", marginTop: 5 }}>
                  <div style={{ background: "#859448", width: anteil + "%", height: "100%", borderRadius: 6 }} />
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, marginTop: 12 }}>Die dargestellten fünf Pollentypen sind ein Auszug aus dem Prüfbericht; die Werte summieren sich deshalb nicht auf 100 %.</p>
          <p>Die Analyse zeigt eine Mischtracht aus verschiedenen Nektar- und Honigtauquellen, mit einem deutlichen Anteil an Raps-Pollen. Die Sortenempfehlung des Prüflabors lautet „Frühjahrstracht­honig“.</p>
        </section>
      </div>
    </HauptLayout>
  );
}
