import React, { useState } from "react";
import HauptLayout from "../layouts/HauptLayout";
import "../layouts/Kontakt.css";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nachricht: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://contact-form-worker.svenliedtke14.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", nachricht: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <HauptLayout>
      <div className="kontakt-container">
        <h1>Kontakt</h1>
        <p>
          Du möchtest uns eine Nachricht schicken? Nutze das Formular oder schreib
          direkt an{" "}
          <a href="mailto:contact@hochland-imkerei-heistern.de">
            Hochland Imkerei Heistern
          </a>.
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

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Senden..." : "Nachricht senden"}
          </button>
        </form>

        {status === "success" && (
          <p className="erfolgsmeldung">
            ✅ Vielen Dank! Deine Nachricht wurde erfolgreich versendet.
          </p>
        )}
        {status === "error" && (
          <p className="fehlermeldung">
            ❌ Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.
          </p>
        )}
      </div>
    </HauptLayout>
  );
}
