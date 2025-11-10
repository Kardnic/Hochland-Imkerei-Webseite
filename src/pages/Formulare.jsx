import React, { useEffect, useState } from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Formulare.css";

export default function Formulare() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // HTML-Datei aus dem public-Ordner laden
    fetch("/PDFs/Aufnahmeantrag_Seniorenfußball_online.html")
      .then((res) => res.text())
      .then((data) => setHtmlContent(data))
      .catch((err) => console.error("Fehler beim Laden der HTML-Datei:", err));
  }, []);

  return (
    <HauptLayout hideRight={true}>
      <div className="formular-container">
        <h1>📝 Aufnahmeantrag Seniorenfußball</h1>
        <p>Bitte fülle das Formular direkt unten aus.</p>

        {/* Hier wird das HTML eingefügt */}
        <div
          className="formular-html"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </HauptLayout>
  );
}
