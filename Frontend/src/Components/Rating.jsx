import "./Rating.css";

export default function Rating({ rating = 0 }) {
  const value = Number(rating); // l'API peut renvoyer "5" (string)

  return (
    <div className="rating" aria-label={`Note ${value} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`fa-solid fa-star ${star <= value ? "is-active" : ""}`}

        />
      ))}
    </div>
  );
}
