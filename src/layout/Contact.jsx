import React from "react";

export default function Contact() {
  return (
    <div className="contact__content">
      <h2 className="contact__h2">Besoin d'information? Contactez-moi :</h2>
      <form className="form-contact" action="">
        <label htmlFor="input-contact">Votre message : </label>
        <input className="input-contact" type="text" />
        <label htmlFor="input-mail">Votre email</label>
        <input className="input-mail" type="mail" />
      </form>
      
      <div className="contact__hours">
        <h3>Téléphone : 0600000000</h3>
        <p className="hours">
          Ouvert du :
          <br />
          mardi au vendredi de 9H00 à 11H30
          <br />
          Samedi de 14H00 à 18H00
          <br />
          Fermé le dimanche et lundi
        </p>
      </div>
    </div>
  );
}
