import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;