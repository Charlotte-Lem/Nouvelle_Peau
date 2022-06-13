import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/1.jpeg";

export default function Header() {
  return (
    <div className="header">
      <img className="img-logo" src={logo} alt="logo nouvelle peau" />
      <div className="header__content">
        <h1>Nouvelle Peau</h1>
        <h2>Tattoo Shop</h2>
      </div>

      <Navbar />
    </div>
  );
}
