import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Formulare.css";

// PDF.js Worker konfigurieren
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

export default function Formulare() {
  const [selectedFile, setSelectedFile] = useState("");
  const [pdfBlob, setPdfBlob] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState("");

  const baseUrl = window.location.origin;

  const pdfFiles = [
    { name: "Personalfragebogen Minijob", path: `${baseUrl}/PDFs/personalfragebogen_minijob.pdf` },
    { name: "Befreiungsantrag Rentenversicherung", path: `${baseUrl}/PDFs/befreiungsantrag_rentenversicherung.pdf` },
    { name: "Waschkosten", path: `${baseUrl}/PDFs/waschkosten.pdf` },
    { name: "Aufnahmeantrag Seniorenfußball", path: `${baseUrl}/PDFs/aufnahmeantrag_seniorenfussball.pdf` },
  ];

  const handleSelect = async (e) => {
    const filePath = e.target.value;
    setSelectedFile(filePath);
    setError("");
    setPdfBlob(null);

    if (!filePath) return;

    try {
      const response = await fetch(filePath, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      // ✅ PDF als ArrayBuffer laden
      const arrayBuffer = await response.arrayBuffer();
      setPdfBlob({ data: arrayBuffer });
    } catch (err) {
      console.error("Fehler beim Laden:", err);
      setError("❌ Fehler beim Anzeigen des Dokuments.");
    }
  };

  return (
    <HauptLayout hideRight={true}>
      <div className="formular-container">
        <h1>📄 Interaktive Formulare</h1>

        <div className="formular-select">
          <label htmlFor="formular-auswahl">Wähle ein Formular:</label>
          <select id="formular-auswahl" onChange={handleSelect} value={selectedFile}>
            <option value="">-- Bitte auswählen --</option>
            {pdfFiles.map((f, i) => (
              <option key={i} value={f.path}>
                {f.name}
              </option>
            ))}
          </select>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {pdfBlob ? (
          <div className="pdf-viewer">
            <Document
              file={pdfBlob}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              onLoadError={(err) => setError("❌ Fehler beim Anzeigen des Dokuments.")}
            >
              {Array.from(new Array(numPages), (_, i) => (
                <Page key={i + 1} pageNumber={i + 1} />
              ))}
            </Document>
          </div>
        ) : (
          !error && <p style={{ color: "gray" }}>Kein Formular ausgewählt.</p>
        )}
      </div>
    </HauptLayout>
  );
}
