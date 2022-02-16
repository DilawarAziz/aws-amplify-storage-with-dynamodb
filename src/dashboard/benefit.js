import React from "react";
import cardimg from "../Assets/cards.png";
import img from "../Assets/board-child-2.png";
function Benefit() {
  return (
    <div className="benefit-main">
      <div className="benefit-child1">
        <div className="child1-text">
          <h2>All your Payment Methods</h2>
          <p>
            One Link, All your payment profiles. The only link you’ll ever need
            to get paid.
          </p>
        </div>
        <div>
          <img src={cardimg} alt="" />
        </div>
      </div>
      <div className="benefit-child2">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h1>Simple as 1-2-3</h1>
          <p>
            <h3>1</h3> Chose your profile name
          </p>
          <p>
            <h3>2</h3>Add payment links
          </p>
          <p>
            <h3>3</h3>Share your profile
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
