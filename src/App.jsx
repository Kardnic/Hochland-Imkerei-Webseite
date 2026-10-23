import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import UeberUns from "./pages/UeberUns";
import Angebot from "./pages/Angebot";
import Kontakt from "./pages/Kontakt";
import WissenBienen from "./pages/WissenBienen";
import WissenHonig from "./pages/WissenHonig";
import GalerieBienen from "./pages/GalerieBienen";
import GalerieHonig from "./pages/GalerieHonig";
import Impressum from "./pages/Impressum";
import Fortbildungen from "./pages/Fortbildungen";
import Formulare from "./pages/Formulare";
import WissenWachs from "./pages/WissenWachs";
import Neuigkeiten from "./pages/Neuigkeiten";  
import Fundort from "./pages/Fundort";


const SEO = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    const pages = {
      "/": ["Hochland Imkerei Heistern | Regionaler Honig", "Regionaler Honig, Bienenvölker und Einblicke in unsere Imkerei in Heistern."],
      "/ueberUns": ["Über uns | Hochland Imkerei Heistern", "Erfahren Sie mehr über unsere Hobby-Imkerei und unsere Bienenvölker."],
      "/angebot": ["Honigangebot | Hochland Imkerei Heistern", "Entdecken Sie das Angebot der Hochland Imkerei Heistern."],
      "/contact": ["Kontakt | Hochland Imkerei Heistern", "Nehmen Sie Kontakt zur Hochland Imkerei Heistern auf."],
      "/wissen_Bienen": ["Wissen über Bienen | Hochland Imkerei", "Wissenswertes über Bienen und ihre Bedeutung."],
      "/wissen_Honig": ["Wissen über Honig | Hochland Imkerei", "Informationen über Honig und seine Herstellung."],
      "/wissen_Wachs": ["Wissen über Wachs | Hochland Imkerei", "Wissenswertes über Bienenwachs."],
      "/galerie_Bienen": ["Bienengalerie | Hochland Imkerei", "Bilder aus der Welt unserer Bienen."],
      "/galerie_Honig": ["Honiggalerie | Hochland Imkerei", "Bilder rund um unseren Honig."],
      "/impressum": ["Impressum | Hochland Imkerei", "Rechtliche Anbieterinformationen der Hochland Imkerei Heistern."],
      "/fortbildungen": ["Fortbildungen | Hochland Imkerei", "Fortbildungen rund um unsere Imkerei."],
      "/formulare": ["Formulare | Hochland Imkerei", "Formulare und Informationen der Hochland Imkerei Heistern."],
      "/neuigkeiten": ["Neuigkeiten | Hochland Imkerei", "Aktuelles aus der Hochland Imkerei Heistern."],
      "/fundort": ["Honig kaufen | Hochland Imkerei", "Erfahren Sie, wo unser Honig erhältlich ist."]
    };
    const [title, description] = pages[pathname] || ["Seite nicht gefunden | Hochland Imkerei", "Diese Seite konnte nicht gefunden werden."];
    document.title = title;
    const setMeta = (selector, value) => { const element = document.querySelector(selector); if (element) element.setAttribute("content", value); };
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', 'https://hochland-imkerei-heistern.de' + pathname);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = 'https://hochland-imkerei-heistern.de' + pathname;
  }, [pathname]);
  return null;
};
const NotFound = () => <main style={{maxWidth: 720, margin: "4rem auto", padding: 24, textAlign: "center"}}><h1>Seite nicht gefunden</h1><p>Die angeforderte Seite existiert leider nicht.</p><a href="/">Zur Startseite</a></main>;

function App() {
  return (
    <Router>
      <SEO />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ueberUns" element={<UeberUns />} />
        <Route path="/angebot" element={<Angebot />} />
        <Route path="/contact" element={<Kontakt />} />
        <Route path="/wissen_Bienen" element={<WissenBienen />} />
        <Route path="/wissen_Honig" element={<WissenHonig />} />
        <Route path="/galerie_Bienen" element={<GalerieBienen />} />
        <Route path="/galerie_Honig" element={<GalerieHonig />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/fortbildungen" element={<Fortbildungen />} />
        <Route path="/formulare" element={<Formulare />} />
        <Route path="/wissen_Wachs" element={<WissenWachs/>} />
        <Route path="/neuigkeiten" element={<Neuigkeiten/>} />
        <Route path="/fundort" element={<Fundort/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;