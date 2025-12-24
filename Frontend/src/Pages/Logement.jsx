
// import { useParams } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";

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
  const [loading, setLoading] = useState(true);
const [notFound, setNotFound] = useState(false);

 useEffect(() => {
  // setLoading(true);
  // setNotFound(false);

  fetch(`http://localhost:8080/api/properties/${id}`)
    .then((res) => {
      if (!res.ok) {
        // ex: 404 => id invalide
        setNotFound(true);
        return null;
      }
      return res.json();
    })
    .then((data) => {
      if (!data) return;
      setLogement(data);
    })
    .catch(() => setNotFound(true))
    .finally(() => setLoading(false));
}, [id]);
if (loading) return <p>Chargement...</p>;
if (notFound) return <Navigate to="/error" replace />;
if (!logement) return null;


  return (
    <div className="logement-space"> 
        <Slidshow pictures={logement.pictures}/>
        <div className="position-row">
            <div>
              <h1 className="logement__title">{logement.title}</h1>
              <p className="place-tile">{logement.location}</p>
              <Tags tags={logement.tags} />
            </div>
      
            <div className="logement__host-rating">
              <Host host={logement.host} />
              <Rating rating={logement.rating} />
             </div>
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


