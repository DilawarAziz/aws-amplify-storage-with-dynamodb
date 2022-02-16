import React from "react";
import child1img from "../Assets/vidio-img.png";
import child2img from "../Assets/right.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-child">
        <div className="child1">
          <h1>Single Link, PayPal Profile</h1>
          <h2>The only link you’ll ever need for all your payment methods.</h2>
          <div className="input-pt">
            <p>paylinkz.app/</p>
            <input type="text" />
          </div>
          <div className="child1-img-pt">
            <img src={child1img} alt="" />
            <div className="img-sibling-text">
              <p>Introducing PayLinkz</p>
              <a href="">Watch the video</a>
            </div>
          </div>
        </div>
        <div className="child2">
          <img src={child2img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
