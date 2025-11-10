import React, { useState } from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Formulare.css";

export default function Formulare() {
  const [selectedFile, setSelectedFile] = useState("");
  const baseUrl = window.location.origin;

  const pdfFiles = [
    { name: "Personalfragebogen Minijob", path: `${baseUrl}/PDFs/personalfragebogen_minijob.pdf` },
    { name: "Befreiungsantrag Rentenversicherung", path: `${baseUrl}/PDFs/befreiungsantrag_rentenversicherung.pdf` },
    { name: "Waschkosten", path: `${baseUrl}/PDFs/Aufnahmeantrag_Seniorenfußball_online.pdf` },
    { name: "Aufnahmeantrag Seniorenfußball", path: `${baseUrl}/PDFs/aufnahmeantrag_seniorenfussball.pdf` },
  ];

  return (
    <HauptLayout hideRight={true}>
      <div className="formular-container">
        <h1>📄 Interaktive Formulare</h1>

        <div className="formular-select">
          <label htmlFor="formular-auswahl">Wähle ein Formular:</label>
          <select
            id="formular-auswahl"
            onChange={(e) => setSelectedFile(e.target.value)}
            value={selectedFile}
          >
            <option value="">-- Bitte auswählen --</option>
            {pdfFiles.map((f, i) => (
              <option key={i} value={f.path}>
                {f.name}
              </option>
            ))}
          </select>
        </div>

        {selectedFile ? (
          <div className="pdf-viewer">
            {/* ⚡ Der native Browser-PDF-Viewer */}
            <iframe
              src={selectedFile}
              title="PDF Formular"
              className="formular-iframe"
            ></iframe>
          </div>
        ) : (
          <p style={{ color: "gray" }}>Kein Formular ausgewählt.</p>
        )}
      </div>
    </HauptLayout>
  );
}
