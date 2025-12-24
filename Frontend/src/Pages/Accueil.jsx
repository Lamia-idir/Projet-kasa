import Banner from "../Components/Banner";
import bannerAccueil from "../Assets/banner-accueil.png"; 
import Gallery from "../Components/Gallery";
import { useEffect, useState } from "react";
import "./Accueil.css";
export default function Accueil() {
   const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setLogements(data))
      .catch(console.error);
  }, []);


  return ( 
   <main className="accueil-sapce">
     <Banner
          image={bannerAccueil}
          text="Chez vous, partout et ailleurs"
      />
          <Gallery logements={logements} />
        
   </main>
   )
}

