import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/presentation/Introduction">Introduction</NavLink></li>
        <li><NavLink to="/presentation/UnderstandingReact">Understanding React</NavLink></li>
        <li><NavLink to="/presentation/TheRoleOfRouting">The Role of Routing</NavLink></li>
        <li><NavLink to="/presentation/KeyRoutingConcepts">Key Routing Concepts</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;