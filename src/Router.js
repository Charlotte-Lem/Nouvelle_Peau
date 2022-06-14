import React from 'react';
import Home from './layout/Home';
import Contact from './layout/Contact';
// import Gallery from './layout/Gallery';
import Available from './layout/Available';
import Work from './layout/Work';
import Convention from './layout/Convention';

import { Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Galerie/dispo" element={<Available />} />
        <Route path="/Galerie/work" element={<Work />} />
        <Route path="/Galerie/convention" element={<Convention />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
