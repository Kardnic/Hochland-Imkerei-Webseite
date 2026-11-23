import React, { useEffect, useState } from "react"; // 🆕 useState hinzugefügt
import { useLocation } from "react-router-dom";
import "./HauptLayout.css";

export default function HauptLayout({ children, hideRight = false, rightContent = null }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 🆕 Zustand fürs Burger-Menü

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event) => { if (event.key === "Escape") setIsMenuOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]); // 🆕 Menü öffnen/schließen

  return (
    <div className="rahmen">
      {/* Kopfbereich */}
      <header className="kopf">
        <div className="logo">
          <img src="/Bilder/Biene Neu.jpg" alt="Hochland Imkerei Heistern" decoding="async" />
        </div>

        {/* 🆕 Burger-Menü-Button */}
        <button className="menu-button" type="button" aria-label="Menü öffnen" aria-expanded={isMenuOpen} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Headerbild */}
      <div className="headerbild">
        <img src="/Bilder/headerBild.jpg" alt="Bienen und Imkerei" decoding="async" />
      </div>

      {/* Navigation (Desktop) */}
      <nav className="navigation" aria-label="Hauptnavigation">
        <a href="/">Startseite</a>
        <a href="/ueberUns">Über uns</a>
        <details className="wissenswert">
          <summary>Wissenswertes</summary>
          <ul className="dropdown">
            <li><a href="/wissen_Bienen">Bienen</a></li>
            <li><a href="/wissen_Honig">Honig</a></li>
            <li><a href="/wissen_Wachs">Wachs</a></li>
          </ul>
        </details>
        <details className="gallery">
          <summary>Galerien</summary>
          <ul className="dropdown">
            <li><a href="/galerie_Bienen">Bienen</a></li>
            <li><a href="/galerie_Honig">Honig</a></li>
          </ul>
        </details>
        <details>
        <summary>Angebot</summary>
            <ul className="dropdown">
                <li><a href="/angebot">Angebot</a></li>
                <li><a href="/fundort">Wo gibts unseren Honig?</a></li>
            </ul>
          </details>
        <a href="/contact">Kontakt</a>
      </nav>

      {/* 🆕 Mobile Navigation */}
      {isMenuOpen && (
        <>
          <div className="menu-overlay open" onClick={toggleMenu}></div>
          <nav className="side-menu open" aria-label="Mobile Navigation">
            <button className="close-button" type="button" aria-label="Menü schließen" onClick={toggleMenu}>×</button>
            <a href="/">Startseite</a>
            <a href="/ueberUns">Über uns</a>
            <details>
              <summary>Wissenswertes</summary>
              <ul>
                <li><a href="/wissen_Bienen">Bienen</a></li>
                <li><a href="/wissen_Honig">Honig</a></li>
                <li><a href="/wissen_Wachs">Wachs</a></li>
              </ul>
            </details>
            <details>
              <summary>Galerien</summary>
              <ul>
                <li><a href="/galerie_Bienen">Bienen</a></li>
                <li><a href="/galerie_Honig">Honig</a></li>
              </ul>
            </details>
            <details>
            <summary>Angebot</summary>
            <ul>
                <li><a href="/angebot">Angebot</a></li>
                <li><a href="/fundort">Wo gibts unseren Honig?</a></li>
            </ul>
            </details>
            
            
            <a href="/contact">Kontakt</a>
          </nav>
        </>
      )}

      {/* Hauptinhalt */}
      <main className="inhalt-links">{children}</main>

      {/* Rechte Spalte */}
      {!hideRight && (
        <aside className="seite-rechts">
          {rightContent ? (
            rightContent
          ) : (
            <>
              {location.pathname === "/fortbildungen" ? null : (
                <>
                  {location.pathname === "/ueberUns" && (
                    <div className="kachel fortbildung-kachel">
                      <h3>Fortbildungen</h3>
                      <p>
                        Wir bilden uns regelmäßig weiter, um unsere Imkerei
                        nachhaltig und fachgerecht zu führen.
                      </p>
                      <a href="/fortbildungen" className="kachel-button">
                        ➜ Zu den Fortbildungen
                      </a>
                    </div>
                  )}

                  <div className="kachel standort-kachel">
                    <div className="standort-icon" aria-hidden="true">⌖</div>
                    <h3>Hier findet ihr uns</h3>
                    <p className="standort-ort">Hochland Imkerei Heistern</p>
                    <p className="standort-region">Heistern · Langerwehe</p>
                    <a className="standort-link" href="https://www.google.com/maps/search/?api=1&query=Hochland%20Imkerei%20Heistern" target="_blank" rel="noopener noreferrer" aria-label="Standort der Hochland Imkerei Heistern in Google Maps anzeigen">
                      Standort auf Google Maps ansehen <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <a href="/neuigkeiten">
                  <div className="kachel">
                    <h3>Neuigkeiten</h3>
                    <h5>Bronze bei der Honigprämierung 2026</h5>
                    <p>Unser Honig wurde bei der diesjährigen Honigprämierung mit Bronze ausgezeichnet.</p>
                    <h5>Honiguntersuchung 2026</h5>
                    <p>Der Prüfbericht mit Pollenanalyse vom 14. Oktober 2026 liegt vor. Mehr dazu unter Neuigkeiten.</p>
                   
                  </div>
                  </a>

                  <div className="kachel">
                    <h3>Kontakt</h3>
                    <p>Ihr habt Fragen zu unserem Honig oder unserer Imkerei? Wir freuen uns auf eure Nachricht.</p>
                    <a href="/contact" className="kachel-button">➜ Kontakt aufnehmen</a>
                  </div>
                </>
              )}
            </>
          )}
        </aside>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; 2025 Hochland Imkerei Heistern |{" "}
          <a href="/impressum">Impressum</a>
        </p>
      </footer>
    </div>
  );
}
