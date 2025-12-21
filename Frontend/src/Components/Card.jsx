import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/Logement/${id}`} className="card">
      <img className="card__img" src={cover} alt={title} />
      <h3 className="card__title">{title}</h3>
    </Link>
  );
}
