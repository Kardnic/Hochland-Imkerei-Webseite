import React, { useState } from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Fortbildungen.css";

export default function Fortbildungen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenSrc, setFullscreenSrc] = useState(null);

  const openFullscreen = (src) => setFullscreenSrc(src);
  const closeFullscreen = () => setFullscreenSrc(null);

  const inhalte = [
    {
      titel: "Wie alles begann",
      inhalt: (
        <>
          <h2>Wie alles begann</h2>
          <div className="zertifikat-container">
            <img
              src="/Bilder/Zertifikat Jutta_page-0001.jpg"
              alt="Zertifikat Jutta"
              className="zertifikat1"
              onClick={(e) => openFullscreen(e.target.src)}
            />
            <img
              src="/Bilder/Zertifikat Jürgen_page-0001.jpg"
              alt="Zertifikat Jürgen"
              className="zertifikat2"
              onClick={(e) => openFullscreen(e.target.src)}
            />
          </div>
          <p>
            Bevor wir unsere Imkerei offiziell eröffneten, war der Erwerb des
            Honigzertifikates des Deutschen Imkerbundes ein entscheidender
            Schritt für uns.
          </p>
          <p>
            Wir wollten sicherstellen, dass wir von Anfang an höchste
            Qualitätsstandards einhalten und unseren zukünftigen Kunden ein
            Produkt anbieten, das durch eine offizielle Zertifizierung anerkannt
            ist.
          </p>
          <p>
            Am 19. März 2016 wurde mir und am 18. März 2017 meiner Frau das
            Zertifikat verliehen.
          </p>
        </>
      ),
    },
    {
      titel: "Met brauen",
      inhalt: (
        <>
          <h2>Met brauen</h2>
          <div className="zertifikat-container">
            <img
              src="/Bilder/Jutta Met brauen_page-0001.jpg"
              alt="Zertifikat Met Jutta"
              className="zertifikat1"
              onClick={(e) => openFullscreen(e.target.src)}
            />
            <img
              src="/Bilder/Jürgen Met brauen_page-0001.jpg"
              alt="Zertifikat Met Jürgen"
              className="zertifikat2"
              onClick={(e) => openFullscreen(e.target.src)}
            />
          </div>
          <h5>Lehrgang: Met brauen – Die Kunst des Metbrauens erlernen</h5>
          <p>
            Honigmet, auch als Met oder Honigwein bekannt, ist eines der
            ältesten alkoholischen Getränke der Menschheitsgeschichte. In unserem
            Lehrgang erlernten wir die traditionelle Kunst des Metbrauens von
            Grund auf.
          </p>
        </>
      ),
    },
    {
      titel: "Honigsachverständiger",
      inhalt: (
        <>
          <h2>Honigsachverständiger</h2>
          <div className="zertifikat-container">
            <img
              src="/Bilder/Honigsachverständiger Jürgen_page-0001.jpg"
              alt="Zertifikat Honigsachverständiger Jürgen"
              className="zertifikat1"
              onClick={(e) => openFullscreen(e.target.src)}
            />
          </div>
          <p>
            Am 11. September 2020 habe ich erfolgreich den Lehrgang zum
            Honigsachverständigen bestanden. In diesem Seminar wurden
            umfassende Kenntnisse über die Qualitätsbeurteilung, Analyse und
            rechtlichen Anforderungen von Honig vermittelt.
          </p>
        </>
      ),
    },
    {
      titel: "Grundlagen der Bienenkrankheiten",
      inhalt: (
        <>
          <h2>Grundlagen der Bienenkrankheiten</h2>
          <div className="zertifikat-container">
            <img
              src="/Bilder/Zertifikat Jutta_page-0002.jpg"
              alt="Zertifikat Bienenkrankheiten Jutta"
              className="zertifikat1"
              onClick={(e) => openFullscreen(e.target.src)}
            />
            <img
              src="/Bilder/Zertifikat Jürgen_page-0002.jpg"
              alt="Zertifikat Bienenkrankheiten Jürgen"
              className="zertifikat2"
              onClick={(e) => openFullscreen(e.target.src)}
            />
          </div>
          <p>Wird noch hinzugefügt.</p>
        </>
      ),
    },
    {
      titel: "Wespenberater",
      inhalt: (
        <>
          <h2>Wespenberater</h2>
          <div className="zertifikat-container">
            <img
              src="/Bilder/Zertifikat Jutta_page-0003.jpg"
              alt="Zertifikat Wespenberater Jutta"
              className="zertifikat1"
              onClick={(e) => openFullscreen(e.target.src)}
            />
            <img
              src="/Bilder/Zertifikat Jürgen_page-0003.jpg"
              alt="Zertifikat Wespenberater Jürgen"
              className="zertifikat2"
              onClick={(e) => openFullscreen(e.target.src)}
            />
          </div>
          <p>
            Lehrgang zur qualifizierten Beratung, Maßnahmen und Umsiedlung bei
            Problemen mit Wespen- und Hornissenvölkern.
          </p>
        </>
      ),
    },
    {
      titel: "Erneuerung Honiglehrgang",
      inhalt: (
        <>
          <h2>Erneuerung Honiglehrgang</h2>
          <div className="zertifikat-container">
            <img
              src="/Bilder/erneuerter Fachkundenachweis Honig 2023 Jutta_page-0001.jpg"
              alt="Zertifikat erneuert Jutta"
              className="zertifikat1"
              onClick={(e) => openFullscreen(e.target.src)}
            />
            <img
              src="/Bilder/erneuerter Fachkundenachweis Honig 2023 Jürgen_page-0001.jpg"
              alt="Zertifikat erneuert Jürgen"
              className="zertifikat2"
              onClick={(e) => openFullscreen(e.target.src)}
            />
          </div>
          <p>
            <strong>Auffrischung des Fachkundenachweises Honig</strong>
            <br />
            Am 16. Juli 2023 haben wir erfolgreich die Auffrischung des
            Fachkundenachweises Honig absolviert.
          </p>
        </>
      ),
    },
    {
      titel: "Fortbildung Referenten Honiglehrgang",
      inhalt: (
        <>
          <h2>Fortbildung Referenten Honiglehrgang</h2>
          <div className="zertifikat-container">
            <img
              src="/Bilder/Fortbildung Referenten Zertifikat Jutta.jpg"
              alt="Zertifikat Referent Jutta"
              className="zertifikat1"
              onClick={(e) => openFullscreen(e.target.src)}
            />
            <img
              src="/Bilder/Fortbildung Referenten Zertifikat Jürgen.jpg"
              alt="Zertifikat Referent Jürgen"
              className="zertifikat2"
              onClick={(e) => openFullscreen(e.target.src)}
            />
          </div>
          <p>
            Teilnahme an der Fortbildung für Referentinnen und Referenten des
            Imkerverbandes Rheinland für D.I.B.-Honigschulungen.
          </p>
        </>
      ),
    },
    {
      titel: "Der Honigbiene unter den Pelz geschaut",
      inhalt: (
        <>
          <h2>Der Honigbiene unter den Pelz geschaut</h2>
          <div className="zertifikat-container">
            <img
              src="/Bilder/Biene unter Pelz Zertifikat Jutta.jpg"
              alt="Zertifikat Pelz Jutta"
              className="zertifikat1"
              onClick={(e) => openFullscreen(e.target.src)}
            />
            <img
              src="/Bilder/Biene unter Pelz Zertifikat Jürgen.jpg"
              alt="Zertifikat Pelz Jürgen"
              className="zertifikat2"
              onClick={(e) => openFullscreen(e.target.src)}
            />
          </div>
          <p>
            Am 24. August 2024 nahmen wir an einem Lehrgang zum Thema Anatomie
            und Pathologie der Honigbiene teil.
          </p>
        </>
      ),
    },
    {
      titel: "Honigsommelier",
      inhalt: (
        <>
          <h2>Honigsommelière</h2>
          <div className="zertifikat-container">
            <img
              src="/Bilder/Honigsomelier Jürgen.jpg"
              alt="Zertifikat Wespenberater Jutta"
              className="zertifikat1"
              onClick={(e) => openFullscreen(e.target.src)}
            />
            <img
              src="/Bilder/Honigsomelier Jutta.jpg"
              alt="Zertifikat Wespenberater Jürgen"
              className="zertifikat2"
              onClick={(e) => openFullscreen(e.target.src)}
            />
          </div>
          <p>
            <p>
              Wir haben als eine der ersten Teilnehmer den neu eingeführten Lehrgang zum Honig Sommelier im deutschsprachigen Raum erfolgreich absolviert. 
            </p>
            <p>
              Der Imkerverband Rheinland hat im Januar 2025 zum ersten Mal einen Lehrgang für den Honig-Sommelier im Bienenmuseum in Duisburg angeboten.
            </p>
            <p>
              Über vier Tage hinweg erhielten wir umfassende Einblicke in die Entstehung, Gewinnung und Bedeutung des Honigs für den Menschen. Neben sensorischen Techniken zur Differenzierung von Aromen und Texturen lernten wir auch die vielfältigen Einflussfaktoren auf die Honigqualität kennen, darunter Trachtpflanzen, Herkunftsregionen und Herstellungsprozesse.
            </p>
          </p>
        </>
      ),
    },
  ];

 return (
  <HauptLayout
    rightContent={
      <>
        {inhalte.map((item, index) => (
          <div
            key={index}
            className={`kachel ${activeIndex === index ? "aktiv" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <h3>{item.titel}</h3>
          </div>
        ))}
      </>
    }
  >
    <div className="fortbildungen-seite">
      <div className="fortbildung-inhalt">{inhalte[activeIndex].inhalt}</div>

      {fullscreenSrc && (
        <div id="fullscreenOverlay" onClick={closeFullscreen}>
          <span id="closeButton">&times;</span>
          <img id="fullscreenImage" src={fullscreenSrc} alt="Vollbild" />
        </div>
      )}
    </div>
  </HauptLayout>
);

}