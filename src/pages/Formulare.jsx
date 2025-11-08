import React, { useState } from "react";
import "../layouts/Formulare.css";

export default function Formulare() {
  const [selectedForm, setSelectedForm] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datum: "",
    nachricht: "",
  });
  const [status, setStatus] = useState("");

  const formList = [
    { title: "Anmeldeformular", file: "../public/PDFs/anmeldung.pdf" },
    { title: "Lieferformular", file: "lieferung.pdf" },
    { title: "Qualitätsnachweis", file: "qualitaet.pdf" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sende...");

    const formDetails = {
      ...formData,
      pdfName: selectedForm,
    };

    try {
      const response = await fetch("https://contact-form-worker.svenliedtke14.workers.dev/send-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetails),
      });

      if (response.ok) {
        setStatus("✅ Formular erfolgreich gesendet!");
      } else {
        setStatus("❌ Fehler beim Senden.");
      }
    } catch (error) {
      setStatus("⚠️ Verbindung fehlgeschlagen.");
    }
  };

  return (
    <div className="formulare-page">
      <header className="formulare-header">
        <h1>Interaktive Formulare</h1>
        <p>Fülle ein Formular aus und sende es direkt per E-Mail.</p>
      </header>

      <div className="formulare-container">
        {/* Linke Liste mit Formularen */}
        <aside className="formular-liste">
          {formList.map((f, i) => (
            <button
              key={i}
              onClick={() => setSelectedForm(f.file)}
              className={selectedForm === f.file ? "active" : ""}
            >
              {f.title}
            </button>
          ))}
        </aside>

        {/* Rechter Bereich: Formular */}
        <main className="formular-content">
          {selectedForm ? (
            <form onSubmit={handleSubmit} className="formular-form">
              <h2>{selectedForm}</h2>

              <label>
                Name:
                <input name="name" value={formData.name} onChange={handleChange} required />
              </label>

              <label>
                E-Mail:
                <input name="email" type="email" value={formData.email} onChange={handleChange} required />
              </label>

              <label>
                Datum:
                <input name="datum" type="date" value={formData.datum} onChange={handleChange} />
              </label>

              <label>
                Nachricht:
                <textarea name="nachricht" value={formData.nachricht} onChange={handleChange}></textarea>
              </label>

              <button type="submit">📨 Formular senden</button>
              <p className="status">{status}</p>
            </form>
          ) : (
            <p>Bitte ein Formular aus der Liste auswählen.</p>
          )}
        </main>
      </div>
    </div>
  );
}
