import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="mainMenu">
      <div className="Container">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/product">
          <li>Product</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
