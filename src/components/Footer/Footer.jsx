import React from "react";
import { FaFacebook, FaInstagram, FaHome } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo nouvelle peau" />
      <h3 className="hours">
        Ouvert du :
        <br />
         mardi au vendredi de 9H00 à 11H30
         <br />
         Samedi de 14H00 à 18H00
         <br />
         Fermé le dimanche et lundi
      </h3>

      <ul className="link">
        <li className="footer__link-reseau">
          <FaFacebook className="icone__link icone__réseau" />
          Facebook
        </li>
        <li className="footer__link-reseau">
          <FaInstagram className="icone__link icone__réseau" />
          Instagram
        </li>
        <li className="footer__link">
          <FaHome className="icone__link" />
          64 route de Lens 62223 Sainte-Catherine-lèz-Arras
        </li>
      </ul>
    </footer>
  );
}
