export default function Header() {
  return (
    <header className="bg-white flex justify-center items-center py-6 shadow-md">
      <a href="/">
        <img src="/Bilder/Biene Neu.jpg" alt="Logo der Hochland Imkerei" className="w-32 h-auto" />

      </a>
      <div
  className="h-64 bg-cover bg-center"
  style={{ backgroundImage: "url('/Bilder/headerBild.jpg')" }}
></div>
    </header>
  );
}
