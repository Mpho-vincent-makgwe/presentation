import React from "react";
import Nav from "./Nav"

import { Outlet } from "react-router-dom";
const Presentation = () => {
  return (
    <div className="presentation">
      <div className="slide-container">
        <Nav />      
        <Outlet />    
      </div>
    </div>
  );
};

export default Presentation;