import React, { useState } from "react"; // 🆕 useState hinzugefügt
import { useLocation } from "react-router-dom";
import "./HauptLayout.css";

export default function HauptLayout({ children, hideRight = false, rightContent = null }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 🆕 Zustand fürs Burger-Menü

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // 🆕 Menü öffnen/schließen

  return (
    <div className="rahmen">
      {/* Kopfbereich */}
      <header className="kopf">
        <div className="logo">
          <img src="/Bilder/Biene Neu.jpg" alt="Logo" />
        </div>

        {/* 🆕 Burger-Menü-Button */}
        <button className="menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Headerbild */}
      <div className="headerbild">
        <img src="/Bilder/headerBild.jpg" alt="Headerbild" />
      </div>

      {/* Navigation (Desktop) */}
      <nav className="navigation">
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
        <a href="/angebot">Angebot</a>
        <a href="/contact">Kontakt</a>
      </nav>

      {/* 🆕 Mobile Navigation */}
      {isMenuOpen && (
        <>
          <div className="menu-overlay" onClick={toggleMenu}></div>
          <nav className="side-menu open">
            <button className="close-button" onClick={toggleMenu}>×</button>
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
            <summary>
              <li><a href="/angebot">Angebot</a></li>
              <li><a href="/fundort">Wo gibts unseren Honig?</a></li>
            </summary>
            
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

                  <div className="kachel">
                    <h3>Hier findet ihr uns</h3>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1824.430246073691!2d6.335650860631513!3d50.79729099699213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf67854d3c09b7%3A0x267a91532920b990!2sHochland%20Imkerei%20Heistern!5e1!3m2!1sde!2sde!4v1739555853620!5m2!1sde!2sde"
                      className="google-map"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <a href="/neuigkeiten">
                  <div className="kachel">
                    <h3>Neuigkeiten</h3>
                    <h5>Honigprämierung 2025</h5>
                    <p><img src="/Bilder/Honigprämierung2025.jpg" alt="Honigprämierung" height="10%"/></p>
                    <h5>Wir sind dabei!</h5>
                    <p>
                      <img src="/Bilder/Weihnachtsmarkt.jpeg" alt="Weihnachtsmarkt" />
                    </p>
                  </div>
                  </a>

                  <div className="kachel">
                    <h3>Kontakt</h3>
                    <p>hochlandimkereiheistern@freenet.de</p>
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
