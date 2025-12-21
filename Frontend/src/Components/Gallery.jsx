import Card from "./Card";
import "./Gallery.css";

export default function Gallery({ logements }) {
  return (
    <section className="gallery">
       
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </section>
  );
}
