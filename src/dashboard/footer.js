import React from "react";
import logo from "../Assets/logo.png";
import mediaimg from "../Assets/media.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="foot-child1">
          <img src={logo} alt="" />
        </div>
        <div className="foot-child2">
          <a>About us</a>
          <a>Privacy Poacy</a>
          <a>Terms {"&"} Conditions</a>
          <a>Contact us</a>
        </div>
        <div className="child3">
          <img src={mediaimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
