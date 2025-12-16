import logoFooter from "../Assets/logo-footer.png"; // adapte le nom du fichier si besoin
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoFooter} alt="Kasa" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}