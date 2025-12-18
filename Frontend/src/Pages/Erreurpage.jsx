
import { Link } from "react-router-dom";
import "./ErreurPage.css";

export default function ErreurPage() {
  return (
    <main className="error">
      <h1 className="error__code">404</h1>
      <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="error__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

