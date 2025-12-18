import { NavLink} from "react-router-dom";
import logo from "../Assets/logo.png";
import "../Components/Header.css";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
    <nav className="header__nav">
      <img className="header__logo" src={logo} alt="Kasa" />
      <div className="header__links">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink>
      <NavLink to="/apropos" className={({ isActive }) => (isActive ? "active" : "")}>A propos</NavLink>
      </div>
    </nav>
    </header>
  );
}
