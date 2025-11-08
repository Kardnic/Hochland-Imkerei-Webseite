import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument } from "pdf-lib";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Formulare.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

export default function Formulare() {
  const [selectedFile, setSelectedFile] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null); // ✅ Hier ist pdfUrl definiert
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [numPages, setNumPages] = useState(null);

  // ✅ Verwende absolute URLs
  const baseUrl = window.location.origin;

  const pdfFiles = [
    { name: "Aufnahmeantrag Seniorenfußball", path: `${baseUrl}/PDFs/Aufnahmeantrag Seniorenfußball.pdf` },
    { name: "Anlage Rentenversicherung", path: `${baseUrl}/PDFs/Anlage Rentenversicherung.pdf` },
    { name: "Befreiungsantrag Rentenversicherung", path: `${baseUrl}/PDFs/2025_10_24_Befreiungsantrag Rentenversicherung.pdf` },
    { name: "Personalfragebogen Minijob", path: `${baseUrl}/PDFs/2025_10_24_Personalfragebogen fur geringfugig (Minijob), kurzfristig Beschaftigte.pdf` },
    { name: "Waschkosten", path: `${baseUrl}/PDFs/2025_10_24_Waschkosten.pdf` },
  ];

  const handleSelect = (e) => {
    const file = pdfFiles.find((f) => f.path === e.target.value);
    setSelectedFile(file?.path || "");
    setPdfUrl(file?.path || null);
  };
// ✅ Eingaben speichern
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Bitte wähle zuerst ein Formular aus.");
      return;
    }

    try {
      // PDF laden
      const existingPdfBytes = await fetch(selectedFile).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];

      // Text als Wasserzeichen (einfach sichtbar hinzufügen)
      firstPage.drawText(`Name: ${formData.name}`, { x: 50, y: 700, size: 12 });
      firstPage.drawText(`E-Mail: ${formData.email}`, { x: 50, y: 685, size: 12 });
      firstPage.drawText(`Nachricht: ${formData.message}`, { x: 50, y: 670, size: 12 });

      // Neues PDF speichern
      const pdfBytes = await pdfDoc.save();

      // Lokaler Download
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = selectedFile.split("/").pop().replace(".pdf", "_ausgefüllt.pdf");
      a.click();
      URL.revokeObjectURL(downloadUrl);

      // An Cloudflare Worker senden
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("file", new File([blob], "formular.pdf", { type: "application/pdf" }));

      await fetch("https://contact-form-worker.svenliedtke14.workers.dev/", {
        method: "POST",
        body: formDataToSend,
      });

      alert("Formular wurde erfolgreich gesendet und heruntergeladen!");
    } catch (error) {
      console.error(error);
      alert("Fehler beim Verarbeiten oder Senden des Formulars.");
    }
  };

  return (
    <HauptLayout hideRight={true}>
      <div className="formular-seite">
        <h1>📄 Formulare</h1>

        <div className="dropdown-section">
          <label htmlFor="form-auswahl">Wähle ein Formular:</label>
          <select id="form-auswahl" onChange={handleSelect} value={selectedFile}>
            <option value="">-- Bitte auswählen --</option>
            {pdfFiles.map((file, idx) => (
              <option key={idx} value={file.path}>
                {file.name}
              </option>
            ))}
          </select>
        </div>

        {pdfUrl && (
          <div className="pdf-anzeige">
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        )}

        <form className="formular-eingabe" onSubmit={handleSubmit}>
          <h2>Formular ausfüllen</h2>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            E-Mail:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Nachricht / Anmerkung:
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" />
          </label>

          <button type="submit">📨 Formular absenden</button>
        </form>
      </div>
    </HauptLayout>
  );
}
