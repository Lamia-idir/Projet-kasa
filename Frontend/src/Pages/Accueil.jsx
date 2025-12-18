import Banner from "../Components/Banner";
import bannerAccueil from "../Assets/banner-accueil.png"; 

export default function Accueil() {
  return ( 
   <main>
     <Banner
          image={bannerAccueil}
          text="Chez vous, partout et ailleurs"
      />
      <div>
        
      </div>
   </main>
   )
}

