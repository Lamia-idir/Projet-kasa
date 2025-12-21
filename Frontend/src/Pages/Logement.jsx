
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Slidshow from "../Components/Slidshow";
import Collapse from "../Components/Collapse";
import "./Logement.css";
import Tags from "../Components/Tags";
import Rating from "../Components/Rating";
import Host from "../Components/Host";


export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setLogement(data))
      .catch(console.error);
  }, [id]);

  if (!logement) return <p>Chargement...</p>;

  return (
    <div>
         <Slidshow pictures={logement.pictures}/>
         <h1>{logement.title}</h1>
         <p>{logement.location}</p>
         <Host host={logement.host} />
      
      <div className="logement__tags-rating">
         <Tags tags={logement.tags} />
         <Rating rating={logement.rating} />
      </div>

       <div className="logement__collapses">

                {/* Description */}
         <Collapse title="Description">
              <p>{logement.description}</p>
         </Collapse>
      
                {/* Équipements */}
         <Collapse title="Équipements">
             <ul className="equipments">
                {logement.equipments.map((equipement, index) => (
               <li key={index}>{equipement}</li>
          ))}
            </ul>
         </Collapse>

      </div>
    </div>
  );
}


