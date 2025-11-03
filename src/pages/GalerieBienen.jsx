import React, { useState } from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Galerie.css";

export default function GalerieBienen() {
  const [fullscreenSrc, setFullscreenSrc] = useState(null);

  // 🔹 Alle Bilder der Galerie
  const bilder = [
    "/Bilder/Bienenwabe.jpg",
    "/Bilder/Bienenzarge.jpg",
    "/Bilder/Königin III.jpg",
    "/Bilder/Schaukasten I.jpg",
    "/Bilder/Schwarmzelle.jpg",
  ];

  return (
    <HauptLayout>
      <div className="galerie-container">
        <h1>Bienen-Galerie 🐝</h1>
        <div className="galerie-grid">
          {bilder.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Biene ${index + 1}`}
              className="galerie-bild"
              onClick={() => setFullscreenSrc(src)}
            />
          ))}
        </div>

        {fullscreenSrc && (
          <div className="fullscreen-overlay" onClick={() => setFullscreenSrc(null)}>
            <span className="close-button">&times;</span>
            <img src={fullscreenSrc} alt="Vollbild" className="fullscreen-image" />
          </div>
        )}
      </div>
    </HauptLayout>
  );
}
