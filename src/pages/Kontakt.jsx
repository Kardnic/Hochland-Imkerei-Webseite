import React, { useState } from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Kontakt.css";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nachricht: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hier später Mail-Service oder API-Aufruf einfügen
    console.log("Gesendet:", formData);

    setSuccess(true);
    setFormData({ name: "", email: "", nachricht: "" });
  };

  return (
    <HauptLayout>
      <div className="kontakt-container">
        <h1>Kontakt</h1>
        <p>
          Du möchtest uns eine Nachricht schicken, hast Fragen zu unseren Honigen
          oder interessierst dich für unsere Imkerei? Dann nutze gerne das
          Kontaktformular oder schreib uns direkt per E-Mail:
        </p>
        <p className="email-hinweis">
          📧 <a href="mailto:hochland-imkerei@beispiel.de">hochland-imkerei@beispiel.de</a>
        </p>

        <form className="kontakt-formular" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            E-Mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Nachricht:
            <textarea
              name="nachricht"
              rows="5"
              value={formData.nachricht}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Nachricht senden</button>
        </form>

        {success && (
          <p className="erfolgsmeldung">
            ✅ Vielen Dank für deine Nachricht! Wir melden uns bald bei dir.
          </p>
        )}
      </div>
    </HauptLayout>
  );
}
