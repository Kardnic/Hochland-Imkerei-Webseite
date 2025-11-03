export default function Navigation() {
  return (
    <nav className="bg-forest bg-cover bg-center text-white flex justify-center gap-4 py-4">
      <a href="/" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">
        Startseite
      </a>
      <a href="/ueberuns" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">
        Über uns
      </a>

      <details className="relative group">
        <summary className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded cursor-pointer list-none">
          Wissenswertes
        </summary>
        <ul className="absolute left-0 top-full bg-white text-black rounded shadow-lg mt-1 hidden group-open:block">
          <li><a href="/wissen-bienen" className="block px-4 py-2 hover:bg-gray-200">Bienen</a></li>
          <li><a href="/wissen-honig" className="block px-4 py-2 hover:bg-gray-200">Honig</a></li>
        </ul>
      </details>

      <details className="relative group">
        <summary className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded cursor-pointer list-none">
          Galerien
        </summary>
        <ul className="absolute left-0 top-full bg-white text-black rounded shadow-lg mt-1 hidden group-open:block">
          <li><a href="/galerie-bienen" className="block px-4 py-2 hover:bg-gray-200">Bienen</a></li>
          <li><a href="/galerie-honig" className="block px-4 py-2 hover:bg-gray-200">Honig</a></li>
        </ul>
      </details>

      <a href="/angebot" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">
        Angebot
      </a>
      <a href="/kontakt" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">
        Kontakt
      </a>
    </nav>
  );
}
