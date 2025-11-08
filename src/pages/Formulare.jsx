import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Formulare.css";

// PDF-Worker laden (notwendig für react-pdf)
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

export default function Formulare() {
  const [selectedFile, setSelectedFile] = useState("");
  const [pdfBlob, setPdfBlob] = useState(null);
  const [numPages, setNumPages] = useState(null);

  // Lokale Basis-URL
  const baseUrl = window.location.origin;

  // Alle Formulare
  const pdfFiles = [
    { name: "Personalfragebogen Minijob", path: `${baseUrl}/PDFs/personalfragebogen_minijob.pdf` },
    { name: "Befreiungsantrag Rentenversicherung", path: `${baseUrl}/PDFs/befreiungsantrag_rentenversicherung.pdf` },
    { name: "Waschkosten", path: `${baseUrl}/PDFs/waschkosten.pdf` },
    { name: "Aufnahmeantrag Seniorenfußball", path: `${baseUrl}/PDFs/aufnahmeantrag_seniorenfussball.pdf` },
  ];

  // Datei-Auswahl
  const handleSelect = async (e) => {
    const filePath = e.target.value;
    setSelectedFile(filePath);
    if (!filePath) {
      setPdfBlob(null);
      return;
    }

    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error("Fehler beim Laden der PDF");
      const blob = await response.blob();
      setPdfBlob(blob);
    } catch (err) {
      console.error("Fehler beim Laden:", err);
      setPdfBlob(null);
    }
  };

  // Download der aktuell ausgewählten Datei
  const handleDownload = () => {
    if (!selectedFile) return;
    const link = document.createElement("a");
    link.href = selectedFile;
    link.download = selectedFile.split("/").pop();
    link.click();
  };

  return (
    <HauptLayout hideRight={true}>
      <div className="formular-container">
        <h1>📄 Interaktive Formulare</h1>
        <p>Wähle ein Formular aus, um es anzuzeigen oder herunterzuladen.</p>

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

        {pdfBlob ? (
          <>
            <div className="pdf-viewer">
              <Document file={pdfBlob} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                {Array.from(new Array(numPages), (_, i) => (
                  <Page key={i + 1} pageNumber={i + 1} />
                ))}
              </Document>
            </div>

            <button className="download-btn" onClick={handleDownload}>
              📥 Formular herunterladen
            </button>
          </>
        ) : (
          <p className="pdf-placeholder">
            Kein Formular ausgewählt oder Datei konnte nicht geladen werden.
          </p>
        )}
      </div>
    </HauptLayout>
  );
}
