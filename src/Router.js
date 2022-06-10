import React from "react";
import Home from "./layout/Home";
import Contact from "./layout/Contact";
import Gallery from "./layout/Gallery";

import { 
    Routes,
    Route,
  } from "react-router-dom";

  export default function  Router (){
      return (
          <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
          </>
      );
  }
