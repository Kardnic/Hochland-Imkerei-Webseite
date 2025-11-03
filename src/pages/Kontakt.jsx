import React from "react";
import HauptLayout from "../layouts/HauptLayout";

const Kontakt = () => {
  return (
    <div className="bg-[#fffbea] min-h-screen flex justify-center py-10">
      <div className="rahmen w-11/12 md:w-4/5 bg-white shadow-lg rounded-lg grid md:grid-cols-[80%_20%] gap-4 overflow-hidden">

        {/* Kopfbereich mit Logo */}
        <div className="kopf flex items-center justify-start p-4 bg-white col-span-2">
          <a href="/"><img src="/Bilder/Biene Neu.jpg" alt="Logo" className="w-40 h-auto" /></a>
        </div>

        {/* Navigation */}
        <div className="navigation col-span-2 bg-green-700 text-white flex justify-center items-end gap-3 py-3 flex-wrap">
          <a href="/" className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded">Startseite</a>
          <a href="/ueberUns" className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded">Über uns</a>

          {/* Dropdown: Wissenswertes */}
          <details className="relative">
            <summary className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded cursor-pointer">
              Wissenswertes
            </summary>
            <ul className="dropdown absolute left-0 bg-white text-black rounded shadow-md mt-1 p-2 w-40">
              <li><a href="/wissen_Bienen" className="block hover:bg-gray-200 px-2 py-1 rounded">Bienen</a></li>
              <li><a href="/wissen_Honig" className="block hover:bg-gray-200 px-2 py-1 rounded">Honig</a></li>
            </ul>
          </details>

          {/* Dropdown: Galerien */}
          <details className="relative">
            <summary className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded cursor-pointer">
              Galerien
            </summary>
            <ul className="dropdown absolute left-0 bg-white text-black rounded shadow-md mt-1 p-2 w-40">
              <li><a href="/galerie_Bienen" className="block hover:bg-gray-200 px-2 py-1 rounded">Bienen</a></li>
              <li><a href="/galerie_Honig" className="block hover:bg-gray-200 px-2 py-1 rounded">Honig</a></li>
            </ul>
          </details>

          <a href="/angebot" className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded">Angebot</a>
          <a href="/contact" className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded">Kontakt</a>
        </div>

        {/* Hauptinhalt */}
        <div className="inhalt p-8">
          <div className="main-content">
            <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
            <p>Noch hinzufügen</p>
          </div>
        </div>

        {/* Rechte Sidebar mit Karte */}
        <aside className="seite-rechts bg-[#8d8383] flex flex-col items-center justify-start p-4">
          <div className="kachel bg-white rounded-md shadow-md flex flex-col justify-start items-center p-4 w-full">
            <h3 className="text-sm font-semibold mb-2">Hier findet ihr uns</h3>
            <div className="map-container w-full h-48 overflow-hidden rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1824.430246073691!2d6.335650860631513!3d50.79729099699213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf67854d3c09b7%3A0x267a91532920b990!2sHochland%20Imkerei%20Heistern!5e1!3m2!1sde!2sde!4v1739555853620!5m2!1sde!2sde"
                className="google-map w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hochland Imkerei Heistern Karte"
              ></iframe>
            </div>
          </div>
        </aside>

        {/* Footer */}
        <footer className="footer col-span-2 bg-green-700 text-white text-center py-2">
          <p>
            &copy; 2025 Hochland Imkerei Heistern |{" "}
            <a href="/impressum" className="underline hover:text-yellow-200">Impressum</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Kontakt;
