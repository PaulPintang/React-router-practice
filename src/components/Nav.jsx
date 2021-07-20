import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav className="flex">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/contacts">
          <li>Contact</li>
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
