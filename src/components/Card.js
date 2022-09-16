import React from "react";
import Katie from "../images/katie-zaferes.png";
import Star from "../images/star.png";

function Card() {
  return (
    <div className="card">
        <img src={Katie} alt='katie-zaferes' className="card--image"/>
        <div className="stats">
            <img src={Star} alt='star'/>
            <span>5.0</span>
            <span>(6)．</span>
            <span>USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>From $136 / person</p>
    </div>
  );
}

export default Card;
