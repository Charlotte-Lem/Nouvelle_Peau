import React from 'react';
import { FaFacebook, FaInstagram, FaHome } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <h3 className="hours">
        Ouvert du :
        <br />
        mardi au vendredi de 9H00 à 11H30 et de 14h00 à 18H00
        <br />
        Samedi de 14H00 à 18H00
        <br />
        Fermé le dimanche et lundi
      </h3>

      <ul className="link">
        <li className="footer__link-reseau">
          <a href="https://www.facebook.com/estellenouvellepeau">
            <FaFacebook className="icone__link icone__réseau" />
            Facebook
          </a>
        </li>
        <li className="footer__link-reseau">
          <a href="https://www.instagram.com/nouvellepeau">
            <FaInstagram className="icone__link icone__réseau" />
            Instagram
          </a>
        </li>
        <li className="footer__link">
          <FaHome className="icone__link" />
          64 route de Lens 62223 Sainte-Catherine-lèz-Arras
        </li>
      </ul>
    </footer>
  );
}
