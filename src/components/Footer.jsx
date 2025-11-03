export default function Footer() {
  return (
    <footer className="bg-forest text-white py-4 mt-8 text-center">
      <p>
        © 2025 Hochland Imkerei Heistern |{" "}
        <a href="/impressum" className="underline hover:text-honey">
          Impressum
        </a>
      </p>
      <div className="text-sm mt-2 opacity-80">
        Besucherzähler eingebunden via{" "}
        <a
          href="https://www.besucherzaehler-kostenlos.de"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Besucherzaehler-kostenlos.de
        </a>
      </div>
    </footer>
  );
}
