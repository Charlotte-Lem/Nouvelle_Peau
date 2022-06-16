import React from 'react';
import imgProfile from '../assets/nouvelle_peau_icon.jpeg';
export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home__intro">
          <h2 className="home title">
            Salon de tatouage réalisme noir, gris et couleur
          </h2>
          <h3 className="home title-p">A propos de moi :</h3>
          <p className="home intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            repellendus.
          </p>
        </div>
        <img className="imgProfile" src={imgProfile} alt="img Estelle" />
      </div>
    </>
  );
}
