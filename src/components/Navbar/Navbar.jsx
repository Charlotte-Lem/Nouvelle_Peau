import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav__link" to= "/"> Accueil</Link>
      <Link className="nav__link" to="/gallery"> Galerie</Link>
      <Link className="nav__link" to="/contact"> Contact</Link>
    </nav>
  );
}
