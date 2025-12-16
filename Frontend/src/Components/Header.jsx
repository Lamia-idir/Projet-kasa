import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../Components/Header.css";

export default function Header() {
  return (
    <header className="header">
    <nav>
      <img src={logo} alt="Kasa" />
      <Link to="/">Accueil</Link>
      <Link to="/apropos">À propos</Link>
    </nav>
    </header>
  );
}
