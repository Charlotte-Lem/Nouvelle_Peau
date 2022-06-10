import React from "react";
import imgProfile from "../assets/nouvelle_peau_icon.jpeg";
export default function Home() {
  return (
    <div className="home">
      <h2>Salon de tatouage réalisme noir et couleur</h2>
      <img className="imgProfile" src={imgProfile} alt="img Estelle" />
    </div>
  );
}
