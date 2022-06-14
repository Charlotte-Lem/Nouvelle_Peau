import React from 'react';
import Navbar from '../Navbar/Navbar';
import logo from '../../assets/logo.jpg';

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__content">
          <h1>Nouvelle Peau</h1>
          <h2>Tattoo Shop</h2>
        </div>
      </div>
        <img className="img-logo" src={logo} alt="logo nouvelle peau" />

      <Navbar />
    </div>
  );
}
