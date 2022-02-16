import React from "react";
import logo from "../Assets/logo.png";
import menu from "../Assets/menu.png";
function Header() {
  return (
    <div className="board-main">
      <div className="board-header">
        <img src={logo} alt="logo" />
        <img src={menu} alt="icon" className="menu-icon" />
        <div>
          <a href="">Sign In</a>
          <button>Sign Up Free</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
