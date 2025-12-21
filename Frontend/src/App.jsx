import { Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Apropos from "./Pages/Apropos";
import ErreurPage from "./Pages/Erreurpage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Logement from "./Pages/Logement";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<ErreurPage />} />
      </Routes>
    
      <Footer />
    </>
  );
}

export default App;

